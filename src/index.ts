import { Auth } from './resources/auth';
import { Documents } from './resources/documents';

export class eSignAPi {
  auth: Auth;
  documents: Documents;

  constructor(config: { clientId: string; clientSecret: string }) {
    this.auth = new Auth(config);
    this.documents = new Documents(config);
  }
}
