const express = require('express');
const router = express.Router();
const controllerMusic = require('../controllers/musics')

router.get('/', (req, res) => {
    res.status(200).json({ success: 'RACINE API' });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: 'bounty' });
});

router.get('/musics', controllerMusic.find);

router.post('/musics', controllerMusic.create);

router.get('/musics/:id', controllerMusic.findById);

router.get('/musics/random', controllerMusic.random);

router.delete('/musics/:id', controllerMusic.delete);

module.exports = router;