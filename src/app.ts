import dotenv from 'dotenv';
import express from 'express';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { MONGODB_URI, SESSION_SECRET } from './util/secrets';

// Load environment variables
dotenv.config({ path: '.env' });

// Create expresse server
const app = express();

// Connect MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => {},
).catch(err => {
  console.log("MongoDB connectkon error", err);
})

// Express config
app.set("port", 3000); // Can move and set in .env
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;