const router = require('express').Router();

const photoController = require('../controllers/photoController');

// GET METHOD
router.get('/photos', photoController.getAllPhotos);
router.get('/photos/:id', photoController.getOnePhotoByID);

// POST METHOD
router.post('/photos', photoController.createPhoto);

// UPDATE METHOD
router.put('/photos/:id', photoController.updateOnePhotoByID);

// DELETE METHOD
router.delete('/photos/:id', photoController.deleteOnePhotoByID);

module.exports = router;