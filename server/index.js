const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const {errorHandler} = require('./middleware/Error');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/TodoApp',require('./routes/todoRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started ${PORT}`));

const DB =
    'mongodb+srv://HardikS:hardik6869@cluster0.sixsh.mongodb.net/TodoReact?retryWrites=true&w=majority';
mongoose
    .connect(DB)
    .then(() => {
        console.log('Successful');
    })
    .catch(() => console.log(`Error`));




// uri = "mongodb+srv://HardikS:<password>@cluster0.sixsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
