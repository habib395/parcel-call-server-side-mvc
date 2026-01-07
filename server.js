require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const app = express();
const port = process.env.PORT || 8400;
const usersInfo = require('./routes/usersRoute');
const reviewsInfo = require('./routes/reviewsRoute');
const adminStatInfo = require('./routes/adminStatRoute');
const bookInfo = require('./routes/booksRoute');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST','PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

const startServer = async() => {
    try {
        await connectDB();
        console.log('DB connection established successful.');

        app.get('/', (req, res) => {
            res.send('parcel Call is running!')
        })

        app.use('/api/v1', usersInfo);

        app.use('/api/v1', reviewsInfo);

        app.use('/api/v1', adminStatInfo);

        app.use('/api/v1', bookInfo);

        app.listen(port, () => {
            console.log(`parcel call is running on port: ${port}`)
        })

    } catch (error) {
        console.error('failed to start server')
    }
};

startServer();