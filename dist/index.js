import NProgress from "nprogress";
import React, { useEffect } from "react";
import Router from "next/router";
/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a GlobalStyleComponent - use createGlobalStyle from styled-components; color param won't work as you should set the color yourself in css.
 */
var NextProgress = React.memo(function (_a) {
    var _b = _a.height, height = _b === void 0 ? "2px" : _b, _c = _a.color, color = _c === void 0 ? "#29D" : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, options = _a.options, customGlobalCss = _a.customGlobalCss;
    var nextProgressStyles = (React.createElement("style", { global: true, jsx: true }, customGlobalCss ||
        "\n      /* Source: https://unpkg.com/nprogress@0.2.0/nprogress.css + styled-components implementation */\n      /* Make clicks pass-through */\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ".concat(color, ";\n        position: fixed;\n        z-index: 99999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ").concat(typeof height === "string" ? height : "".concat(height, "px"), ";\n      }\n      /* Fancy blur effect */\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ").concat(color, ", 0 0 5px ").concat(color, ";\n        opacity: 1.0;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n            -ms-transform: rotate(3deg) translate(0px, -4px);\n                transform: rotate(3deg) translate(0px, -4px);\n      }\n      /* Remove these to get rid of the spinner */\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 99999;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ").concat(color, ";\n        border-left-color: ").concat(color, ";\n        border-radius: 50%;\n        -webkit-animation: nprogress-spinner 400ms linear infinite;\n                animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0%   { -webkit-transform: rotate(0deg); }\n        100% { -webkit-transform: rotate(360deg); }\n      }\n      @keyframes nprogress-spinner {\n        0%   { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n  ")));
    useEffect(function () {
        options && NProgress.configure(options);
        var timeout;
        var start = function () {
            return (timeout = setTimeout(function () { return NProgress.start(); }, delay));
        }, done = function () {
            clearTimeout(timeout);
            NProgress.done();
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", done);
        Router.events.on("routeChangeError", done);
        return function () {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", done);
            Router.events.off("routeChangeError", done);
            clearTimeout(timeout);
        };
    }, []);
    return nextProgressStyles;
}, function () { return true; });
export default NextProgress;
//# sourceMappingURL=index.js.map