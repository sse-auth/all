import React, { Component } from "react";
import { InstagramLoginProps, InstagramLoginState } from "../interface"
import { inGetQueryVariable } from "../utils/utils"

class InstagramLogin extends Component<
  InstagramLoginProps,
  InstagramLoginState
> {
  static defaultProps = {
    buttonText: "Login with Instagram",
    scope: "basic",
    tag: "button",
    type: "button",
    implicitAuth: false,
  };

  constructor(props: InstagramLoginProps) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    if (this.props.implicitAuth) {
      const matches = window.location.hash.match(/=(.*)/);
      if (matches) {
        this.fetchUserDetails(matches[1]);
      }
    } else if (window.location.search.includes("code")) {
      this.exchangeCodeForToken(inGetQueryVariable("code") as string);
    } else if (window.location.search.includes("error")) {
      this.props.onFailure({
        error: inGetQueryVariable("error") as string,
        error_reason: inGetQueryVariable("error_reason") as string,
        error_description: inGetQueryVariable("error_description") as string,
      });
    }
  }

  onBtnClick() {
    const { clientId, scope } = this.props;
    const redirectUri = this.props.redirectUri || window.location.href;
    const responseType = this.props.implicitAuth ? "token" : "code";
    window.location.href = `https://api.instagram.com/oauth/authorize/?app_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
  }

  exchangeCodeForToken(code: string) {
    const redirectUri = this.props.redirectUri || window.location.href;
    const { clientId, clientSecret } = this.props;
    const tokenUrl = `https://api.instagram.com/oauth/access_token`;

    fetch(tokenUrl, {
      method: "POST",
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code: code,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          this.fetchUserDetails(data.access_token);
        } else {
          this.props.onFailure(data);
        }
      })
      .catch((error) => {
        this.props.onFailure(error);
      });
  }

  fetchUserDetails(accessToken: string) {
    fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.props.onSuccess(data);
      })
      .catch((error) => {
        this.props.onFailure(error);
      });
  }

  render() {
    const style = {
      display: "inline-block",
      background:
        "linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      color: "#fff",
      width: 200,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: "1px solid transparent",
      fontSize: 16,
      fontWeight: "bold",
      fontFamily:
        '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif',
    };
    const { cssClass, buttonText, children, tag, type } = this.props;
    const instagramLoginButton = React.createElement(
      tag as string,
      {
        className: cssClass,
        onClick: this.onBtnClick,
        style: cssClass ? {} : style,
        type,
      },
      children || buttonText,
    );

    return instagramLoginButton;
  }
}

export { InstagramLogin }

export default InstagramLogin;