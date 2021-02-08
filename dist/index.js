'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var NProgress = require('nprogress');
var Router = require('next/router');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var NProgress__default = /*#__PURE__*/_interopDefaultLegacy(NProgress);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a GlobalStyleComponent - use createGlobalStyle from styled-components; color param won't work as you should set the color yourself in css.
 */
var NextProgress = React__default['default'].memo(function (_a) {
    var _b = _a.height, height = _b === void 0 ? "2px" : _b, _c = _a.color, color = _c === void 0 ? "#29D" : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, options = _a.options, customGlobalCss = _a.customGlobalCss;
    var NProgressStyles = customGlobalCss || styledComponents.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      /* Source: https://unpkg.com/nprogress@0.2.0/nprogress.css + styled-components implementation */\n\n      /* Make clicks pass-through */\n      #nprogress {\n        pointer-events: none;\n      }\n\n      #nprogress .bar {\n        background: ", ";\n\n        position: fixed;\n        z-index: 99999;\n        top: 0;\n        left: 0;\n\n        width: 100%;\n        height: ", ";\n      }\n\n      /* Fancy blur effect */\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n        opacity: 1.0;\n\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n            -ms-transform: rotate(3deg) translate(0px, -4px);\n                transform: rotate(3deg) translate(0px, -4px);\n      }\n\n      /* Remove these to get rid of the spinner */\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 99999;\n        top: 15px;\n        right: 15px;\n      }\n\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n\n        border: solid 2px transparent;\n        border-top-color: ", ";\n        border-left-color: ", ";\n        border-radius: 50%;\n\n        -webkit-animation: nprogress-spinner 400ms linear infinite;\n                animation: nprogress-spinner 400ms linear infinite;\n      }\n\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n\n      @-webkit-keyframes nprogress-spinner {\n        0%   { -webkit-transform: rotate(0deg); }\n        100% { -webkit-transform: rotate(360deg); }\n      }\n      @keyframes nprogress-spinner {\n        0%   { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n    "], ["\n      /* Source: https://unpkg.com/nprogress@0.2.0/nprogress.css + styled-components implementation */\n\n      /* Make clicks pass-through */\n      #nprogress {\n        pointer-events: none;\n      }\n\n      #nprogress .bar {\n        background: ", ";\n\n        position: fixed;\n        z-index: 99999;\n        top: 0;\n        left: 0;\n\n        width: 100%;\n        height: ", ";\n      }\n\n      /* Fancy blur effect */\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n        opacity: 1.0;\n\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n            -ms-transform: rotate(3deg) translate(0px, -4px);\n                transform: rotate(3deg) translate(0px, -4px);\n      }\n\n      /* Remove these to get rid of the spinner */\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 99999;\n        top: 15px;\n        right: 15px;\n      }\n\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n\n        border: solid 2px transparent;\n        border-top-color: ", ";\n        border-left-color: ", ";\n        border-radius: 50%;\n\n        -webkit-animation: nprogress-spinner 400ms linear infinite;\n                animation: nprogress-spinner 400ms linear infinite;\n      }\n\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n\n      @-webkit-keyframes nprogress-spinner {\n        0%   { -webkit-transform: rotate(0deg); }\n        100% { -webkit-transform: rotate(360deg); }\n      }\n      @keyframes nprogress-spinner {\n        0%   { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n    "])), color, height, color, color, color, color);
    React.useEffect(function () {
        options && NProgress__default['default'].configure(options);
        var timeout;
        var start = function () {
            return (timeout = setTimeout(function () { return NProgress__default['default'].start(); }, delay));
        }, done = function () {
            clearTimeout(timeout);
            NProgress__default['default'].done();
        };
        Router__default['default'].events.on("routeChangeStart", start);
        Router__default['default'].events.on("routeChangeComplete", done);
        Router__default['default'].events.on("routeChangeError", done);
    }, []);
    return React__default['default'].createElement(NProgressStyles, null);
}, function () { return true; });
var templateObject_1;

exports.default = NextProgress;
//# sourceMappingURL=index.js.map
