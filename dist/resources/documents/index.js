"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const base_1 = require("../base");
class Documents extends base_1.Base {
    createGlobalDocument(accessToken, newDocument) {
        return this.makeRequest(`${this.getBaseUrl()}/documents/request_global_sign`, {
            method: 'POST',
            body: JSON.stringify(newDocument),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    createPsreDocument(accessToken, newDocument) {
        return this.makeRequest(`${this.getBaseUrl()}/documents/psre/request_sign`, {
            method: 'POST',
            body: JSON.stringify(newDocument),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    generateSignUrl(accessToken, documentId) {
        return this.makeRequest(`${this.getBaseUrl()}/documents/${documentId}/generate_signing_url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    getAll(accessToken) {
        let url = `${this.getBaseUrl()}/documents`;
        let queryParams = {
            'limit': '10',
            'page': '1'
        };
        let baseUrl = new URL(url);
        baseUrl.search = new URLSearchParams(queryParams).toString();
        return this.makeRequest(baseUrl.toString(), {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    getById(accessToken, documentId) {
        return this.makeRequest(`${this.getBaseUrl()}/documents/${documentId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }
}
exports.Documents = Documents;
