const express = require('express');
const detalleMenuControllers = require('../controllers/other/detalleMenu.controllers');


router.get('/detalle/:id', detalleMenuControllers.getMenu)

module.exports = router;