const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path')

const config = require('./config');

const newsRoute = require('./routes/newsRoute');
const bikesRoute = require('./routes/bikesRoute');
const usersRoute = require('./routes/usersRoute');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, ".", "public")))

app.get('/api', (req, res) => {
    return res.status(200).json({
        status: 'SUCCESS',
        message: 'Server v2023.11.03 is ok !'
    })
})
app.use('/api', newsRoute.routes);
app.use('/api', bikesRoute.routes);
app.use('/api', usersRoute.routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ".", "public", "index.html"))
})

app.use((req, res) => {
    return res.status(404).json({
        status: 'ERROR',
        message: 'Invalid api route'
    })
})

app.listen(config.port , () => console.log(`App is listening on url ${config.url}`) );