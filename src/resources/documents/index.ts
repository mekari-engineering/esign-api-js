import { Base } from '../base';
import { NewDocument, Document } from './types';

export class Documents extends Base {

  createGlobalDocument(accessToken: string, 
                       newDocument: NewDocument): Promise<Document> {
    return this.makeRequest(`${this.getBaseUrl()}/documents/request_global_sign`, {
        method: 'POST',
        body: JSON.stringify(newDocument),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
  }

  createPsreDocument(accessToken: string, 
                     newDocument: NewDocument): Promise<Document> {
    return this.makeRequest(`${this.getBaseUrl()}/documents/psre/request_sign`, {
      method: 'POST',
      body: JSON.stringify(newDocument),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  generateSignUrl(accessToken: string,
                  documentId: string): Promise<string> {
    return this.makeRequest(`${this.getBaseUrl()}/documents/${documentId}/generate_signing_url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  getAll(accessToken: string): Promise<Document> {
    let url = `${this.getBaseUrl()}/documents`;
    let queryParams: Record<string, string> = {
      'limit': '10',
      'page': '1'
    };

    let baseUrl: URL = new URL(url);
    baseUrl.search = new URLSearchParams(queryParams).toString();

    return this.makeRequest(baseUrl.toString(), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  getById(accessToken: string, documentId: string): Promise<Document> {
    return this.makeRequest(`${this.getBaseUrl()}/documents/${documentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }        

}
