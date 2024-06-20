import React from "react";
export interface GitHubLoginProps {
    buttonText?: string;
    children?: React.ReactNode;
    className?: string;
    clientId: string;
    clientSecret: string;
    onRequest?: () => void;
    onSuccess?: (data: any) => void;
    onFailure?: (error: Error) => void;
    redirectUri: string;
    scope: string;
}
export interface GitHubLoginState {
}
export interface PopupWindowOptions {
    [key: string]: any;
}
export interface InstagramLoginProps {
    onSuccess: (response: any) => void;
    onFailure: (error: {
        error: string;
        error_reason: string;
        error_description: string;
    }) => void;
    clientId: string;
    clientSecret: string;
    buttonText?: string;
    scope?: string;
    cssClass?: string;
    children?: React.ReactNode;
    tag?: string;
    redirectUri?: string;
    type?: string;
    implicitAuth?: boolean;
}
export interface InstagramLoginState {
}
export interface FacebookLoginProps {
    callback: (response: any) => void;
    appId: string;
    xfbml?: boolean;
    cookie?: boolean;
    scope?: string;
    textButton?: string;
    autoLoad?: boolean;
    size?: string;
    fields?: string;
    cssClass?: string;
    version?: string;
    icon?: string;
    language?: string;
}
//# sourceMappingURL=index.d.ts.map