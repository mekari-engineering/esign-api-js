"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(config) {
        this.accessToken = '';
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
        if (config.sandbox === true) {
            this.sandbox = true;
        }
    }
    // public setAccessToken(token: string): void {
    //     this.accessToken = token;
    // }
    makeRequest(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json',
            };
            if (options && options.headers) {
                Object.assign(headers, options.headers);
            }
            const config = Object.assign(Object.assign({}, options), { headers });
            const response = yield fetch(url, config);
            return response.json();
        });
    }
    getBaseUrl() {
        return this.sandbox ? 'https://sandbox-api.mekari.com/v2/esign/v1' : 'https://api.mekari.com/v2/esign/v1';
    }
    getAuthUrl() {
        return this.sandbox ? 'https://sandbox-account.mekari.com' : 'https://account.mekari.com';
    }
}
exports.Base = Base;
