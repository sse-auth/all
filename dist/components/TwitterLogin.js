"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const twWindow_1 = require("../utils/twWindow");
const twOauth1_1 = require("../utils/twOauth1");
const TwitterLoginButton = ({ buttonTheme, buttonClassName, onClick, }) => {
    const [bg, short] = buttonTheme.split("_"), isDark = bg === "dark", styleObj = {
        cursor: "pointer",
    };
    if (short) {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "117", height: "48", style: styleObj, className: buttonClassName, onClick: onClick },
            React.createElement("rect", { width: "116", height: "47", x: ".5", y: ".5", fill: isDark ? "#1DA1F2" : "#ffffff", stroke: "#1DA1F2", rx: "23.5" }),
            React.createElement("path", { fill: isDark ? "#ffffff" : "#1DA1F2", d: "M49.994 27.882h5.599V30h-8.236V17.203h2.637v10.679zm6.557-2.725c0-.943.181-1.784.545-2.522a3.998 3.998 0 011.564-1.714c.686-.404 1.48-.607 2.382-.607 1.283 0 2.33.393 3.138 1.178.814.785 1.268 1.852 1.362 3.2l.018.65c0 1.459-.408 2.63-1.222 3.515-.815.88-1.907 1.319-3.278 1.319-1.372 0-2.467-.44-3.288-1.319-.814-.878-1.221-2.074-1.221-3.585v-.115zm2.54.185c0 .902.17 1.594.51 2.074.34.475.826.712 1.459.712.615 0 1.095-.234 1.441-.703.346-.475.519-1.23.519-2.268 0-.884-.173-1.57-.519-2.056-.346-.487-.832-.73-1.459-.73-.621 0-1.102.243-1.441.73-.34.48-.51 1.227-.51 2.24zm7.664-.167c0-1.46.346-2.634 1.037-3.525.697-.89 1.635-1.335 2.813-1.335 1.042 0 1.854.357 2.434 1.072l.105-.897h2.303v9.194c0 .832-.19 1.555-.571 2.17a3.613 3.613 0 01-1.59 1.407c-.686.322-1.49.483-2.409.483-.697 0-1.377-.14-2.04-.422-.661-.275-1.162-.633-1.502-1.072l1.125-1.547c.633.71 1.4 1.064 2.303 1.064.673 0 1.198-.182 1.573-.545.375-.358.562-.867.562-1.53v-.51c-.585.663-1.356.994-2.311.994-1.143 0-2.068-.445-2.777-1.336-.704-.897-1.055-2.083-1.055-3.56v-.105zm2.54.184c0 .862.173 1.538.519 2.03.345.487.82.73 1.423.73.774 0 1.328-.29 1.661-.87V23.25c-.34-.58-.887-.87-1.643-.87-.61 0-1.09.249-1.441.747-.346.498-.52 1.242-.52 2.232zM84.57 30h-2.548v-9.51h2.548V30zm-2.698-11.97c0-.382.126-.695.378-.941.258-.246.606-.37 1.046-.37.433 0 .78.124 1.037.37.258.246.387.56.387.94 0 .387-.132.703-.396.95-.258.246-.6.369-1.028.369-.428 0-.774-.123-1.037-.37-.258-.246-.387-.562-.387-.949zm7.137 2.46l.079 1.099c.68-.85 1.59-1.274 2.733-1.274 1.008 0 1.758.295 2.25.887.493.592.744 1.477.756 2.654V30h-2.54v-6.082c0-.54-.117-.929-.352-1.169-.234-.246-.624-.37-1.168-.37-.715 0-1.251.306-1.609.915V30h-2.54v-9.51h2.39zM22.346 31c6.415 0 9.924-5.387 9.924-10.058 0-.153 0-.305-.01-.457a7.15 7.15 0 001.74-1.83 6.891 6.891 0 01-2.003.556 3.54 3.54 0 001.533-1.955 6.933 6.933 0 01-2.215.858 3.477 3.477 0 00-1.979-1.067 3.451 3.451 0 00-2.211.372 3.52 3.52 0 00-1.532 1.658 3.582 3.582 0 00-.221 2.261 9.8 9.8 0 01-3.982-1.072 9.928 9.928 0 01-3.207-2.621 3.58 3.58 0 00-.382 2.576c.2.877.724 1.643 1.462 2.143a3.426 3.426 0 01-1.583-.443v.045c0 .816.279 1.607.789 2.239a3.481 3.481 0 002.01 1.226 3.437 3.437 0 01-1.576.061 3.538 3.538 0 001.241 1.757c.585.44 1.29.684 2.018.698A6.94 6.94 0 0117 29.412a9.778 9.778 0 005.346 1.585" })));
    }
    else {
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "217", height: "48", style: styleObj, className: buttonClassName, onClick: onClick },
            React.createElement("rect", { width: "216", height: "47", x: ".5", y: ".5", fill: isDark ? "#1DA1F2" : "#ffffff", stroke: "#1DA1F2", rx: "23.5" }),
            React.createElement("path", { fill: isDark ? "#ffffff" : "#1DA1F2", d: "M50.081 27.882h5.599V30h-8.236V17.203h2.637v10.679zm6.557-2.725c0-.943.181-1.784.545-2.522a3.998 3.998 0 011.564-1.714c.686-.404 1.48-.607 2.382-.607 1.283 0 2.329.393 3.138 1.178.814.785 1.268 1.852 1.362 3.2l.017.65c0 1.459-.407 2.63-1.221 3.515-.815.88-1.907 1.319-3.278 1.319-1.372 0-2.467-.44-3.288-1.319-.814-.878-1.221-2.074-1.221-3.585v-.115zm2.54.185c0 .902.17 1.594.51 2.074.34.475.826.712 1.459.712.615 0 1.095-.234 1.44-.703.347-.475.52-1.23.52-2.268 0-.884-.173-1.57-.52-2.056-.345-.487-.831-.73-1.458-.73-.621 0-1.102.243-1.441.73-.34.48-.51 1.227-.51 2.24zm7.664-.167c0-1.46.346-2.634 1.037-3.525.697-.89 1.635-1.335 2.812-1.335 1.043 0 1.855.357 2.435 1.072l.105-.897h2.303v9.194c0 .832-.19 1.555-.571 2.17a3.613 3.613 0 01-1.59 1.407c-.687.322-1.49.483-2.41.483-.696 0-1.376-.14-2.038-.422-.662-.275-1.163-.633-1.503-1.072l1.125-1.547c.633.71 1.4 1.064 2.303 1.064.673 0 1.198-.182 1.573-.545.375-.358.562-.867.562-1.53v-.51c-.586.663-1.356.994-2.311.994-1.143 0-2.069-.445-2.778-1.336-.703-.897-1.054-2.083-1.054-3.56v-.105zm2.54.184c0 .862.173 1.538.518 2.03.346.487.82.73 1.424.73.774 0 1.327-.29 1.661-.87V23.25c-.34-.58-.887-.87-1.643-.87-.61 0-1.09.249-1.442.747-.345.498-.518 1.242-.518 2.232zM84.657 30h-2.549v-9.51h2.55V30zM81.96 18.03c0-.382.126-.695.378-.941.258-.246.606-.37 1.046-.37.433 0 .78.124 1.037.37.258.246.387.56.387.94 0 .387-.132.703-.396.95-.258.246-.6.369-1.028.369-.428 0-.774-.123-1.037-.37-.258-.246-.387-.562-.387-.949zm7.137 2.46l.079 1.099c.68-.85 1.59-1.274 2.733-1.274 1.008 0 1.758.295 2.25.887.492.592.744 1.477.756 2.654V30h-2.54v-6.082c0-.54-.117-.929-.352-1.169-.234-.246-.624-.37-1.169-.37-.714 0-1.25.306-1.608.915V30h-2.54v-9.51h2.39zm20.505 6.056l1.248-6.056h2.452L110.875 30h-2.127l-1.802-5.985L105.145 30h-2.119l-2.425-9.51h2.452l1.239 6.047 1.74-6.047h1.837l1.732 6.056zM117.247 30h-2.549v-9.51h2.549V30zm-2.698-11.97c0-.382.126-.695.378-.941.258-.246.606-.37 1.046-.37.433 0 .779.124 1.037.37.258.246.386.56.386.94 0 .387-.131.703-.395.95-.258.246-.601.369-1.028.369-.428 0-.774-.123-1.037-.37-.258-.246-.387-.562-.387-.949zm7.84.122v2.338h1.626v1.864h-1.626V27.1c0 .351.067.603.202.755.135.153.392.229.773.229.282 0 .531-.02.747-.061v1.924a5.226 5.226 0 01-1.538.229c-1.781 0-2.689-.9-2.724-2.698v-5.125h-1.389V20.49h1.389v-2.338h2.54zm5.519 3.375c.674-.808 1.521-1.213 2.54-1.213 2.063 0 3.109 1.199 3.138 3.595V30h-2.54v-6.02c0-.545-.117-.947-.352-1.205-.234-.263-.624-.395-1.169-.395-.744 0-1.283.287-1.617.861V30h-2.54V16.5h2.54v5.027zm21.349-2.188h-3.92V30H142.7V19.339h-3.867v-2.136h10.424v2.136zm9.193 7.207l1.248-6.056h2.452L159.725 30h-2.127l-1.802-5.985L153.994 30h-2.118l-2.426-9.51h2.452l1.24 6.047 1.74-6.047h1.837l1.731 6.056zM166.097 30h-2.549v-9.51h2.549V30zm-2.699-11.97c0-.382.126-.695.378-.941.258-.246.607-.37 1.046-.37.434 0 .78.124 1.037.37.258.246.387.56.387.94 0 .387-.132.703-.395.95-.258.246-.601.369-1.029.369-.427 0-.773-.123-1.037-.37-.258-.246-.387-.562-.387-.949zm7.84.122v2.338h1.626v1.864h-1.626V27.1c0 .351.068.603.202.755.135.153.393.229.774.229.281 0 .53-.02.747-.061v1.924a5.231 5.231 0 01-1.538.229c-1.781 0-2.69-.9-2.725-2.698v-5.125h-1.388V20.49h1.388v-2.338h2.54zm6.082 0v2.338h1.626v1.864h-1.626V27.1c0 .351.068.603.202.755.135.153.393.229.774.229.281 0 .53-.02.747-.061v1.924a5.231 5.231 0 01-1.538.229c-1.781 0-2.69-.9-2.725-2.698v-5.125h-1.388V20.49h1.388v-2.338h2.54zm7.418 12.024c-1.394 0-2.531-.428-3.41-1.283-.873-.856-1.309-1.995-1.309-3.42v-.245c0-.956.184-1.808.553-2.558.369-.756.891-1.336 1.565-1.74.679-.41 1.453-.616 2.32-.616 1.301 0 2.323.41 3.067 1.23.75.821 1.125 1.984 1.125 3.49v1.037h-6.055c.082.621.328 1.12.738 1.494.416.375.94.563 1.573.563.979 0 1.743-.355 2.294-1.064l1.248 1.398c-.381.539-.896.96-1.547 1.265-.65.3-1.371.449-2.162.449zm-.29-7.805c-.504 0-.914.17-1.23.51-.311.34-.51.826-.598 1.459h3.533v-.202c-.011-.563-.164-.996-.457-1.301-.293-.31-.709-.466-1.248-.466zm10.995.501a6.883 6.883 0 00-.914-.07c-.961 0-1.591.325-1.889.975V30h-2.54v-9.51h2.399l.07 1.134c.51-.873 1.216-1.31 2.119-1.31.281 0 .544.038.791.115l-.036 2.443zM22.346 31c6.415 0 9.924-5.387 9.924-10.058 0-.153 0-.305-.01-.457a7.15 7.15 0 001.74-1.83 6.891 6.891 0 01-2.003.556 3.54 3.54 0 001.533-1.955 6.933 6.933 0 01-2.215.858 3.477 3.477 0 00-1.979-1.067 3.451 3.451 0 00-2.211.372 3.52 3.52 0 00-1.532 1.658 3.582 3.582 0 00-.221 2.261 9.8 9.8 0 01-3.982-1.072 9.928 9.928 0 01-3.207-2.621 3.58 3.58 0 00-.382 2.576c.2.877.724 1.643 1.462 2.143a3.426 3.426 0 01-1.583-.443v.045c0 .816.279 1.607.789 2.239a3.481 3.481 0 002.01 1.226 3.437 3.437 0 01-1.576.061 3.538 3.538 0 001.241 1.757c.585.44 1.29.684 2.018.698A6.94 6.94 0 0117 29.412a9.778 9.778 0 005.346 1.585" })));
    }
};
class TwitterLoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.initializeProcess = () => {
            if (window.opener) {
                const [, oauthToken, oauthVerifier] = window.location.search.match(/^(?=.*oauth_token=([^&]+)|)(?=.*oauth_verifier=([^&]+)|).+$/) || [];
                window.opener.postMessage({
                    type: "authorized",
                    data: {
                        oauthToken,
                        oauthVerifier,
                    },
                }, window.origin);
            }
            else {
                const { authCallback, consumerKey, consumerSecret } = this.props;
                window.onmessage = (_a) => __awaiter(this, [_a], void 0, function* ({ data: { type, data } }) {
                    if (type === "authorized") {
                        const accessTokenData = yield (0, twOauth1_1.obtainOauthAccessToken)({
                            apiUrl: "https://api.twitter.com/oauth/access_token",
                            consumerKey,
                            consumerSecret,
                            oauthToken: data.oauthToken,
                            oauthVerifier: data.oauthVerifier,
                            method: "POST",
                        });
                        const { popup } = this.state;
                        this.setState({
                            isCompleted: true,
                        }, () => {
                            authCallback && authCallback(undefined, accessTokenData);
                            popup && popup.close();
                        });
                    }
                });
            }
        };
        this.handleLoginClick = () => __awaiter(this, void 0, void 0, function* () {
            const { consumerKey, consumerSecret, callbackUrl } = this.props;
            const popup = (0, twWindow_1.openWindow)({
                url: ``,
                name: "Log in with Twitter",
            });
            if (callbackUrl) {
                console.warn(`DEPRECATED: "callbackUrl" is not supported and ignored from version 1.2.0 and higher. It's hardcoded inside the package with "window.location.href". More details: https://github.com/alexandrtovmach/react-twitter-login/issues/8`);
            }
            const obtainRequestTokenConfig = {
                apiUrl: "https://api.twitter.com/oauth/request_token",
                callbackUrl: window.location.href,
                consumerKey,
                consumerSecret,
                method: "POST",
            };
            const requestTokenData = yield (0, twOauth1_1.obtainOauthRequestToken)(obtainRequestTokenConfig);
            if (requestTokenData.oauth_callback_confirmed === "true" &&
                popup !== null) {
                popup.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${requestTokenData.oauth_token}`;
                if (popup) {
                    (0, twWindow_1.observeWindow)({ popup, onClose: this.handleClosingPopup });
                    this.setState({
                        popup,
                    });
                }
            }
            else {
                this.handleError(`Callback URL "${window.location.href}" is not confirmed. Please check that is whitelisted within the Twitter app settings.`);
            }
        });
        this.handleClosingPopup = () => {
            const { authCallback } = this.props;
            const { isCompleted } = this.state;
            if (!isCompleted) {
                authCallback && authCallback("User closed OAuth popup");
            }
        };
        this.handleError = (message) => {
            const { authCallback } = this.props;
            authCallback(message);
        };
        this.state = {
            isCompleted: false,
        };
    }
    componentDidMount() {
        this.initializeProcess();
    }
    render() {
        const { buttonTheme, className, children } = this.props;
        return children ? (React.createElement("div", { onClick: this.handleLoginClick, className: className }, children)) : (React.createElement(TwitterLoginButton, { buttonTheme: buttonTheme || "light", buttonClassName: className, onClick: this.handleLoginClick }));
    }
}
exports.default = TwitterLoginComponent;
//# sourceMappingURL=TwitterLogin.js.map