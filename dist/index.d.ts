import React from "react";
import { NProgressOptions } from "nprogress";
interface NextJsNProgressProps {
    height?: string;
    color?: string;
    delay?: number;
    options?: Partial<NProgressOptions>;
}
/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param options Options for - NProgress.configure(options).
 */
declare const NextJsNProgress: React.MemoExoticComponent<({ height, color, delay, options, }: NextJsNProgressProps) => JSX.Element>;
export default NextJsNProgress;
