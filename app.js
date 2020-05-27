//WEB SERVER
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require('hbs');
const app = express();

const config = require("./config.json");

const publicDirectoryPath = path.join(__dirname, './public/');
const viewsPath = path.join(__dirname, './views');
const partialsPath = path.join(__dirname, './views/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('', (req, res) => {
    res.render('index', {
        title: 'Email Sender',
        name: 'Ben Whybrow'
    })
});

app.get('/mail-send', (req, res) => {
    res.render('mail-send', {
        title: 'Email Sender',
        name: 'Ben Whybrow'
    })
});

app.get(`/about`, (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ben Whybrow'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Ben Whybrow',
        errorMessage: 'Page not found.'
    })
})

app.listen(config.port, () => {
    console.log(`Server is up on port ${config.port}`)
})

//EMAIL
const nodeMailer = require('nodemailer');

//CONNECT TO SERVER
// HOTMAIL
let transporter = nodeMailer.createTransport({
    host: config.server.host,
    secure: config.server.secure,
    port: config.server.port,
    auth: {
        user: config.auth.user,
        pass: config.auth.password
    }
})


// API
app.post('/mail-sent', urlencodedParser, (req, res) => {
    res.render('mail-sent', {
        title: 'Email Sender',
        name: 'Ben Whybrow'
    })

    //SETUP EMAIL
    let mailOptions = {
        from: `${config.auth.name} <${config.auth.user}>`,
        to: req.body.recipent,
        subject: req.body.subject,
        text: req.body.message,
        attatchments: req.body.file
    };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            return console.log(error);
            }

            console.log('Message sent: ' + info.response);
        });
});