import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';

import loadStrategy from './app/middleware/passport';
import api from './app/api';

const PORT = process.env.PORT || config.port;

/////////////////////
// Configure Database
const opts = {
	server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }},
	replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }}
};

mongoose.connect(config.DBHost, opts);
const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'connection error:'));

////////////////////
// Configure Express
const app = express();

app.use(cors());
if (config.util.getEnv('NODE_ENV') !== 'test') {
	app.use(morgan('combined'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(passport.initialize());

loadStrategy(passport);

// gzip assets
app.use(compression());

// serve static files under build folder
app.use(express.static(__dirname + '/build'));

// handle api calls
app.use('/api', api());

// pushstate support
app.get('*', (req, res) => {
  res.sendfile(__dirname + '/build/index.html');
});

app.server = app.listen(PORT);
console.log('Listening on port ', + PORT);

export default app;
