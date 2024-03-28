import { Base } from '../base';
import { 
    RequestOauthToken,
    RequestRefreshToken,
    OauthToken 
} from './types';

export class Auth extends Base {
  authUrl(): string {
    return `${this.getAuthUrl()}/auth?client_id=${this.clientId}&response_type=code&scope=esign`;
  }

  requestAuthToken(code: string): Promise<OauthToken> {
    const data: RequestOauthToken = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code,
      grant_type: 'authorization_code'
    }

    return this.makeRequest(`${this.getAuthUrl()}/auth/oauth2/token`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  requestRefreshToken(refreshToken: string): Promise<OauthToken> {
    const data: RequestRefreshToken = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }

    return this.makeRequest(`${this.getAuthUrl()}/auth/oauth2/token`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
}
