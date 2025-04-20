import Donation from '../models/Donation';
import Campaign from '../models/Campaign';
import * as Yup from 'yup';

class DonationController {
  async store(req, res) {
    if (!req.userId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }
  
    const { id: campaign_id } = req.params;
    const { amount } = req.body;
    const user_id = req.userId;
  
    const schema = Yup.object().shape({
      amount: Yup.number()
        .positive('O valor deve ser positivo')
        .required('O valor da doação é obrigatório')
        .min(0.01, 'O valor mínimo é R$ 0,01'),
    });
  
    try {
      await schema.validate(req.body);
  
      const campaign = await Campaign.findByPk(campaign_id);
      if (!campaign) {
        return res.status(404).json({ error: 'Campanha não encontrada' });
      }
  
      if (new Date(campaign.end_date) < new Date()) {
        return res.status(400).json({ error: 'Esta campanha já encerrou' });
      }
  
      const donation = await Donation.create({
        amount,
        campaign_id,
        user_id,
      });
  
      campaign.current_amount = parseFloat(campaign.current_amount) + parseFloat(amount);
      await campaign.save();
  
      return res.json({
        donation: {
          id: donation.id,
          amount: donation.amount,
          donation_date: donation.donation_date
        },
        campaign: {
          current_amount: campaign.current_amount,
          goal_amount: campaign.goal_amount
        },
        message: 'Doação realizada com sucesso!'
      });
  
    } catch (error) {
      console.error('Erro ao registrar doação:', error);
      return res.status(500).json({ 
        error: 'Erro ao processar doação',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
  

  async index(req, res) {
    const { id: campaign_id } = req.params;

    try {
      const donations = await Donation.findAll({
        where: { campaign_id },
        order: [['donation_date', 'DESC']],
        attributes: ['id', 'amount', 'donation_date'],
        include: [{
          association: 'donor',
          attributes: ['id', 'name']
        }]
      });

      return res.json(donations);
    } catch (error) {
      console.error('Erro ao buscar doações:', error);
      return res.status(500).json({ 
        error: 'Erro ao buscar doações',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

export default new DonationController();