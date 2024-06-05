const DocumentService = require('../services/document.service');

class DocumentController {
    async addDocument(req, res) {
        try {
            const document = await DocumentService.addDocument(req.body);
            res.status(201).json(document);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllDocuments(req, res) {
        try {
            const documents = await DocumentService.getAllDocuments();
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getDocument(req, res) {
        try {
            const document = await DocumentService.getDocument(req.params.id);
            res.status(200).json(document);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateDocument(req, res) {
        try {
            const document = await DocumentService.updateDocument(req.params.id, req.body);
            res.status(200).json(document);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deleteDocument(req, res) {
        try {
            await DocumentService.deleteDocument(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getDocumentsByEmployeeId(req, res) {
        try {
            const documents = await DocumentService.getDocumentsByEmployeeId(req.params.employeeId);
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async addDocumentForEmployee(req, res) {
        try {
            const document = await DocumentService.addDocumentForEmployee(req.params.employeeId, req.body);
            res.status(201).json(document);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateDocumentForEmployee(req, res) {
        try {
            const document = await DocumentService.updateDocumentForEmployee(req.params.employeeId, req.params.id, req.body);
            res.status(200).json(document);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteDocumentsByEmployeeId(req, res) {
        try {
            await DocumentService.deleteDocumentsByEmployeeId(req.params.employeeId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getDocumentByEmployeeIdAndDocumentId(req, res) {
        try {
            const document = await DocumentService.getDocumentByEmployeeIdAndDocumentId(req.params.employeeId, req.params.documentId);
            res.status(200).json(document);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new DocumentController();
