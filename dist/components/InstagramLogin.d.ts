import React, { Component } from "react";
import { InstagramLoginProps, InstagramLoginState } from "../interface";
declare class InstagramLogin extends Component<InstagramLoginProps, InstagramLoginState> {
    static defaultProps: {
        buttonText: string;
        scope: string;
        tag: string;
        type: string;
        implicitAuth: boolean;
    };
    constructor(props: InstagramLoginProps);
    componentDidMount(): void;
    onBtnClick(): void;
    exchangeCodeForToken(code: string): void;
    fetchUserDetails(accessToken: string): void;
    render(): React.DOMElement<{
        className: string | undefined;
        onClick: () => void;
        style: {};
        type: string | undefined;
    }, Element>;
}
export { InstagramLogin };
export default InstagramLogin;
//# sourceMappingURL=InstagramLogin.d.ts.map