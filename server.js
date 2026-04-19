require('dotenv').config();
const express = require('express');
const app = express();
const db=require("./db.js")




const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;

const Person =require('./models/person.js')
const MenuItem=require('./models/MenuItem.js')

app.get('/', function (req, res) {
    res.send('Welcome to my hotel...');
});





//import the router files
const personroutes=require('./routes/personRoutes.js');
const menuItemRoutes=require('./routes/menuItemRoutes.js');
//use the router
app.use('/person',personroutes);
app.use('/menu',menuItemRoutes)



app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});