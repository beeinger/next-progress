import React from "react";
import { NProgressOptions } from "nprogress";
import { DefaultTheme, GlobalStyleComponent } from "styled-components";
interface NextProgressProps {
    height?: string;
    color?: string;
    delay?: number;
    options?: Partial<NProgressOptions>;
    customGlobalCss?: GlobalStyleComponent<{}, DefaultTheme>;
}
/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a GlobalStyleComponent - use createGlobalStyle from styled-components; color param won't work as you should set the color yourself in css.
 */
declare const NextProgress: React.MemoExoticComponent<({ height, color, delay, options, customGlobalCss, }: NextProgressProps) => JSX.Element>;
export default NextProgress;
