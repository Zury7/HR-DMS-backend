// services/document.service.js

const Document = require('../models/document.model');

class DocumentService {
    async addDocument(documentData) {
        try {
            const document = await Document.create(documentData);
            return document;
        } catch (error) {
            throw new Error('Error adding document: ' + error.message);
        }
    }

    async getAllDocuments() {
        try {
            const documents = await Document.findAll();
            return documents;
        } catch (error) {
            throw new Error('Error fetching documents: ' + error.message);
        }
    }

    async getDocument(id) {
        try {
            const document = await Document.findByPk(id);
            if (!document) {
                throw new Error('Document not found');
            }
            return document;
        } catch (error) {
            throw new Error('Error fetching document: ' + error.message);
        }
    }

    async updateDocument(id, updateData) {
        try {
            const document = await Document.findByPk(id);
            if (!document) {
                throw new Error('Document not found');
            }
            await document.update(updateData);
            return document;
        } catch (error) {
            throw new Error('Error updating document: ' + error.message);
        }
    }

    async deleteDocument(id) {
        try {
            const document = await Document.findByPk(id);
            if (!document) {
                throw new Error('Document not found');
            }
            await document.destroy();
            return document;
        } catch (error) {
            throw new Error('Error deleting document: ' + error.message);
        }
    }

    async getDocumentsByEmployeeId(employeeId) {
        try {
            const documents = await Document.findAll({ where: { employeeId } });
            return documents;
        } catch (error) {
            throw new Error('Error fetching documents: ' + error.message);
        }
    }

    async addDocumentForEmployee(employeeId, documentData) {
        try {
            const document = await Document.create({ ...documentData, employeeId });
            return document;
        } catch (error) {
            throw new Error('Error adding document: ' + error.message);
        }
    }

    async updateDocumentForEmployee(employeeId, documentId, updateData) {
        try {
            const document = await Document.findOne({ where: { id: documentId, employeeId } });
            if (!document) {
                throw new Error('Document not found');
            }
            await document.update(updateData);
            return document;
        } catch (error) {
            throw new Error('Error updating document: ' + error.message);
        }
    }

    async deleteDocumentsByEmployeeId(employeeId) {
        try {
            await Document.destroy({ where: { employeeId } });
        } catch (error) {
            throw new Error('Error deleting documents: ' + error.message);
        }
    }

    async getDocumentByEmployeeIdAndDocumentId(employeeId, documentId) {
        try {
            const document = await Document.findOne({ where: { id: documentId, employeeId } });
            if (!document) {
                throw new Error('Document not found');
            }
            return document;
        } catch (error) {
            throw new Error('Error fetching document: ' + error.message);
        }
    }
}

module.exports = new DocumentService();
