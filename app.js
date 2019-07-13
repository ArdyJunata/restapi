    // const http = require('http');

    // const hostname = '127.0.0.1';
    // const port = 3000;

    // const server = http.createServer((req, res) => {
    //     res.statusCode= 200;
    //     res.setHeader('Content-type', 'text/plain');
    //     res.end("Hello Ardy!");
    // });

    // server.listen(port, hostname, () => {
    //     console.log(`App Running On Port ${port}`);
    // });

    const express = require('express');
    const cors = require('cors');
    const helmet = require('helmet');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const app = express();

    const mongoUri = 'mongodb+srv://root:root@cluster0-7dbld.gcp.mongodb.net/test?retryWrites=true&w=majority';
    const connectDB = () =>
        mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })
            .then(() => console.log('Connected'))
            .catch(() => console.log('Failed to Connect DB!'))

    connectDB();
    
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(cors());

    const {
        userList,
        addUser,
        getUserById,
        editUser,
        deleteUser,
    } = require('./modules/users');
    

    const {
        login,
    } = require('./modules/auth');

    app.post('/login', login);
    app.get('/users', userList);
    app.get('/users/:id', getUserById);
    app.put('/users/:id', editUser);
    app.delete('/users/:id', deleteUser);
    app.post('/users', addUser);


    app.listen(process.env.PORT || 3000, () => {
        console.log('Success');
    });