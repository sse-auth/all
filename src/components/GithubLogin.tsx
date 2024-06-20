import React from "react"
import PopupWindow from "../utils/PopupWindow"
import { toQuery } from "../utils/utils"
import { GitHubLoginProps, GitHubLoginState } from "../interface"

class GitHubLogin extends React.Component<GitHubLoginProps, GitHubLoginState> {
    static defaultProps = {
        buttonText: "Sign in with GitHub",
        redirectUri: "",
        scope: "user:email",
        onRequest: () => {},
        onSuccess: () => {},
        onFailure: () => {},
      };
    
      popup: any;
    
      onBtnClick = async () => {
        const { clientId, scope, redirectUri } = this.props;
        const search = toQuery({
          client_id: clientId,
          scope,
          redirect_uri: redirectUri,
        });
        const popup = (this.popup = PopupWindow.open(
          "github-oauth-authorize",
          `https://github.com/login/oauth/authorize?${search}`,
          { height: 1000, width: 600 },
        ));
    
        this.onRequest();
        popup.then(
          (data: any) => {
            if (!data.code) {
              throw new Error("'code' not found");
            }
            this.onSuccess(data);
            // Get user details after successful login
            const userDetails = this.getUserDetails(data.code);
            if (this.props.onSuccess) {
              this.props.onSuccess(userDetails);
            }
          },
          (error: any) => {
            this.onFailure(error);
          },
        );
      };
    
    //   getUserDetails = async (code: string) => {
    //     const { clientId, redirectUri, clientSecret } = this.props;
    //     const tokenResponse = await axios.post(
    //       "https://github.com/login/oauth/access_token",
    //       {
    //         client_id: clientId,
    //         client_secret: clientSecret,
    //         redirect_uri: redirectUri,
    //         code,
    //       },
    //       { headers: { Accept: "application/json" } },
    //     );
    
    //     const accessToken = tokenResponse.data.access_token;
    //     const userDetailsResponse = await axios.get(`https://api.github.com/user`, {
    //       headers: { Authorization: `token ${accessToken}` },
    //     });
    //     return userDetailsResponse.data;
    //   };

    getUserDetails = async (code: string) => {
        const { clientId, redirectUri, clientSecret } = this.props;
        const tokenResponse = await fetch(
          "https://github.com/login/oauth/access_token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
            },
            body: new URLSearchParams({
              client_id: clientId,
              client_secret: clientSecret,
              redirect_uri: redirectUri,
              code,
            }),
          },
        );
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
        const userDetailsResponse = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });
        const userDetails = await userDetailsResponse.json();
        return userDetails;
      };
    
      onRequest = () => {
        if (this.props.onRequest) {
          this.props.onRequest();
        }
      };
    
      onSuccess = (data: any) => {
        if (!data.code) {
          return this.onFailure(new Error("'code' not found"));
        }
    
        if (this.props.onSuccess) {
          this.props.onSuccess(data);
        }
      };
    
      onFailure = (error: Error) => {
        if (this.props.onFailure) {
          this.props.onFailure(error);
        }
      };
    
      render() {
        const { className, buttonText, children } = this.props;
        const attrs: any = { onClick: this.onBtnClick };
    
        if (className) {
          attrs.className = className;
        }
    
        return <button {...attrs}>{children || buttonText}</button>;
      }
}

export { GitHubLogin }
export default GitHubLogin