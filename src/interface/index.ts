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