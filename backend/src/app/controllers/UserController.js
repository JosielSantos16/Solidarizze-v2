import User from '../models/User';
import * as Yup from 'yup';
import { v4 } from 'uuid';

class UserController {
    async store(req, res) {
        const { name, cpf, email, password } = req.body;

        const schema = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            cpf: Yup.string()
                .required('CPF is required')
                .length(11, 'CPF must have 11 digits')
                .matches(/^\d+$/, 'CPF must contain only numbers'),
            email: Yup.string().required('Email is required').email('Invalid email format'),
            password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
        });

        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).json({ error: error.errors });
        }

        const userExists = await User.findOne({
            where: { email }
        });

        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        const user = await User.create({
            id: v4(),
            name,
            cpf,
            email,
            password
        });

        return res.status(201).json(user);
    }
}

export default new UserController();
