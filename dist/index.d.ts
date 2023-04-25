import { NProgressOptions } from "nprogress";
import React from "react";
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
declare const NextProgress: React.MemoExoticComponent<({ height, color, delay, options, customGlobalCss, disableSameRoute, }: NextProgressProps) => JSX.Element>;
export default NextProgress;
