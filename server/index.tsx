const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

// app.get('/',(req,res) => {
//     res.sendFile("Hello world !!!!");
// });

const DB =
    'mongodb+srv://HardikS:hardik6869@cluster0.sixsh.mongodb.net/TodoReact?retryWrites=true&w=majority';
mongoose
    .connect(DB)
    .then(() => {
        console.log('Successful');
    })
    .catch((err) => console.log(`Error`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));

// uri = "mongodb+srv://HardikS:<password>@cluster0.sixsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
