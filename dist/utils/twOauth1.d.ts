import { RequestTokenResponse } from "../interface";
export declare const obtainOauthRequestToken: ({ consumerKey, consumerSecret, callbackUrl, method, apiUrl, }: {
    method: string;
    apiUrl: string;
    callbackUrl: string;
    consumerKey: string;
    consumerSecret: string;
}) => Promise<RequestTokenResponse>;
export declare const obtainOauthAccessToken: ({ consumerKey, consumerSecret, oauthToken, oauthVerifier, method, apiUrl, }: {
    method: string;
    apiUrl: string;
    consumerKey: string;
    consumerSecret: string;
    oauthToken: string;
    oauthVerifier: string;
}) => Promise<RequestTokenResponse>;
//# sourceMappingURL=twOauth1.d.ts.map