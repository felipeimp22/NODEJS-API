const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cors = require('cors');

//App init
const App = express();
App.use(express.json());
App.use(cors());

// DB init
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});

requireDir('./src/models');

App.use('/api', require('./src/routes'));

App.listen(3001);
