'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var NProgress = require('nprogress');
var React = require('react');
var Router = require('next/router');

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param disableSameRoute If true, progress bar won't be displayed when user travels the same route they're currently on.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a string that will go inside the <style jsx> tag. Color param won't work as you should set the color yourself inside custom css.
 */
var NextProgress = React.memo(function (_a) {
    var _b = _a.height, height = _b === void 0 ? "2px" : _b, _c = _a.color, color = _c === void 0 ? "#29D" : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, options = _a.options, customGlobalCss = _a.customGlobalCss, _e = _a.disableSameRoute, disableSameRoute = _e === void 0 ? false : _e;
    var nextProgressStyles = (React.createElement("style", null, customGlobalCss ||
        // prettier-ignore
        //? Source: https://unpkg.com/nprogress@0.2.0/nprogress.css
        "#nprogress{pointer-events:none}#nprogress .bar{background:".concat(color, ";position:fixed;z-index:99999;top:0;left:0;width:100%;height:").concat(typeof height === "string" ? height : "".concat(height, "px"), "}#nprogress .peg,.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}#nprogress .peg{display:block;right:0;width:100px;height:100%;box-shadow:0 0 10px ").concat(color, ",0 0 5px ").concat(color, ";opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:99999;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:").concat(color, ";border-left-color:").concat(color, ";border-radius:50%;-webkit-animation:.4s linear infinite nprogress-spinner;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{overflow:hidden;position:relative}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}")));
    React.useEffect(function () {
        options && NProgress.configure(options);
        var timeout;
        var start = function (e) {
            clearTimeout(timeout);
            if (disableSameRoute && Router.route === e)
                return;
            timeout = setTimeout(function () { return NProgress.start(); }, delay);
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

exports.default = NextProgress;
//# sourceMappingURL=index.js.map
