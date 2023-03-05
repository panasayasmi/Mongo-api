var express = require('express');
var router = express.Router();
var MenuModel = require('../models/Menu');

router.get('/', async (req, res) => {
    MenuModel.find((error, data) => {
        if (error) {
            res.status(500).send('Error');
        } else {
            res.status(200).send(data);
        }
    });
});

router.get('/:id', async (req, res) => {
    MenuModel.findById(req.params.id, (error, data) => {
        if (error) {
            res.status(500).send('Error');
        } else {
            res.status(200).send(data);
        }
    });
});

router.post('/create', async function(req, res) {
    MenuModel.create(req.body, (error, data) => {
        if (error){
            res.status(500).send('Error');
        } else {
            res.status(200).send(data);
        }
    });
});

router.delete('/delete/:id', async function(req, res) {
    MenuModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error){
            res.status(500).send('Error');
        } else {
            res.status(200).send(data);
        }
    });
});

router.put('/update/:id', async function(req, res) {
    MenuModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error){
            res.status(500).send('Error');
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;