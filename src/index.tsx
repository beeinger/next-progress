import NProgress, { NProgressOptions } from "nprogress";
import React, { useEffect } from "react";

import Router from "next/router";

interface NextProgressProps {
  height?: number | string;
  color?: string;
  delay?: number;
  options?: Partial<NProgressOptions>;
  nonce?: string;
  customGlobalCss?: JSX.Element;
}

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a GlobalStyleComponent - use createGlobalStyle from styled-components; color param won't work as you should set the color yourself in css.
 */
const NextProgress = React.memo(
  ({
    height = "2px",
    color = "#29D",
    delay = 0,
    options,
    customGlobalCss,
  }: NextProgressProps) => {
    const nextProgressStyles = (
      <style global jsx>
        {customGlobalCss ||
          `
      /* Source: https://unpkg.com/nprogress@0.2.0/nprogress.css + styled-components implementation */
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 99999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${typeof height === `string` ? height : `${height}px`};
      }
      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1.0;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
      }
      /* Remove these to get rid of the spinner */
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 99999;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${color};
        border-left-color: ${color};
        border-radius: 50%;
        -webkit-animation: nprogress-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
  `}
      </style>
    );

    useEffect(() => {
      options && NProgress.configure(options);

      let timeout: NodeJS.Timeout;
      const start = () =>
          (timeout = setTimeout(() => NProgress.start(), delay)),
        done = () => {
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
