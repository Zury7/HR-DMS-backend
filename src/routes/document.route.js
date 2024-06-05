/**
 * @swagger
 * tags:
 *   name: Documents
 *   description: Document management
 */

/**
 * @swagger
 * /api/document:
 *   post:
 *     summary: Create a new document
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The created document.
 *   get:
 *     summary: Get all documents
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The list of documents.
 */

/**
 * @swagger
 * /api/document/{id}:
 *   get:
 *     summary: Get a document by ID
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The document description by ID.
 *   put:
 *     summary: Update a document by ID
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The updated document.
 *   delete:
 *     summary: Delete a document by ID
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The deleted document.
 */

/**
 * @swagger
 * /api/employee/{employeeId}/documents:
 *   get:
 *     summary: Get all documents for an employee
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The list of documents for the employee.
 *   post:
 *     summary: Add a document for an employee
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The added document for the employee.
 *   delete:
 *     summary: Delete all documents for an employee
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The deleted documents for the employee.
 */

/**
 * @swagger
 * /api/employee/{employeeId}/documents/{documentId}:
 *   get:
 *     summary: Get a specific document for an employee
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The document for the employee.
 *   put:
 *     summary: Update a document for an employee
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: The updated document for the employee.
 */

module.exports = (app) => {
    const documentController = require('../controllers/document.controller');

    const router = require('express').Router();

    router.post('/document', documentController.addDocument);
    router.get('/document', documentController.getAllDocuments);
    router.get('/document/:id', documentController.getDocument);
    router.put('/document/:id', documentController.updateDocument);
    router.delete('/document/:id', documentController.deleteDocument);
    router.get('/employee/:employeeId/documents', documentController.getDocumentsByEmployeeId); // Get all documents for an employee
    router.post('/employee/:employeeId/documents', documentController.addDocumentForEmployee); // Add document for an employee
    router.put('/employee/:employeeId/documents/:id', documentController.updateDocumentForEmployee); // Update document for an employee
    router.delete('/employee/:employeeId/documents', documentController.deleteDocumentsByEmployeeId); // Delete all documents for an employee
    router.get('/employee/:employeeId/documents/:documentId', documentController.getDocumentByEmployeeIdAndDocumentId); // Get specific document for an employee


    app.use('/api', router);
};