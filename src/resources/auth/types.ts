export declare type RequestOauthToken = {
    client_id: string;
    client_secret: string;
    code: string;
    grant_type: string;
}

export declare type RequestRefreshToken = {
    client_id: string;
    client_secret: string;
    refresh_token: string;
    grant_type: string;
}

export declare type OauthToken = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
}