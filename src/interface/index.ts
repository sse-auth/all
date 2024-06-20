import React from "react";

// Github Login Interface
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

export interface GitHubLoginState {}

// Popup Window Interface
export interface PopupWindowOptions {
  [key: string]: any;
}

// Instagram Login Interface
export interface InstagramLoginProps {
  onSuccess: (response: any) => void;
  onFailure: (error: {
    error: string;
    error_reason: string;
    error_description: string;
  }) => void;
  clientId: string;
  clientSecret: string; // Add clientSecret to props
  buttonText?: string;
  scope?: string;
  cssClass?: string;
  children?: React.ReactNode;
  tag?: string;
  redirectUri?: string;
  type?: string;
  implicitAuth?: boolean;
}
// Twitter Login Inteface
export interface RequestTokenResponse {
  oauth_token: string;
  oauth_token_secret: string;
  oauth_callback_confirmed?: string;
}

export interface InstagramLoginState {}

// Facebook Login Interface
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

// Twitter Login .d.ts
export type TwitterLoginButtonTheme = "dark_short" | "light_short" | "dark" | "light";

export interface TwitterLoginProps {
  /**
   * Consumer API key
   */
  consumerKey: string;

  /**
   * Consumer API secret key
   */
  consumerSecret: string;

  /**
   * Callback function which takes two arguments (error, authData)
   */
  authCallback: (error?: any, result?: any) => void;

  /**
   * DEPRECATED
   * "callbackUrl" is not supported from version 1.2.0 and higher. It's hardcoded inside the package with "window.location.href". More details: https://github.com/alexandrtovmach/react-twitter-login/issues/8
   * The redirect URI of the application, this should be same as the value in the application registration portal.
   */
  callbackUrl?: string;

  /**
   * Name of theme for button style.
   */
  buttonTheme?: TwitterLoginButtonTheme;

  /**
   * Additional class name string.
   */
  className?: string;

  /**
   * Child elements
   */
  children?: React.ReactNode;
}

export interface TwitterLoginState {
  isCompleted: boolean;
  popup?: Window;
}

export declare class TwitterLogin extends React.Component<TwitterLoginProps, TwitterLoginState> {}

export interface TwitterLoginButtonProps {
  buttonTheme: TwitterLoginButtonTheme;
  buttonClassName?: string;
  onClick?: any;
}