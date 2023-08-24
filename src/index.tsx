import NProgress, { NProgressOptions } from "nprogress";
import React, { useEffect } from "react";

import Router from "next/router";

interface NextProgressProps {
  height?: number | string;
  color?: string;
  delay?: number;
  options?: Partial<NProgressOptions>;
  nonce?: string;
  customGlobalCss?: string;
  disableSameRoute?: boolean;
}

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param disableSameRoute If true, progress bar won't be displayed when user travels the same route they're currently on.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a string that will go inside the <style jsx> tag. Color param won't work as you should set the color yourself inside custom css.
 */
const NextProgress = React.memo(
  ({
    height = "2px",
    color = "#29D",
    delay = 0,
    options,
    customGlobalCss,
    disableSameRoute = false,
  }: NextProgressProps) => {
    const nextProgressStyles = (
      <style>
        {customGlobalCss ||
          // prettier-ignore
          //? Source: https://unpkg.com/nprogress@0.2.0/nprogress.css
          `#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:99999;top:0;left:0;width:100%;height:${typeof height === `string` ? height : `${height}px`}}#nprogress .peg,.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}#nprogress .peg{display:block;right:0;width:100px;height:100%;box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:99999;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:.4s linear infinite nprogress-spinner;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{overflow:hidden;position:relative}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`}
      </style>
    );

    useEffect(() => {
      options && NProgress.configure(options);

      let timeout: NodeJS.Timeout;
      const start: Handler = (e) => {
          clearTimeout(timeout);
          if (disableSameRoute && Router.route === e) return;
          timeout = setTimeout(() => NProgress.start(), delay);
        },
        done: Handler = () => {
          clearTimeout(timeout);
          NProgress.done();
        };

      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", done);
      Router.events.on("routeChangeError", done);

      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", done);
        Router.events.off("routeChangeError", done);
        clearTimeout(timeout);
      };
    }, []);

    return nextProgressStyles;
  },
  () => true
);

export default NextProgress;

export { NProgress };

//? Unexported type from next/dist/shared/lib/mitt.d.ts
declare type Handler = (...evts: any[]) => void;
