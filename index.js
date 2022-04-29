const express = require('express');
var bodyParser = require('body-parser');
const mongoose =require('mongoose');
const router = express.Router();

const route = require('./router/routes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Rohini123:Rohini%4012345@cluster0.dggci.mongodb.net/Closefrnd-DB', {
    useNewUrlParser: true,
})
.then(() => { console.log('Connected to MongoDB') })
.catch(err => { console.log('Error connecting to MongoDB: ' + err) });

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
