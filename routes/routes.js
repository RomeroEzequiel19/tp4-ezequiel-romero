const express = require('express')
const router = express.Router()


//Importo los controladores
const {
    peticionGet,
    peticionPost,
    peticionPut,
    peticionDelete
} = require('../controllers/controllers');

//Rutas 

router.get('/', peticionGet);
router.post('/', peticionPost);
router.put('/', peticionPut);
router.delete('/', peticionDelete);


// Exportaciones de rutas
module.exports = router;