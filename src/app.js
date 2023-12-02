import express from 'express';
import mongoose from 'mongoose';

import routes from './routes.js';

class App{
  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.hxehoiv.mongodb.net/?retryWrites=true&w=majority');

    this.middleware();
    this.routes();
  };

  middleware(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
};

export default new App().server;