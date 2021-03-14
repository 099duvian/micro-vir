const { Router } = require('express');

const path = require('path');

//Inicializamos Router
const router = Router();

//Modelos
const Image = require('../models/Image')

router.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Acer Nitro 5\\Desktop\\Proyectos Web\\micro-vir\\server\\index.html')
})

router.post('/upload', ((req, res) => {
    const image = new Image();
    image.fileName = req.file.filename;
    image.path = '/img/' + req.file.filename;
    image.originalName = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.save();
    res.redirect('/');
}))

module.exports = router;