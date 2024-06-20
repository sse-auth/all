import * as React from "react";
import { TwitterLoginProps, TwitterLoginState } from "../interface";
export default class TwitterLoginComponent extends React.Component<TwitterLoginProps, TwitterLoginState> {
    constructor(props: TwitterLoginProps);
    componentDidMount(): void;
    initializeProcess: () => void;
    handleLoginClick: () => Promise<void>;
    handleClosingPopup: () => void;
    handleError: (message: string) => void;
    render(): React.JSX.Element;
}
//# sourceMappingURL=TwitterLogin.d.ts.map