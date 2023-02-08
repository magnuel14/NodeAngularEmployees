const express = require('express');
var logger = require('morgan');
var cors = require('cors')

const app = express();

//enviroment variables
app.set('port',process.env.PORT || 4000);

//app.use(cors({origin:"http://localhost:4200/"}))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/employes',require('./routes/employes.routes'))

module.exports=app;