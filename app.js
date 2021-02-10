
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

//Import Routes

const postsRoutes = require('./router/posts');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoutes);

//Routes
app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connect to DB
mongoose.connect(process.env.DB_URL, 
{useNewUrlParser : true},
()=>{console.log("DB connected!")}
);

app.use('/posts', postsRoutes);
//listening to the server
app.listen(3000);