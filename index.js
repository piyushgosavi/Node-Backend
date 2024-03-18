const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/app2',{useNewUrlParser: true,
useUnifiedTopology: true});

//middleware
app.use(bodyParser.json());

//Routes
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);

app.listen(port,()=>{
    console.log("Listening to port 3000")
})

app.get('/',(req,res)=>{
   res.send('Helloworld');
})