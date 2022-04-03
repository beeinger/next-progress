'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var NProgress = require('nprogress');
var React = require('react');
var Router = require('next/router');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var NProgress__default = /*#__PURE__*/_interopDefaultLegacy(NProgress);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a GlobalStyleComponent - use createGlobalStyle from styled-components; color param won't work as you should set the color yourself in css.
 */
var NextProgress = React__default["default"].memo(function (_a) {
    var _b = _a.height, height = _b === void 0 ? "2px" : _b, _c = _a.color, color = _c === void 0 ? "#29D" : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, options = _a.options, customGlobalCss = _a.customGlobalCss;
    var nextProgressStyles = (React__default["default"].createElement("style", { global: true, jsx: true }, customGlobalCss ||
        "\n      /* Source: https://unpkg.com/nprogress@0.2.0/nprogress.css + styled-components implementation */\n      /* Make clicks pass-through */\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ".concat(color, ";\n        position: fixed;\n        z-index: 99999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ").concat(typeof height === "string" ? height : "".concat(height, "px"), ";\n      }\n      /* Fancy blur effect */\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ").concat(color, ", 0 0 5px ").concat(color, ";\n        opacity: 1.0;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n            -ms-transform: rotate(3deg) translate(0px, -4px);\n                transform: rotate(3deg) translate(0px, -4px);\n      }\n      /* Remove these to get rid of the spinner */\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 99999;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ").concat(color, ";\n        border-left-color: ").concat(color, ";\n        border-radius: 50%;\n        -webkit-animation: nprogress-spinner 400ms linear infinite;\n                animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0%   { -webkit-transform: rotate(0deg); }\n        100% { -webkit-transform: rotate(360deg); }\n      }\n      @keyframes nprogress-spinner {\n        0%   { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n  ")));
    React.useEffect(function () {
        options && NProgress__default["default"].configure(options);
        var timeout;
        var start = function () {
            return (timeout = setTimeout(function () { return NProgress__default["default"].start(); }, delay));
        }, done = function () {
            clearTimeout(timeout);
            NProgress__default["default"].done();
        };
        Router__default["default"].events.on("routeChangeStart", start);
        Router__default["default"].events.on("routeChangeComplete", done);
        Router__default["default"].events.on("routeChangeError", done);
        return function () {
            Router__default["default"].events.off("routeChangeStart", start);
            Router__default["default"].events.off("routeChangeComplete", done);
            Router__default["default"].events.off("routeChangeError", done);
            clearTimeout(timeout);
        };
    }, []);
    return nextProgressStyles;
}, function () { return true; });

exports["default"] = NextProgress;
//# sourceMappingURL=index.js.map
