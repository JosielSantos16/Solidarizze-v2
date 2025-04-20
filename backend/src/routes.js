import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import multer from "multer";
import multerConfig from './config/multer';
import CampaignsController from "./app/controllers/CampaignsController";
import CategoryController from "./app/controllers/CategoryController";
import DonationController from "./app/controllers/DonationController";
import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/campaigns', CampaignsController.index);
routes.get('/campaigns/public', CampaignsController.publicCampaigns);
routes.get('/categories', CategoryController.index);
routes.get('/campaigns/:id', CampaignsController.show);

routes.use(authMiddleware);

routes.post('/campaigns', upload.single('file'), CampaignsController.store);
routes.put('/campaigns/:id/public', CampaignsController.publish);
routes.post('/categories', CategoryController.store);
routes.get('/campaigns/private/list', CampaignsController.privateCampaigns); 
routes.put('/campaigns/:id', upload.single('file'), CampaignsController.update);
routes.delete('/campaigns/:id', CampaignsController.delete);



routes.post('/campaigns/:id/donate', DonationController.store);
routes.get('/campaigns/:id/donations', DonationController.index);

export default routes;
