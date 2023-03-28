const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const AppRouter = require('./routers/router');

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '../public/');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.set(hbs.registerPartials(partialsPath));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use(AppRouter);




app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`);
});