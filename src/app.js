import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import routes from './routes.js';

class App{
  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.hxehoiv.mongodb.net/devhouse?retryWrites=true&w=majority');

    this.middleware();
    this.routes();
  };

  middleware(){
    this.server.use(
      '/files', 
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
};

export default new App().server;