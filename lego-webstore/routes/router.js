const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');
const urlError = require('../controllers/urlError');

    /* GET home page. */
router
    .get('/', indexController.index)
    /*Get produit */
    .get('/produits', productsController.products_list)
    /*get pour un formulaire */
    .get('/inscription', userController.sign_up)
    /*get pour afficher une 404 avec le type */
    .get('/inscriptio', urlError.raiseError)
router
    /*get pour un entrée en params */
    .get('/produits/:id', productsController.products_infos)
    


module.exports = router;
