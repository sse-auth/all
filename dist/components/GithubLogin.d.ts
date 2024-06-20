import React from "react";
import { GitHubLoginProps, GitHubLoginState } from "../interface";
declare class GitHubLogin extends React.Component<GitHubLoginProps, GitHubLoginState> {
    static defaultProps: {
        buttonText: string;
        redirectUri: string;
        scope: string;
        onRequest: () => void;
        onSuccess: () => void;
        onFailure: () => void;
    };
    popup: any;
    onBtnClick: () => Promise<void>;
    getUserDetails: (code: string) => Promise<any>;
    onRequest: () => void;
    onSuccess: (data: any) => void;
    onFailure: (error: Error) => void;
    render(): React.JSX.Element;
}
export { GitHubLogin };
export default GitHubLogin;
//# sourceMappingURL=GithubLogin.d.ts.map