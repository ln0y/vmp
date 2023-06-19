/**
 * 小程序全局配置
 *
 * 小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置。
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html>
 *
 * 微信官方 schema
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/app.schema.json>
 */
export interface App {
  /**
   * 小程序默认启动首页
   *
   * 指定小程序的默认启动路径（首页），常见情景是从微信聊天列表页下拉启动、小程序列表启动等。
   * 如果不填，将默认为 pages 列表的第一项。不支持带页面路径参数。
   */
  entryPagePath?: string

  /**
   * 页面路径列表
   *
   * 用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。
   * 文件名不需要写文件后缀，框架会自动去寻找对应位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理。
   * 未指定 entryPagePath 时，数组的第一项代表小程序的初始页面（首页）。
   *
   * **小程序中新增/减少页面，都需要对 pages 数组进行修改。**
   */
  pages: string[]

  /**
   * 全局的默认窗口表现
   *
   * 用于设置小程序的状态栏、导航条、标题、窗口背景色。
   */
  window?: IWindow

  /**
   * 底部 `tab` 栏的表现
   *
   * 如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），
   * 可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
   */
  tabBar?: ITabBar

  /**
   * 网络超时时间
   *
   * 各类网络请求的超时时间，单位均为毫秒。
   */
  networkTimeout?: INetworkTimeout

  /**
   * 是否开启 debug 模式，默认关闭
   *
   * 可以在开发者工具中开启 `debug` 模式，在开发者工具的控制台面板，
   * 调试信息以 `info` 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。
   * 可以帮助开发者快速定位一些常见的问题。
   *
   * @default false
   */
  debug?: boolean

  /**
   * 是否启用插件功能页，默认关闭
   *
   * 插件所有者小程序需要设置这一项来启用 [插件功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages.html)
   *
   * 注：基础库 2.1.0 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   *
   * @default false
   */
  functionalPages?: boolean

  /**
   * 分包结构配置
   *
   * 启用 [分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html) 时，声明项目分包结构
   *
   * 写成 `subPackages` 也支持。
   *
   * 注：微信客户端 6.6.0 ，基础库 1.7.3 及以上版本支持
   */
  subpackages?: ISubpackages[]

  /**
   * 分包结构配置
   *
   * 启用 [分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html) 时，声明项目分包结构
   *
   * 写成 `subpackages` 也支持。
   *
   * 注：微信客户端 6.6.0 ，基础库 1.7.3 及以上版本支持
   */
  subPackages?: ISubpackages[]

  /**
   * `Worker` 代码放置的目录
   *
   * 使用 Worker 处理多线程任务时，设置 `Worker` 代码放置的目录
   *
   * 从基础库 v2.27.3 开始支持将 worker 代码打包为一个分包。
   *
   * 注：基础库 1.9.90 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  workers?: string | IWorkers

  /**
   * 需要在后台使用的能力，如「音乐播放」
   *
   * 申明需要后台运行的能力，类型为数组。目前支持以下项目：
   * - `"audio"` 后台音乐播放
   * - `"location"` 后台定位
   *
   * 注：微信客户端 6.7.2 及以上版本支持
   *
   * 注：在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。
   */
  requiredBackgroundModes?: (ERequiredBackgroundModes | string)[]

  /**
   * 调用的地理位置相关隐私接口
   *
   * 自 2022 年 7 月 14 日后发布的小程序，使用以下8个地理位置相关接口时，
   * 需要声明该字段，否则将无法正常使用。2022 年 7 月 14 日前发布的小程序不受影响。
   * 申明需要使用的地理位置相关接口，类型为数组。目前支持以下项目：
   * - [getFuzzyLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html): 获取模糊地理位置
   * - [getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html): 获取精确地理位置
   * - [onLocationChange](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html): 监听实时地理位置变化事件
   * - [startLocationUpdate](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html): 接收位置消息（前台）
   * - [startLocationUpdateBackground](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html): 接收位置消息（前后台）
   * - [chooseLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html): 打开地图选择位置
   * - [choosePoi](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html): 打开POI列表选择位置
   * - [chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html): 获取用户地址信息
   *
   * 注：若使用以上接口，均需在小程序管理后台，[「开发」-「开发管理」-「接口设置」](https://mp.weixin.qq.com/wxamp/categoryapi/index?token=1033339147&lang=zh_CN) 中自助开通该接口权限。
   */
  requiredPrivateInfos?: (ERequiredPrivateInfos | string)[]

  /**
   * 使用到的插件
   *
   * 声明小程序需要使用的 [插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)。
   *
   * 注：基础库 1.9.6 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  plugins?: plugins

  /**
   * 分包预下载规则
   *
   * 声明 [分包预下载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html) 的规则。
   *
   * 开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。对于独立分包，也可以预下载主包。
   *
   * 注：基础库 2.3.0 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  preloadRule?: preloadRule

  /**
   * PC 小程序是否支持用户任意改变窗口大小（包括最大化窗口）；iPad 小程序是否支持屏幕旋转。默认关闭
   *
   * 在 iPad 上运行的小程序可以设置支持 [屏幕旋转](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)。
   *
   * 在 PC 上运行的小程序，用户可以按照任意比例拖动窗口大小，也可以在小程序菜单中最大化窗口
   *
   * 注：基础库 2.3.0 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   *
   * @default false
   */
  resizable?: boolean

  /**
   * 全局 [自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 配置
   *
   * 在 app.json 中声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。
   *
   * *建议仅在此声明几乎所有页面都会用到的自定义组件。*
   *
   * 注1：全局自定义组件会视为被所有页面依赖，会在所有页面启动时进行初始化，
   * 影响启动性能且会占用主包大小。只被个别页面或分包引用的自定义组件应尽量在页面配置中声明。
   *
   * 注2：在全局声明使用率低的自定义组件会大幅影响 [按需注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html) 的效果。
   *
   * 注3：开发者工具 1.02.1810190 及以上版本支持
   */
  usingComponents?: IUsingComponents

  /**
   * 小程序 [接口权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) 相关设置
   *
   * 注：微信客户端 7.0.0 及以上版本支持
   */
  permission?: IPermission

  /**
   * 指明 [sitemap.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html) 的位置；
   * 默认为 'sitemap.json' 即在 app.json 同级目录下名字的 `sitemap.json` 文件
   *
   * @default "sitemap.json"
   */
  sitemapLocation: string

  /**
   * 指定使用升级后的weui样式
   *
   * 微信客户端 7.0 开始，UI 界面进行了大改版。
   * 小程序也进行了基础组件的样式升级。
   * app.json 中配置 `"style": "v2"` 可表明启用新版的组件样式。
   * 本次改动涉及的组件有 `button` `icon` `radio` `checkbox` `switch` `slider。`
   *
   * 注：基础库 2.8.0 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  style?: EStyle | string

  /**
   * 指定需要引用的扩展库
   *
   * 指定需要引用的扩展库。目前支持以下项目：
   *
   * - `"kbone"`: [多端开发框架](https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/)
   *
   * - `"weui"`: [WeUI 组件库](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/)
   *
   * 指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。rc工具版本支持分包引用。
   *
   * 注：基础库 2.2.1 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  useExtendedLib?: IUseExtendedLib

  /**
   * 微信消息用小程序打开
   *
   * 聊天位置消息用打车类小程序打开，[详情参考](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/location-message.html)。
   *
   * 注：微信客户端 7.0.9 及以上版本支持，iOS 暂不支持
   */
  entranceDeclare?: IEntranceDeclare

  /**
   * 小程序支持 DarkMode
   *
   * 微信iOS客户端 7.0.12 版本、Android客户端 7.0.13 版本正式支持 DarkMode，
   * 可通过配置 `"darkmode": true` 表示当前小程序可适配 DarkMode，
   * 所有基础组件均会根据系统主题展示不同的默认样式，
   * navigation bar 和 tab bar 也会根据开发者的配置自动切换。
   *
   * 配置后，请根据 [DarkMode 适配指南](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html) 自行完成基础样式以外的适配工作。
   *
   * 注：开发者工具 1.03.2004271 及以上版本支持，基础库 2.11.0 及以上版本支持
   */
  darkmode?: boolean

  /**
   * 自定义 [theme.json](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-theme-json) 的路径，当配置 `"darkmode":true` 时，当前配置文件为必填项。
   *
   * 注：开发者工具 1.03.2004271 及以上版本支持
   */
  themeLocation?: string

  /**
   * 配置自定义组件代码按需注入
   *
   * 目前仅支持值 `requiredComponents`，代表开启小程序[「按需注入」](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5)特性。
   *
   * 注：基础库 2.11.1 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  lazyCodeLoading?: ELazyCodeLoading | string

  /**
   * 单页模式相关配置
   *
   * 注：基础库 2.11.3 及以上版本支持，目前 [分享到朋友圈 (Beta)](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/share/share-timeline.html) 后打开会进入单页模式
   */
  singlePage?: ISinglePage

  /**
   * [聊天素材小程序打开](https://developers.weixin.qq.com/miniprogram/dev/framework/material/support_material.html) 相关配置
   *
   * 注：基础库 2.14.3 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  supportedMaterials?: ISupportedMaterials[]

  /**
   * [定制化型服务商](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/thirdparty/customized_service_platform_guidelines.html) 票据
   */
  serviceProviderTicket?: string

  /**
   * 半屏小程序 appId
   *
   * 指定小程序可通过 [wx.openEmbeddedMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html) 打开的小程序名单。
   *
   * 注：基础库 2.20.1 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  embeddedAppIdList?: string[]

  /**
   * 视频号直播半屏场景设置
   *
   * 注：基础库 2.18.0 开始支持，低版本需做 [兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  halfPage?: IHalfPage

  [key: string]: any
}

export interface IWindow {
  /**
   * 导航栏背景颜色，如 #000000
   *
   * @default "#000000"
   */
  navigationBarBackgroundColor?: string

  /**
   * 导航栏标题颜色，仅支持 `black` / `white`
   *
   * @default "white"
   */
  navigationBarTextStyle?: ENavigationBarTextStyle | string

  /**
   * 导航栏标题文字内容
   */
  navigationBarTitleText?: string

  /**
   * 导航栏样式，仅支持以下值：
   *
   * - `"default"` 默认样式
   *
   * - `"custom"` 自定义导航栏，只保留右上角胶囊按钮。
   *
   * 注：关于navigationStyle
   * - iOS/Android 客户端 7.0.0 以下版本，`navigationStyle` 只在 `app.json` 中生效。
   * - iOS/Android 客户端 6.7.2 版本开始，`navigationStyle: "custom"` 对 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件无效
   * - 开启 `custom` 后，低版本客户端需要做好兼容。开发者工具基础库版本切到 1.7.0（不代表最低版本，只供调试用）可方便切到旧视觉
   * - Windows 客户端 3.0 及以上版本，为了给用户提供更符合桌面软件的使用体验，统一了小程序窗口的导航栏，`navigationStyle: "custom"` 不再生效
   *
   * @default "default"
   */
  navigationStyle?: ENavigationStyle | string

  /**
   * 在非首页、非页面栈最底层页面或非tabbar内页面中的导航栏展示home键
   *
   * 最低版本：微信客户端 8.0.24
   */
  homeButton?: boolean

  /**
   * 窗口的背景色
   *
   * @default "#ffffff"
   */
  backgroundColor?: string

  /**
   * 下拉 loading 的样式，仅支持 `dark` / `light`
   *
   * @default "dark"
   */
  backgroundTextStyle?: EBackgroundTextStyle | string

  /**
   * 顶部窗口的背景色，仅 iOS 支持
   *
   * 最低版本：微信客户端 6.5.16
   *
   * @default "#ffffff"
   */
  backgroundColorTop?: string

  /**
   * 底部窗口的背景色，仅 iOS 支持
   *
   * 最低版本：微信客户端 6.5.16
   *
   * @default "#ffffff"
   */
  backgroundColorBottom?: string

  /**
   * 是否开启全局的下拉刷新。
   *
   * 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh)
   *
   * @default false
   */
  enablePullDownRefresh?: boolean

  /**
   * 页面上拉触底事件触发时距页面底部距离，单位为 px。
   *
   * 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom)
   *
   * @default 50
   */
  onReachBottomDistance?: number

  /**
   * 屏幕旋转设置，支持 `auto` / `portrait` / `landscape`
   *
   * 详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)
   *
   * 最低版本：[2.4.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) (auto) / 2.5.0 (landscape)
   *
   * @default "portrait"
   */
  pageOrientation?: EPageOrientation | string

  /**
   * [重新启动策略](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_2-1-%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8%E7%AD%96%E7%95%A5) 配置
   *
   * - `"homePage"` （默认值）如果从这个页面退出小程序，下次将从首页冷启动
   *
   * - `"homePageAndLatestPage"` 如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变（不可用于 tab 页）
   *
   * 最低版本：[2.8.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   *
   * @default "homePage"
   */
  restartStrategy?: ERestartStrategy

  /**
   * 页面 [初始渲染缓存](https://developers.weixin.qq.com/miniprogram/dev/framework/view/initial-rendering-cache.html) 配置，支持 `static` / `dynamic`
   *
   * 最低版本：[2.11.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  initialRenderingCache?: EInitialRenderingCache | string

  /**
   * 切入系统后台时，隐藏页面内容，保护用户隐私。支持 `hidden` / `none`
   *
   * 最低版本：[2.15.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   *
   * @default "none"
   */
  visualEffectInBackground?: EVisualEffectInBackground | string

  /**
   * 控制 [预加载下个页面的时机](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_nav.html#_2-4-%E6%8E%A7%E5%88%B6%E9%A2%84%E5%8A%A0%E8%BD%BD%E4%B8%8B%E4%B8%AA%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%97%B6%E6%9C%BA)。
   * 支持 `static` / `manual` / `auto`
   *
   * 最低版本：[2.15.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
   */
  handleWebviewPreload?: EHandleWebviewPreload | string

  [key: string]: any
}

export enum ENavigationBarTextStyle {
  black = 'black',
  white = 'white',
}

export enum ENavigationStyle {
  default = 'default',
  custom = 'custom',
}

export enum EBackgroundTextStyle {
  dark = 'dark',
  light = 'light',
}

export enum EPageOrientation {
  auto = 'auto',
  portrait = 'portrait',
  landscape = 'landscape',
}

export enum ERestartStrategy {
  /**
   * （默认值）如果从这个页面退出小程序，下次将从首页冷启动
   */
  homePage = 'homePage',

  /**
   * 如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变（不可用于 tab 页）
   */
  homePageAndLatestPage = 'homePageAndLatestPage',
}

export enum EInitialRenderingCache {
  static = 'static',
  dynamic = 'dynamic',
}

export enum EVisualEffectInBackground {
  hidden = 'hidden',
  none = 'none',
}

export enum EHandleWebviewPreload {
  static = 'static',
  manual = 'manual',
  auto = 'auto',
}

export interface ITabBar {
  /**
   * tab 上的文字默认颜色，仅支持十六进制颜色
   */
  color: string

  /**
   * tab 上的文字选中时的颜色，仅支持十六进制颜色
   */
  selectedColor: string

  /**
   * tab 的背景色，仅支持十六进制颜色
   */
  backgroundColor: string

  /**
   * tabbar 上边框的颜色， 仅支持 `black` / `white`
   *
   * @default "black"
   */
  borderStyle?: EBorderStyle | string

  /**
   * tab 的列表，最少 2 个、最多 5 个 tab，
   * tab 按数组的顺序排序，每个项都是一个对象。
   */
  list: ITabBarListItem[]

  /**
   * tabBar 的位置，仅支持 `bottom` / `top`
   *
   * @default "bottom"
   */
  position?: EPosition | string

  /**
   * 自定义 tabBar，见 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)
   *
   * 最低版本：2.5.0
   *
   * @default false
   */
  custom?: boolean

  [key: string]: any
}

export enum EBorderStyle {
  black = 'black',
  white = 'white',
}

export enum EPosition {
  bottom = 'bottom',
  top = 'top',
}

export interface ITabBarListItem {
  /**
   * 页面路径，必须在 pages 中先定义
   */
  pagePath: string

  /**
   * tab 上按钮文字
   */
  text: string

  /**
   * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
   *
   * 当 `position` 为 `top` 时，不显示 icon。
   */
  iconPath?: string

  /**
   * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
   *
   * 当 `position` 为 `top` 时，不显示 icon。
   */
  selectedIconPath?: string

  [key: string]: any
}

export interface INetworkTimeout {
  /**
   * [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  request?: number

  /**
   * [wx.connectSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  connectSocket?: number

  /**
   * [wx.uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  uploadFile?: number

  /**
   * [wx.downloadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  downloadFile?: number

  [ket: string]: any
}

export interface ISubpackages {
  /**
   * 分包根目录
   */
  root: string

  /**
   * 分包别名，[分包预下载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html) 时可以使用
   */
  name?: string

  /**
   * 分包页面路径，相对于分包根目录
   */
  pages: string[]

  /**
   * 分包是否是 [独立分包](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html)
   */
  independent?: boolean

  /**
   * 分包内引入插件 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%9C%A8%E5%88%86%E5%8C%85%E5%86%85%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6%E4%BB%A3%E7%A0%81%E5%8C%85)
   */
  plugins?: plugins

  [key: string]: any
}

export interface IWorkers {
  /**
   * `Worker` 代码放置的目录
   */
  path: string

  /**
   * true 表示把 worker 打包为分包。默认 `false`。
   *
   * 填 `false` 时等同于 `{ "workers": "workers" }`
   *
   * @default false
   */
  isSubpackage: boolean

  [key: string]: any
}

export enum ERequiredBackgroundModes {
  /**
   * 后台音乐播放
   */
  audio = 'audio',

  /**
   * 后台定位
   */
  location = 'location',
}

export enum ERequiredPrivateInfos {

  /**
   * 获取模糊地理位置
   */
  getFuzzyLocation = 'getFuzzyLocation',

  /**
   * 获取精确地理位置
   */
  getLocation = 'getLocation',

  /**
   * 监听实时地理位置变化事件
   */
  onLocationChange = 'onLocationChange',

  /**
   * 接收位置消息（前台）
   */
  startLocationUpdate = 'startLocationUpdate',

  /**
   * 接收位置消息（前后台）
   */
  startLocationUpdateBackground = 'startLocationUpdateBackground',

  /**
   * 打开地图选择位置
   */
  chooseLocation = 'chooseLocation',

  /**
   * 打开POI列表选择位置
   */
  choosePoi = 'choosePoi',

  /**
   * 获取用户地址信息
   */
  chooseAddress = 'chooseAddress',
}

export interface plugins {
  /**
   * 插件引用名，由使用者自定义，无需和插件开发者保持一致或与开发者协调。
   */
  [key: string]: IPlugin
}

export interface IPlugin {
  /**
   * 插件的版本号
   */
  version: string

  /**
   * 插件的 appid
   */
  provider: string

  [key: string]: any
}

export interface preloadRule {
  /**
   * 预下载配置的页面路径
   */
  [key: string]: IPreloadRule
}

export interface IPreloadRule {
  /**
   * 进入页面后预下载分包的 root 或 name。
   *
   * `__APP__` 表示主包。
   */
  packages: string[]

  /**
   * 在指定网络下预下载，可选值为：
   *
   * - `"all"`: 不限网络
   *
   * - `"wifi"`: 仅wifi下预下载
   *
   * @default "wifi"
   */
  network?: ENetwork | string

  [key: string]: any
}

export enum ENetwork {
  /**
   * 不限网络
   */
  all = 'all',

  /**
   * 仅wifi下预下载
   */
  wifi = 'wifi',
}

export interface IUsingComponents {
  /**
   * 自定义组件的标签名和对应的自定义组件文件路径
   */
  [key: string]: string
}

export interface IPermission {
  /**
   * 精确地理位置
   *
   * 对应接口：
   * - [wx.getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
   * - [wx.startLocationUpdate](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)
   */
  'scope.userLocation'?: PermissionObject

  /**
   * 模糊地理位置
   *
   * 对应接口：
   * - [wx.getFuzzyLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html)
   */
  'scope.userFuzzyLocation'?: PermissionObject

  /**
   * 后台定位
   *
   * 对应接口：
   * - [wx.startLocationUpdateBackground](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html)
   */
  'scope.userLocationBackground'?: PermissionObject

  /**
   * 麦克风
   *
   * 对应接口：
   * - [live-pusher组件](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
   * - [wx.startRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html)
   * - [wx.joinVoIPChat](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html)
   * - [RecorderManager.start](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)
   */
  'scope.record'?: PermissionObject

  /**
   * 摄像头
   *
   * 对应接口：
   * - [camera组件](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)
   * - [live-pusher组件](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
   * - [wx.createVKSession](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html)
   */
  'scope.camera'?: PermissionObject

  /**
   * 蓝牙
   *
   * 对应接口：
   * - [wx.openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
   * - [wx.createBLEPeripheralServer](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html)
   */
  'scope.bluetooth'?: PermissionObject

  /**
   * 添加到相册
   *
   * 对应接口：
   * - [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
   * - [wx.saveVideoToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html)
   */
  'scope.writePhotosAlbum'?: PermissionObject

  /**
   * 添加到联系人
   *
   * 对应接口：
   * - [wx.addPhoneContact](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html)
   */
  'scope.addPhoneContact'?: PermissionObject

  /**
   * 添加到日历
   *
   * 对应接口：
   * - [wx.addPhoneRepeatCalendar](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneRepeatCalendar.html)
   * - [wx.addPhoneCalendar](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneCalendar.html)
   */
  'scope.addPhoneCalendar'?: PermissionObject

  /**
   * 微信运动步数
   *
   * 对应接口：
   * - [wx.getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
   */
  'scope.werun'?: PermissionObject

  /**
   * 通讯地址（已取消授权，可以直接调用对应接口）
   *
   * 对应接口：
   * - [wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
   */
  'scope.address'?: PermissionObject

  /**
   * 发票抬头（已取消授权，可以直接调用对应接口）
   *
   * 对应接口：
   * - [wx.chooseInvoiceTitle](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)
   */
  'scope.invoiceTitle'?: PermissionObject

  /**
   * 获取发票（已取消授权，可以直接调用对应接口）
   *
   * 对应接口：
   * - [wx.chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html)
   */
  'scope.invoice'?: PermissionObject

  /**
   * 用户信息（小程序已回收，请使用头像昵称填写，小游戏可继续调用）
   *
   * 对应接口：
   * - [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
   */
  'scope.userInfo'?: PermissionObject

  [key: string]: any
}

export interface PermissionObject {
  /**
   * 小程序获取权限时展示的接口用途说明。最长 30 个字符
   */
  desc: string

  [key: string]: any
}

export enum EStyle {
  v2 = 'v2',
}

export interface IUseExtendedLib {
  /**
   * [多端开发框架](https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/)
   */
  kbone?: boolean

  /**
   * [WeUI 组件库](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/)
   */
  weui?: boolean

  [key: string]: any
}

export interface IEntranceDeclare {
  /**
   * 聊天位置消息
   */
  locationMessage?: ILocationMessage

  [key: string]: any
}

export interface ILocationMessage {
  /**
   * 路径
   */
  path: string

  /**
   * 参数
   */
  query: string

  [key: string]: any
}

export enum ELazyCodeLoading {
  requiredComponents = 'requiredComponents',
}

export interface ISinglePage {
  /**
   * 导航栏与页面的相交状态，
   * 值为 float 时表示导航栏浮在页面上，与页面相交；
   * 值为 squeezed 时表示页面被导航栏挤压，与页面不相交
   */
  navigationBarFit?: ENavigationBarFit | string

  [key: string]: any
}

export enum ENavigationBarFit {
  /**
   * 表示导航栏浮在页面上，与页面相交
   */
  float = 'float',

  /**
   * 表示页面被导航栏挤压，与页面不相交
   */
  squeezed = 'squeezed',
}

export interface ISupportedMaterials {
  /**
   * 支持文件类型的 `MimeType` ，音频，视频支持二级配置的通配模式，例如: `video/*`。
   * 通配模式配置和精确类型配置同时存在时，则优先使用精确类型的配置
   * (例如` video/*` 和 `video/mp4` 同时存在，会优先使用 `video/mp4` 的配置)。
   */
  materialType: MimeType | string

  /**
   * 开发者配置的标题，在素材页面会展示该标题，配置中必须包含 `${nickname}`,
   * 代码包编译后会自动替换为小程序名称，如果声明了简称则会优先使用简称。
   * 除去 `${nickname}` 其余字数不得超过6个。
   */
  name: string

  /**
   * 用途描述，会在推荐列表展示该描述，限定字数不超过22个。
   */
  desc: string

  /**
   * 在该场景下打开小程序时跳转页面
   */
  path: string
}

export type MimeType =
  | 'video/*'
  | 'audio/*'
  | 'image/*'
  | 'text/html'
  | 'text/plain'
  | 'application/*'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.ms-word.document.macroEnabled.12'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.ms-excel.sheet.macroEnabled.12'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/zip'
  | 'application/vnd.rar'
  | 'application/x-7z-compressed'
  | 'application/x-photoshop'
  | 'application/acad'
  | 'application/x-cdr'
  | 'application/dxf'
  | 'application/step'
  | 'application/rtf'
  | 'application/postscript'

export interface IHalfPage {
  /**
   * 视频号直播打开的第一个页面的全屏状态使用自定义顶部，支持 `default` / `custom`
   */
  firstPageNavigationStyle?: string

  [key: string]: any
}
