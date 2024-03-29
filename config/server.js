'use strict'

import  express from "express";
import helmet from "helmet";
import cors from "cors";
import { dbConnection } from "./config.js";
import morgan from "morgan";
import userRourtes from '../src/users/user.routes.js';
import authRouter from '../src/auth/auth.routes.js';
import publicationRouters from '../src/publications/publication.routes.js';
import commentRouters from '../src/comments/comment.routes.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/opinionManager/v1/user'
        this.authPath = '/opinionManager/v1/auth'
        this.publicationPath = '/opinionManager/v1/publication'
        this.commentPath = '/opinionManager/v1/comment'

        this.conectarDB();
        this.middlware();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlware(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.userPath, userRourtes);
        this.app.use(this.authPath, authRouter);
        this.app.use(this.publicationPath, publicationRouters);
        this.app.use(this.commentPath, commentRouters);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running on port', this.port);
        });
    }
}

export default Server;