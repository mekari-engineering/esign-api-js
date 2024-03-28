"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eSignAPi = void 0;
const auth_1 = require("./resources/auth");
const documents_1 = require("./resources/documents");
class eSignAPi {
    constructor(config) {
        this.auth = new auth_1.Auth(config);
        this.documents = new documents_1.Documents(config);
    }
}
exports.eSignAPi = eSignAPi;
