import Campaign from '../models/Campaign';
import * as Yup from 'yup';
import Category from '../models/Category';
import { Op } from 'sequelize';

class CampaignController {
  async store(req, res) {
    if (!req.userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const schema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      goal_amount: Yup.number().positive('Goal must be positive').required('Goal is required'),
      end_date: Yup.date().required('End date is required'),
      category_id: Yup.number().required('Category ID is required'),
      is_private: Yup.boolean(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Imagem da campanha é obrigatória.' });
    }

    const { filename: photo } = req.file;
    const {
      title,
      description,
      goal_amount,
      end_date,
      category_id,
      is_private = true,
    } = req.body;

    try {
      const campaign = await Campaign.create({
        title,
        description,
        goal_amount,
        end_date,
        photo,
        path: photo,
        category_id,
        is_private: is_private === 'true' || is_private === true,
        user_id: req.userId,
      });

      return res.status(201).json(campaign);
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
      return res.status(500).json({ error: 'Erro interno ao criar campanha.' });
    }
  }

  async publicCampaigns(req, res) {
    try {
      const campaigns = await Campaign.findAll({
        where: { is_private: false },
        include: [{ model: Category, as: 'category', attributes: ['id', 'name'] }],
      });
      return res.json(campaigns);
    } catch (error) {
      console.error('Erro ao buscar campanhas públicas:', error);
      return res.status(500).json({ error: 'Erro ao buscar campanhas públicas.' });
    }
  }

  async privateCampaigns(req, res) {
    if (!req.userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    try {
      // Retorna todas as campanhas do usuário, públicas e privadas
      const campaigns = await Campaign.findAll({
        where: { user_id: req.userId },
        include: [{ model: Category, as: 'category', attributes: ['id', 'name'] }],
      });
      return res.json(campaigns);
    } catch (error) {
      console.error('Erro ao buscar campanhas privadas:', error);
      return res.status(500).json({ error: 'Erro ao buscar campanhas privadas.' });
    }
  }

  async index(req, res) {
    try {
      const campaigns = await Campaign.findAll({
        where: {
          [Op.or]: [
            { is_private: false },
            { user_id: req.userId || null },
          ],
        },
        include: [{ model: Category, as: 'category', attributes: ['id', 'name'] }],
      });
      return res.json(campaigns);
    } catch (error) {
      console.error('Erro ao buscar campanhas:', error);
      return res.status(500).json({ error: 'Erro ao buscar campanhas.' });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const campaign = await Campaign.findByPk(id, {
        include: [{ model: Category, as: 'category', attributes: ['id', 'name'] }],
      });
      if (!campaign) {
        return res.status(404).json({ error: 'Campanha não encontrada.' });
      }
      if (campaign.is_private && (!req.userId || campaign.user_id !== req.userId)) {
        return res.status(403).json({ error: 'Acesso não autorizado.' });
      }
      return res.json(campaign);
    } catch (err) {
      console.error('Erro ao buscar campanha:', err);
      return res.status(500).json({ error: 'Erro ao buscar campanha.' });
    }
  }

  async publish(req, res) {
    const { id } = req.params;
    try {
      const campaign = await Campaign.findByPk(id);
      if (!campaign) {
        return res.status(404).json({ error: 'Campanha não encontrada.' });
      }
      if (campaign.user_id !== req.userId) {
        return res.status(403).json({ error: 'Você não tem permissão para publicar esta campanha.' });
      }
      campaign.is_private = false;
      await campaign.save();
      return res.json({ message: 'Campanha publicada com sucesso.', campaign });
    } catch (err) {
      console.error('Erro ao publicar campanha:', err);
      return res.status(500).json({ error: 'Erro ao publicar campanha.' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      goal_amount: Yup.number().positive(),
      end_date: Yup.date(),
      category_id: Yup.number(),
      is_private: Yup.boolean(),
    });
    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }
    try {
      const campaign = await Campaign.findByPk(id);
      if (!campaign) {
        return res.status(404).json({ error: 'Campanha não encontrada.' });
      }
      if (campaign.user_id !== req.userId) {
        return res.status(403).json({ error: 'Você não tem permissão para editar esta campanha.' });
      }
      const { title, description, goal_amount, end_date, category_id, is_private } = req.body;
      if (title) campaign.title = title;
      if (description) campaign.description = description;
      if (goal_amount) campaign.goal_amount = goal_amount;
      if (end_date) campaign.end_date = end_date;
      if (category_id) campaign.category_id = category_id;
      if (is_private !== undefined) campaign.is_private = is_private;
      if (req.file) {
        campaign.photo = req.file.filename;
        campaign.path = req.file.filename;
      }
      await campaign.save();
      return res.json(campaign);
    } catch (error) {
      console.error('Erro ao atualizar campanha:', error);
      return res.status(500).json({ error: 'Erro interno ao atualizar campanha.' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const campaign = await Campaign.findByPk(id);
      if (!campaign) {
        return res.status(404).json({ error: 'Campanha não encontrada.' });
      }
      if (campaign.user_id !== req.userId) {
        return res.status(403).json({ error: 'Você não tem permissão para excluir esta campanha.' });
      }
      await campaign.destroy();
      return res.json({ message: 'Campanha excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir campanha:', error);
      return res.status(500).json({ error: 'Erro interno ao excluir campanha.' });
    }
  }
}

export default new CampaignController();
