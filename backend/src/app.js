import express from 'express'
import routes from './routes';
import './database'
import cors from 'cors'
import { resolve } from 'path'

class App{
    constructor(){
        this.app = express();
        this.app.use(cors())
        this.middlewares();
        this.routes();   
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(
            '/campaign-file',
            express.static(resolve(__dirname, '..', 'uploads'))
        )
    }

    routes(){
        this.app.use(routes)
    }
}

export default new App().app