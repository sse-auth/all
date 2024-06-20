import React from "react";
import { FacebookLoginProps } from "../interface";
declare class FacebookLogin extends React.Component<FacebookLoginProps> {
    static defaultProps: {
        textButton: string;
        scope: string;
        xfbml: boolean;
        cookie: boolean;
        size: string;
        fields: string;
        cssClass: string;
        version: string;
        language: string;
    };
    constructor(props: FacebookLoginProps);
    componentDidMount(): void;
    fetchUser: (authResponse: any, callback: (response: any) => void) => void;
    responseApi: (authResponse: any) => void;
    checkLoginState: (response: any) => void;
    click: () => void;
    renderWithFontAwesome(): React.JSX.Element;
    render(): React.JSX.Element;
}
export { FacebookLogin };
export default FacebookLogin;
//# sourceMappingURL=FacebookLogin.d.ts.map