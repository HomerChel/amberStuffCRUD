import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes/index.js';

async function start() {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });

  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen(process.env.APP_PORT, () =>
    console.log(`User CRUD example app listening on port ${process.env.APP_PORT}!`),
  );
}

start();
