"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const base_1 = require("../base");
class Auth extends base_1.Base {
    authUrl() {
        return `${this.getAuthUrl()}/auth?client_id=${this.clientId}&response_type=code&scope=esign`;
    }
    requestAuthToken(code) {
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code,
            grant_type: 'authorization_code'
        };
        return this.makeRequest(`${this.getAuthUrl()}/auth/oauth2/token`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    requestRefreshToken(refreshToken) {
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken,
            grant_type: 'refresh_token'
        };
        return this.makeRequest(`${this.getAuthUrl()}/auth/oauth2/token`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}
exports.Auth = Auth;
