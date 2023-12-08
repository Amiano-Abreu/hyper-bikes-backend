// const path = require('path');
// const https = require('https');
// const fs = require('fs');

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('./config');

const newsRoute = require('./routes/newsRoute');
const bikesRoute = require('./routes/bikesRoute');
const usersRoute = require('./routes/usersRoute');

const app = express();

const corsOptions = {
    origin: config.origin,
    credentials: true
}

app.use(cors(corsOptions));
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'https://firebasestorage.googleapis.com'],
      },
    },
}));
app.use(morgan('combined'))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, ".", "public")))

app.get('/api', (req, res) => {
    return res.status(200).json({
        status: 'SUCCESS',
        message: 'Server v2023.12.08 is ok !'
    })
})
app.use('/api', newsRoute.routes);
app.use('/api', bikesRoute.routes);
app.use('/api', usersRoute.routes);

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, ".", "public", "index.html"))
// })

app.use((req, res) => {
    return res.status(404).json({
        status: 'ERROR',
        message: 'Invalid api route'
    })
})

// https.createServer({
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// }, app).listen(config.port , () => console.log(`App is listening on url ${config.url}`) );

app.listen(config.port , () => console.log(`App is listening on url ${config.url}`) )