type Config = {
    clientId: string;
    clientSecret: string;
    sandbox?: boolean;
};

export abstract class Base {
    private sandbox?: boolean;
    public clientId: string;
    public clientSecret: string;
    public accessToken: string = '';

    constructor(config: Config) {
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
    
        if (config.sandbox === true) {
            this.sandbox = true;
        }
    }

    // public setAccessToken(token: string): void {
    //     this.accessToken = token;
    // }

    protected async makeRequest<T>(url: string, options?: RequestInit): Promise<T> {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (options && options.headers) {
            Object.assign(headers, options.headers);
        }

        const config = {
            ...options,
            headers
        };

        const response = await fetch(url, config)

        return response.json();
    }

    protected getBaseUrl(): string {
        return this.sandbox ? 'https://sandbox-api.mekari.com/v2/esign/v1' : 'https://api.mekari.com/v2/esign/v1';
    }

    protected getAuthUrl(): string {
        return this.sandbox ? 'https://sandbox-account.mekari.com' : 'https://account.mekari.com';
    }

}