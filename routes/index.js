var routerIndex = require('express').Router();
var routerGroup = require('express').Router();
var templateController = require('../controllers/template');

routerGroup.get('/', templateController.index);

routerGroup.get('/templates', templateController.view);

routerGroup.post('/templates', templateController.new);

routerGroup.get('/templates/:id', templateController.details);

routerGroup.put('/templates/:id', templateController.update);

routerGroup.delete('/templates/:id', templateController.delete);

routerIndex.use('/api', routerGroup);

module.exports = routerIndex;