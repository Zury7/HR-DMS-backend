module.exports = (app) => {
    const documentController = require('../controllers/document.controller');

    const router = require('express').Router();

    router.post('/document', documentController.addDocument);
    router.get('/document', documentController.getAllDocuments);
    router.get('/document/:id', documentController.getDocument);
    router.put('/document/:id', documentController.updateDocument);
    router.delete('/document/:id', documentController.deleteDocument);

    app.use('/api', router);
};