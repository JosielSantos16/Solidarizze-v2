import * as Yup from 'yup';
import Category from '../models/Category';

class CategoryController {
    async store(req, res) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
            });

            try {
                await schema.validate(req.body, { abortEarly: false });
            } catch (err) {
                return res.status(400).json({ error: err.errors });
            }

            const { name } = req.body;

            const categoryExists = await Category.findOne({ 
              where: { 
                name 
            },
        });
            
            if (categoryExists) {
              return res.status(400).json({ error: 'Category already exists' });
           }

            const { id } = await Category.create({ name });

            return res.json({ name, id })
        } catch (err) {
            console.log(err)
        }
    }    

    async index(req, res) {
            const categories = await Category.findAll();
            return res.json(categories);
    }
}

export default new CategoryController();


