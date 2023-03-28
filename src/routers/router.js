const express = require('express');

const AppRouter = new express.Router();

AppRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Technolof - Home'
    });
});


AppRouter.get("/about", (req, res) => {
    res.render('about', {
        ToPage: 'About',
        Heading: 'About',
        title: 'Technolof - About Us'
    });
});
AppRouter.get("/blog", (req, res) => {
    res.render('blog', {
        ToPage: 'Blog',
        Heading: 'Blog',
        title: 'Technolof - Blog'
    });
});

AppRouter.get("/detail", (req, res) => {
    res.render('detail', {
        ToPage: 'Blog Detail',
        Heading: 'Blog Detail',
        title: 'Technolof - Blog Detail'
    });
});

AppRouter.get("/price", (req, res) => {
    res.render('price', {
        ToPage: 'Pricing Plan',
        Heading: 'Pricing Plan',
        title: 'Technolof - Pricing Plan'
    });
});

AppRouter.get("/feature", (req, res) => {
    res.render('feature', {
        ToPage: 'Feature',
        Heading: 'Feature',
        title: 'Technolof - Features'
    });
});

AppRouter.get("/team", (req, res) => {
    res.render('team', {
        ToPage: 'Team',
        Heading: 'Team',
        title: 'Technolof - Team'
    });
});

AppRouter.get("/quote", (req, res) => {
    res.render('quote', {
        ToPage: 'Quote',
        Heading: 'Quote',
        title: 'Technolof - quote'
    });
});

AppRouter.get("/testimonial", (req, res) => {
    res.render('testimonial', {
        ToPage: 'Testimonial',
        Heading: 'Testimonial',
        title: 'Technolof - Testimonial'
    });
});

AppRouter.get("/quote", (req, res) => {
    res.render('quote', {
        ToPage: 'Quote',
        Heading: 'Quotes',
        title: 'Technolof - Quote'
    });
});

AppRouter.get("/contact", (req, res) => {
    res.render('contact', {
        ToPage: 'Contact',
        Heading: 'Contact',
        title: 'Technolof - Contact'
    });
});

// AppRouter.post('/quote', async (req, res) => {
//     const data = req.body.name;

//     const url = 'https://script.google.com/macros/s/AKfycbwRM8YTpYpDa9kbbso5sSzpaf1dI5pzZjvsT3eJHxcgPs3c690i2JTnLwBGSvMgyz4/exec';
//     console.log(data);

//     const options = {
//         body: JSON.stringify(data),
//         headers: {'Content-Type': 'application/json'}
//     };

//     try {
//         const resp = await fetch(url, options);
    
//         res.send(resp);

//     } catch(e) {
//         console.log(e);
//     }
//     res.send();
// });

AppRouter.get("*", (req, res) => {
    res.status(404).render('404');
});

module.exports = AppRouter;