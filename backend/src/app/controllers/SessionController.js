import User from "../models/User";
import * as Yup from 'yup';
import jwt from "jsonwebtoken";
import authConfig from '../../config/auth'

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const schema = Yup.object().shape({
            email: Yup.string().required("O e-mail é obrigatório").email("E-mail inválido"),
            password: Yup.string().required("A senha é obrigatória"),
        });

        const userEmailOrPasswordIncorrect = () => {
            return res.status(400).json({ error: "E-mail ou senha incorretos" });
        };

        if (!(await schema.isValid(req.body))) return userEmailOrPasswordIncorrect();

        const user = await User.findOne({ where: { email } });

        if (!user) return userEmailOrPasswordIncorrect();

        if (!(await user.checkPassword(password))) return userEmailOrPasswordIncorrect();

        return res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                token: jwt.sign({ id: user.id}, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                })
            },
        });
    }
}

export default new SessionController();
