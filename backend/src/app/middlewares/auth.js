import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, authConfig.secret);

    req.userId = decoded.id;
    console.log('Token válido! Usuário ID:', decoded.id);

    return next();
  } catch (err) {
    console.error('Erro ao verificar token:', err.message);
    return res.status(401).json({ error: 'Token is invalid' });
  }
};
