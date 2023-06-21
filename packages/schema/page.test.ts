/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PageComponentSchema {
  pageJSONLight?: IOriginalPageJSON;
  pageJSONDark?: IOriginalPageJSON;
  enablePassiveEvent?:
    | {
        [k: string]: boolean;
      }
    | boolean;
  style?: "v2";
  componentPlaceholder?: {
    [k: string]: string;
  };
  "mini-ios"?: IOriginalPageJSON;
  "mini-android"?: IOriginalPageJSON;
  "mini-weixin"?: IOriginalPageJSON;
  navigationBarBackgroundColor?: string;
  navigationBarTextStyle?: "black" | "white";
  navigationBarTitleText?: string;
  navigationStyle?: "custom" | "default";
  backgroundColor?: string;
  backgroundTextStyle?: "dark" | "light";
  enablePullDownRefresh?: boolean;
  onReachBottomDistance?: number;
  disableScroll?: boolean;
  disableSwipeBack?: boolean;
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
  backgroundColorContent?: string;
  usingComponents?: {
    [k: string]: string;
  };
  pageOrientation?: "auto" | "landscape" | "portrait";
  visualEffectInBackground?: "hidden" | "none";
  initialRenderingCache?: "dynamic" | "static";
  restartStrategy?: "homePage" | "homePageAndLatestPage";
  renderer?: "cover-view" | "skyline" | "webview" | "xr-frame";
  component?: boolean;
  componentGenerics?: {
    [k: string]:
      | {
          default: string;
          [k: string]: unknown;
        }
      | true
      | null;
  };
  singlePage?: {
    navigationBarFit?: "float" | "squeezed";
    [k: string]: unknown;
  };
  handleWebviewPreload?: "auto" | "manual" | "static";
  componentFramework?: "exparser" | "glass-easel";
  [k: string]: unknown;
}
export interface IOriginalPageJSON {
  navigationBarBackgroundColor?: string;
  navigationBarTextStyle?: "black" | "white";
  navigationBarTitleText?: string;
  navigationStyle?: "custom" | "default";
  backgroundColor?: string;
  backgroundTextStyle?: "dark" | "light";
  enablePullDownRefresh?: boolean;
  onReachBottomDistance?: number;
  disableScroll?: boolean;
  disableSwipeBack?: boolean;
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
  backgroundColorContent?: string;
  usingComponents?: {
    [k: string]: string;
  };
  pageOrientation?: "auto" | "landscape" | "portrait";
  visualEffectInBackground?: "hidden" | "none";
  initialRenderingCache?: "dynamic" | "static";
  restartStrategy?: "homePage" | "homePageAndLatestPage";
  renderer?: "cover-view" | "skyline" | "webview" | "xr-frame";
  component?: boolean;
  componentGenerics?: {
    [k: string]:
      | {
          default: string;
          [k: string]: unknown;
        }
      | true
      | null;
  };
  singlePage?: {
    navigationBarFit?: "float" | "squeezed";
    [k: string]: unknown;
  };
  handleWebviewPreload?: "auto" | "manual" | "static";
  componentFramework?: "exparser" | "glass-easel";
  [k: string]: unknown;
}
