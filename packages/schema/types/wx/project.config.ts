/**
 * 小程序项目配置文件
 *
 * 可以在项目根目录使用 `project.config.json` 文件对项目进行配置。
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html>
 *
 * 微信官方 schema
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/project.config.schema.json>
 */
export interface ProjectConfig {
  /**
   * 指定小程序源码的目录(需为相对路径)
   */
  miniprogramRoot?: string

  /**
   * 指定腾讯云项目的目录(需为相对路径)
   */
  qcloudRoot?: string

  /**
   * 指定插件项目的目录(需为相对路径)
   */
  pluginRoot?: string

  /**
   * 云开发代码根目录(需为相对路径)
   */
  cloudbaseRoot?: string

  /**
   * 云函数代码根目录(需为相对路径)
   */
  cloudfunctionRoot?: string

  /**
   * 云函数本地调试请求模板的根目录(需为相对路径)
   */
  cloudfunctionTemplateRoot?: string

  /**
   * 云托管代码根目录(需为相对路径)
   */
  cloudcontainerRoot?: string

  /**
   * 编译类型
   *
   * - `"miniprogram"` 当前为普通小程序项目
   *
   * - `"plugin"` 当前为小程序插件项目
   *
   * @default "miniprogram"
   */
  compileType: compileType | string

  /**
   * 项目的编译设置，可以指定以下设置。部分设置无法在 `project.private.config.json` 中生效
   */
  setting?: setting

  /**
   * 基础库版本
   *
   * 可以指定项目运行的基础库具体的版本号，也可以指定以下值
   *
   * - `"latest"` 最新的非灰度中的基础库
   *
   * - `"trial"` 最新的基础库
   *
   * - `"widelyUsed"` 使用比例最高的基础库
   *
   */
  libVersion?: libVersion | string

  /**
   * 项目的 appid，`只在新建项目时读取`
   */
  appid: string

  /**
   * 项目名字，`只在新建项目时读取`
   */
  projectname: string

  /**
   * 项目描述
   */
  description?: string

  /**
   * 打包配置选项
   *
   * `packOptions` 用以配置项目在打包过程中的选项。打包是预览、上传时对项目进行的必须步骤。
   *
   * 注: 这部分设置的更改可能需要重新打开项目才能生效。
   */
  packOptions?: packOptions

  /**
   * 调试配置选项
   *
   * `debugOptions` 用以配置在对项目代码进行调试时的选项
   *
   * 注：配置此规则后，可能需要关闭并重新打开项目才能看到效果。
   */
  debugOptions?: debugOptions

  /**
   * 文件监听配置设置
   *
   * `watchOptions` 用以配置项目中可以被忽略展示和监听文件变化的文件匹配规则。
   * 部分项目（如游戏项目）其项目文件可能成千上万，其中大部分可能是资源文件，
   * 并不是小程序和小游戏代码中关心展示的文件，这些文件在工具开发时可以不需要被开发者关注，
   * 因此工具可以增加一个配置去忽略指定的文件和目录，
   * 从而不对这些文件进行文件遍历获取和文件内容变更的监听（watch），
   * 从而提高开启工具的速度以及减少工具打开占用的内存。
   */
  watchOptions?: watchOptions

  /**
   * 指定自定义预处理的命令
   */
  scripts?: scripts

  /**
   * 仅在小游戏项目中有效
   *
   * 在微信开发者工具里开启一个本地静态资源服务器，用于托管项目静态资源。
   */
  staticServerOptions?: staticServerOptions

  /**
   * 编辑器设置 （会覆盖工具里的设置）
   *
   * 指定自动生成的文件的 tabIndent 和 tabSize
   *
   * @examples require('.').editorSettingExample
   */
  editorSetting?: editorSetting

  /**
   * 编译模式，文档中未描述
   *
   */
  condition?: condition

  /**
   * 模拟器类型
   *
   * @examples ["wechat"]
   */
  simulatorType?: string

  /**
   * 模拟器的版本
   */
  simulatorPluginLibVersion?: {}

  /**
   * 骨架屏配置 [点击查看文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html)
   */
  skeletonConfig?: skeletonConfig

  /**
   *
   */
  jsserverRoot?: string

  /**
   *
   */
  pluginAppid?: string

  /**
   *
   */
  srcMiniprogramRoot?: string

  [key: string]: any
}

/**
 * 编译类型作用于开发工具的以下设置
 */
export enum compileType {
  /**
   * 当前为小程序插件项目
   */
  plugin = 'plugin',

  /**
   * 当前为普通小程序项目
   */
  miniprogram = 'miniprogram',
}

export interface setting {
  /**
   * 启用条件编译 [点击查看文档](https://dev.weixin.qq.com/docs/framework/dev/framework/operation/condition-compile.html)
   *
   * 允许私有设置 否
   */
  condition?: boolean

  /**
   * 是否启用 es6 转 es5
   *
   * 允许私有设置 否
   *
   * 注: `es6` 和 `enhance` 需同时为 true/false，对应于 `将 JS 编译成 ES5`
   *
   * @default false
   */
  es6?: boolean

  /**
   * 是否打开增强编译
   *
   * 允许私有设置 否
   *
   * 注: `es6` 和 `enhance` 需同时为 true/false，对应于 `将 JS 编译成 ES5`
   */
  enhance?: boolean

  /**
   * 上传代码时样式是否自动补全
   *
   * 允许私有设置 否
   *
   * @default false
   */
  postcss?: boolean

  /**
   * 上传代码时是否自动压缩脚本文件
   *
   * 允许私有设置 否
   *
   * @default false
   */
  minified?: boolean

  /**
   * 上传代码时是否自动压缩样式文件
   *
   * 允许私有设置 否
   */
  minifyWXSS?: boolean

  /**
   * 上传代码时是否自动压缩 WXML 文件
   *
   * 允许私有设置 否
   */
  minifyWXML?: boolean

  /**
   * 上传时进行代码保护
   *
   * 允许私有设置 否
   *
   * @default false
   */
  uglifyFileName?: boolean

  /**
   * 上传时是否过滤无依赖文件
   *
   * 允许私有设置 否
   */
  ignoreUploadUnusedFiles?: boolean

  /**
   * 是否自动运行体验评分
   *
   * 允许私有设置 是
   *
   * @default false
   */
  autoAudits?: boolean

  /**
   * 是否检查安全域名和 TLS 版本
   *
   * 允许私有设置 是
   *
   * @default false
   */
  urlCheck?: boolean

  /**
   * 是否开启文件保存后自动热重载
   *
   * 允许私有设置 是
   */
  compileHotReLoad?: boolean

  /**
   * 小程序加载时是否数据预拉取
   *
   * 允许私有设置 是
   */
  preloadBackgroundData?: boolean

  /**
   * 是否启用懒注入占位组件调试
   *
   * 允许私有设置 是
   *
   * 注: (懒注入占位组件调试) 开启按需注入 [点击查看文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html)
   * 后在项目设置面板中会出现对应的勾选项，
   * 开启之后，按需注入的组件将会停止注入，页面停止在占位组件状态，
   * 便于调试自定义占位组件。
   */
  lazyloadPlaceholderEnable?: boolean

  /**
   * 仅在小游戏项目有效，是否开启静态资源服务器
   *
   * 允许私有设置 是
   *
   * 注: (静态资源服务器) 可以托管项目本地的静态资源，
   * 主要用于在预览时测试小游戏真机资源加载的效果。
   */
  useStaticServer?: boolean

  /**
   * 预览及真机调试的时主包、分包体积上限调整为4M（小程序）、8M（小游戏）
   *
   * 允许私有设置 是
   */
  bigPackageSizeSupport?: boolean

  // 以下字段是开发者工具的隐式设置

  /**
   * 增强编译下Babel的配置项
   *
   * 允许私有设置 否
   */
  babelSetting?: babelSetting

  /**
   * 编译插件配置
   *
   * 允许私有设置 否
   */
  useCompilerPlugins?: useCompilerPlugins[] | false

  /**
   * 将 JS 编译成 ES5 时，是否禁用严格模式
   *
   * 允许私有设置 否
   */
  disableUseStrict?: boolean

  /**
   * 上传时是否带上 sourcemap（默认为true）
   *
   * 允许私有设置 否
   *
   * @default true
   */
  uploadWithSourceMap?: boolean

  /**
   * 在小游戏插件项目中，是否启用 “以本地目录为插件资源来源” 特性
   *
   * 允许私有设置 否
   *
   * 注: (以本地目录为插件资源来源) 启用此特性后，
   * 工具将停止从线上获取小游戏插件包内容，并将检验本地相应目录的文件完整性。
   * 仅对小游戏插件项目有效。要以本地磁盘目录作为插件的资源来源，
   * 需要同时在小游戏插件项目的 game.json 中配置相关的属性。
   *
   * @default true
   */
  localPlugins?: boolean

  /**
   * 是否手动配置构建 npm 的路径
   *
   * 允许私有设置 否
   *
   * @default true
   */
  packNpmManually?: boolean

  /**
   * 仅 packNpmManually 为 true 时生效，详细参考构建 npm 文档 [点击查看文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
   *
   * 允许私有设置 否
   *
   * @examples require('.').packNpmRelationListExample
   */
  packNpmRelationList?: packNpmRelationList[]

  /**
   * 仅是否使用工具渲染 `CoverView`
   *
   * 允许私有设置 是
   */
  coverView?: boolean

  /**
   * 预览、真机调试和本地模拟器等开发阶段是否过滤无依赖文件（默认为true）
   *
   * 允许私有设置 是
   *
   * @default true
   */
  ignoreDevUnusedFiles?: boolean

  /**
   * 是否展示 JSON 文件校验错误信息
   *
   * 允许私有设置 是
   */
  checkInvalidKey?: boolean

  /**
   * 是否开启调试器 WXML 面板展示 shadow-root
   *
   * 允许私有设置 是
   */
  showShadowRootInWxmlPanel?: boolean

  /**
   * 是否开启小程序独立域调试特性
   *
   * 允许私有设置 是
   *
   * 注: (小程序独立域调试) 一种新的小程序内部代码的执行方式，
   * 仅影响工具侧的调试过程。未来将取代传统的执行方式并成为默认选择。
   * 仅在 2.11.1 及以上基础库有效。
   * 关闭此特性可能有助于规避一些调试中遇到的未知报错。
   */
  useIsolateContext?: boolean

  /**
   * 是否开启模拟器预先载入小程序的某些资源。此设定为 false 时会导致 `useIsolateContext` 失效
   *
   * 允许私有设置 是
   *
   * 注: (预先载入小程序的某些资源) 开启此内部特性后，
   * 调试时小程序的重新载入可能会更快一些。
   * 此设定不影响真机和实际运行效果。
   */
  useMultiFrameRuntime?: boolean

  /**
   * 是否启用 `API Hook` 功能
   *
   * 允许私有设置 是
   *
   * 注: (API Hook 功能) 关闭此内部特性可能导致工具的某些调试功能（例如 mock）失效。
   * 此设定不影响真机运行效果。
   */
  useApiHook?: boolean

  /**
   * 是否在额外的进程处理一些小程序 API
   *
   * 允许私有设置 是
   *
   * 注: (额外进程) 开启此内部特性后，
   * 部分 API 的调用会被移到单独的进程以减轻工具主进程的负担。
   * 此设定不影响真机运行效果。
   */
  useApiHostProcess?: boolean

  /**
   * 仅在小游戏有效，是否开启局域网调试服务器
   *
   * 允许私有设置 是
   */
  useLanDebug?: boolean

  /**
   * 是否在游戏引擎项目中开启支持引用 node 原生模块的底层加速特性
   *
   * 允许私有设置 是
   */
  enableEngineNative?: boolean

  /**
   * 是否在本地设置中展示传统的 ES6 转 ES5 开关（对应 es6），增强编译开关 （对应 enhance）
   *
   * 允许私有设置 是
   */
  showES6CompileOption?: boolean

  /**
   * 是否打开SiteMap索引提示
   *
   * @default true
   */
  checkSiteMap?: boolean

  /**
   * 是否使用npm包
   *
   * @default false
   */
  nodeModules?: boolean

  /**
   * 新特性
   */
  newFeature?: boolean

  /**
   *
   */
  bundle?: boolean

  /**
   *
   */
  scopeDataCheck?: boolean

  /**
   * 使用新的编译模块
   */
  useCompilerModule?: boolean

  /**
   *
   */
  userConfirmedBundleSwitch?: boolean

  /**
   *
   */
  userConfirmedUseCompilerModuleSwitch?: boolean

  [key: string]: any
}

export interface packNpmRelationList {
  /**
   * `packageJsonPath` 表示 node_modules 源对应的 package.json
   */
  packageJsonPath: string

  /**
   * miniprogramNpmDistDir 表示 node_modules 的构建结果目标位置
   */
  miniprogramNpmDistDir: string

  [key: string]: any
}

export const packNpmRelationListExample: packNpmRelationList[][] = [
  [
    {
      packageJsonPath: './package.json',
      miniprogramNpmDistDir: './miniprogram/',
    },
  ],
]

export type useCompilerPlugins = 'typescript' | 'less' | 'sass'

export interface babelSetting {
  /**
   * Babel 辅助函数的输出目录，默认为 `@babel/runtime`
   */
  outputPath?: string

  /**
   * 配置需要跳过Babel编译(包括代码压缩)处理的文件或目录
   *
   * @examples require('.').ignoreFileExamples
   */
  ignore?: string[]

  /**
   * 关闭的插件
   */
  disablePlugins?: string[]

  [key: string]: any
}

export enum libVersion {
  /**
   * 最新的非灰度中的基础库
   */
  latest = 'latest',

  /**
   * 最新的基础库
   */
  trial = 'trial',

  /**
   * 使用比例最高的基础库
   */
  widelyUsed = 'widelyUsed',
}

export interface packOptions {
  /**
   * 用以配置打包时需要强制带上的文件（仅限后缀名白名单内）或者文件夹，
   * 匹配的这些文件或文件夹将一定会出现在预览或上传的结果内。
   * （该字段的优先级高于 packOptions.ignore）
   *
   * @examples require('.').packItemExample
   */
  include?: packItem[]

  /**
   * 用以配置打包时对符合指定规则的文件或文件夹进行忽略，
   * 以跳过打包的过程，这些文件或文件夹将不会出现在预览或上传的结果内。
   *
   * @examples require('.').packItemExample
   */
  ignore?: packItem[]

  [key: string]: any
}

export interface packItem {
  /**
   * 路径或取值
   *
   * 注: `value` 字段的值若表示文件或文件夹路径，以小程序目录 (`miniprogramRoot`) 为根目录。
   */
  value: string

  /**
   * 类型
   *
   * `type` 可以取的值为 `folder`、`file`、`suffix`、`prefix`、`regexp`、`glob`，
   * 分别对应 `文件夹`、`文件`、`后缀`、`前缀`、`正则表达式`、`Glob 规则`。
   * 所有规则值都会自动忽略大小写。
   *
   * 注: `regexp`、`glob` 仅 1.02.1809260 及以上版本工具支持。
   */
  type: packItemType | string

  [key: string]: any
}

export enum packItemType {
  /**
   * 文件夹
   */
  folder = 'folder',

  /**
   * 文件
   */
  file = 'file',

  /**
   * 后缀
   */
  suffix = 'suffix',

  /**
   * 前缀
   */
  prefix = 'prefix',

  /**
   * 正则表达式
   */
  regexp = 'regexp',

  /**
   * Glob 规则
   */
  glob = 'glob',
}

export const packItemExample: packItem[][] = [
  [
    {
      type: 'file',
      value: 'test/test.js',
    },
  ],
  [
    {
      type: 'folder',
      value: 'test',
    },
  ],
  [
    {
      type: 'suffix',
      value: '.webp',
    },
  ],
  [
    {
      type: 'prefix',
      value: 'test-',
    },
  ],
  [
    {
      type: 'glob',
      value: 'test/**/*.js',
    },
  ],
  [
    {
      type: 'regexp',
      value: '\\.jsx$',
    },
  ],
]

export interface debugOptions {
  /**
   * 用以配置调试时于调试器 Sources 面板隐藏源代码的文件。
   *
   * 当某个 js 文件符合此规则时，调试器 Sources 面板中此文件源代码正文内容将被隐藏，显示为：
   * ```js
   * // xxx.js has been hided by project.config.json
   * ```
   *
   * @examples require('.').packItemExample
   */
  hidedInDevtools?: packItem[]

  [key: string]: any
}

export interface watchOptions {
  /**
   * `ignore`用以配置工具时对符合指定规则的文件或文件夹进行忽略
   * (`忽略的文件将不展示在编辑器文件列表和对该文件进行监听`），
   * 以避免展示和监听项目中不必要的文件内容（这些文件或文件夹不需要去关心文件变化）
   *
   * 支持 glob pattern 字符串数组
   *
   * - \*  匹配0到多个字符
   * - \? 匹配一个字符
   * - [...] 匹配一个字符列表，类似正则表达式的字符列表
   * - !(pattern|pattern|pattern) 反向匹配括号内的模式
   * - ?(pattern|pattern|pattern) 匹配0或1个括号内的模式
   * - +(pattern|pattern|pattern) 匹配至少1个括号内的模式
   * - *(pattern|pattern|pattern) 匹配0到多个括号内的模式
   * - \@(pattern|pat*|pat?erN) 精确匹配括号内的模式
   * - ** 匹配0到多个子目录，递归匹配子目录
   *
   * @examples require('.').ignoreFileExamples
   */
  ignore?: string[]

  [key: string]: any
}

export const ignoreFileExamples: string[][] = [
  ['utils/util.js'],
  ['libs/**/**'],
]

export interface scripts {
  /**
   * 编译前预处理命令
   */
  beforeCompile?: string

  /**
   * 预览前预处理命令
   */
  beforePreview?: string

  /**
   * 上传前预处理命令
   */
  beforeUpload?: string

  [key: string]: any
}

export interface staticServerOptions {
  /**
   * 可以指向项目路径下的某个目录作为静态资源路径。
   * 之后就可以通过工具提供的 `本地ip:端口port/` 来访问具体的静态资源。
   * 通常可以用于上线发布前预览测试静态资源加载效果。
   */
  servePath?: string

  [key: string]: any
}

export interface editorSetting {
  /**
   * tab 缩进
   *
   * - `"auto"` 自动检测缩进
   *
   * - `"insertSpaces"` 用空格代替 Tab
   *
   * - `"tab"` 使用 Tab
   *
   */
  tabIndent?: tabIndent | string

  /**
   * tab 大小
   *
   * @asType integer
   *
   * @default 4
   */
  tabSize?: number | string | '\t'

  [key: string]: any
}

export enum tabIndent {
  /**
   * 自动检测缩进
   */
  auto = 'auto',

  /**
   * 用空格代替 Tab
   */
  insertSpaces = 'insertSpaces',

  /**
   * 使用 Tab
   */
  tab = 'tab',
}

export const editorSettingExample: editorSetting[] = [{
  tabIndent: 'insertSpaces',
  tabSize: 2,
}]

export interface condition {
  search?: customCompileList
  conversation?: customCompileList

  /**
   * 小游戏模式
   */
  game?: customCompileList<gameCustomCompile>

  /**
   * 小游戏插件模式
   */
  gamePlugin?: customCompileList

  /**
   * 插件模式
   */
  plugin?: customCompileList<pluginCustomCompile>

  /**
   * 小程序模式
   */
  miniprogram?: customCompileList<miniprogramCustomCompile>

  [key: string]: any
}

export type customCompileList<T = baseCustomCompile> = {
  /**
   *
   * @asType integer
   */
  current?: number

  /**
   * 局部编译
   *
   * <https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html>
   *
   */
  list?: T[]

  [key: string]: any
}

interface baseCustomCompile {
  /**
   * 模式名称 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  name: string

  /**
   * 启动参数 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  query: string

  /**
   * 进入场景 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  scene: string | number | null

  shareInfo?: {}

  referrerInfo?: {}

  groupInfo?: {}

  [key: string]: any
}

export interface gameCustomCompile extends baseCustomCompile {

  /**
   * 启动页面路径 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  pathName: string

  chatroomUsernameInfo?: {}
}

export interface pluginCustomCompile extends baseCustomCompile {

  /**
   * 启动页面路径 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  pathName: string

  /**
   * 小程序模式（启动模式）
   *
   *
   */
  launchMode?: launchMode | string
}

export interface miniprogramCustomCompile extends baseCustomCompile {

  /**
   * 启动页面路径 [点击查看文档](https://developers.weixin.qq.com/minigame/dev/devtools/partial-compile.html)
   */
  pathName: string

  launchMode?: launchMode | string

  /**
   * 局部编译
   */
  partialCompile?: partialCompile

  chatroomUsernameInfo?: {}
}

export enum launchMode {
  /**
   * 默认
   */
  default = 'default',

  /**
   * 全屏类原生（商品橱窗等场景）
   */
  defaultNativeFunctionalized = 'defaultNativeFunctionalized',

  /**
   * 半屏类原生（直播商品等场景）
   */
  halfPageNativeFunctionalized = 'halfPageNativeFunctionalized',

  /**
   * 快照页（朋友圈等场景）
   */
  singlePage = 'singlePage',

  /**
   * 半屏（openEmbeddedMiniProgram打开）
   */
  embedded = 'embedded',
}

export interface partialCompile {
  /**
   * 是否开启局部编译
   */
  enabled: boolean

  /**
   * 局部编译的页面
   */
  pages: string[]

  [key: string]: any
}

// export const partialCompileExample: partialCompile[][] = [
//   [
//     {
//       name: '登录',
//       pathName: 'pages/login/index',
//       query: 'name=vendor&color=black',
//       scene: null,
//     },
//   ],
//   [
//     {
//       name: '首页',
//       pathName: 'pages/index/index',
//       query: 'scene=666',
//       scene: null,
//     },
//   ],
// ]

export interface skeletonConfig {
  /**
   * 全局配置
   */
  global: ISkeletonConfig
  pages?: {
    [key: string]: ISkeletonConfig
  }
}

export interface ISkeletonConfig {
  /**
   * 骨架屏显示时的动画
   *
   * - `"spin"`
   *
   * - `"chiaroscuro"`
   *
   * - `"shine"`
   *
   * @default "spin"
   */
  loading?: loading | string

  /**
   * 骨架页面中的边框
   */
  outline?: {
    /**
     * 保持边框颜色，默认为 true
     *
     * @default true
     */
    remain: boolean

    /**
     * `remain` 为 `false` 时，用 `replace` 字段替代 style.border
     */
    replace: string

    [key: string]: any
  }

  /**
   * 骨架页面中的文字块
   */
  text?: {
    /**
     * 用于决定骨架页面中文字块的的颜色，颜色值支持 16 进制
     */
    color: string

    [key: string]: any
  }

  /**
   * 骨架页面中的图片块
   */
  image?: {
    /**
     * 用于确定骨架页面中图片块的颜色，颜色值支持 16 进制，
     */
    color: string

    /**
     * 用于确定骨架页面中图片块的形状，形状支持两个枚举值
     *
     * - `"circle"` （圆形）
     *
     * - `"rect"` （矩形）。
     */
    shape: shape | string

    /**
     * shapeOpposite 字段接受一个数组，数组中每个元素是一个 DOM 选择器，
     * 用于选择 DOM 元素，被选择 DOM 的形状将和配置的 shape 形状相反，
     * 例如，配置的是 `rect` 那么，shapeOpposite 中的图片块将在骨架页面中显示成 circle 形状（圆形）
     */
    shapeOpposite: string[]

    [key: string]: any
  }

  /**
   * 骨架页面中的按钮块
   */
  button?: {
    /**
     * 用于确定骨架页面中按钮块的颜色，颜色值支持 16 进制，
     */
    color: string

    /**
     * `excludes` 接受一个数组，数组中元素是 DOM 选择器，
     * 用来选择元素，该数组中的元素将不被视为按钮块。
     */
    excludes: string[]

    [key: string]: any
  }

  /**
   * 骨架页面中伪元素块
   */
  pseudo?: {
    /**
     * 用于确定骨架页面中伪元素块的颜色，颜色值支持 16 进制，
     */
    color: string

    /**
     * 用于确定骨架页面中伪元素块的形状，形状支持两个枚举值
     *
     * - `"circle"` （圆形）
     *
     * - `"rect"` （矩形）。
     */
    shape: shape | string

    [key: string]: any
  }

  /**
   * 如果你有不需要进行骨架处理的元素，那么将该元素的 CSS 选择器写入该数组。
   */
  excludes?: string[]

  /**
   * 不需要生成页面骨架，且需要从 DOM 中移除的元素，配置值为移除元素的 CSS 选择器。
   */
  remove?: string[]

  /**
   * 不需要移除，但是通过设置其透明度为 0，来隐藏该元素，配置值为隐藏元素的 CSS 选择器。
   */
  hide?: string[]

  /**
   * 该数组中元素是 CSS 选择器，被选择的元素将被清空子元素。
   */
  empty?: string[]

  /**
   * 该数组中元素是 CSS 选择器，被选择的元素将被被插件处理成一个色块，
   * 色块的颜色和按钮块颜色一致。内部元素将不再做特殊处理，文字将隐藏。
   */
  grayBlock?: string[]

  /**
   * 显示原生组件，为 `false` 时原生组件被处理为 view。
   *
   * @default false
   */
  showNative?: boolean

  /**
   * 骨架屏背景色
   *
   * @default "transparent"
   */
  backgroundColor?: string

  /**
   * 默认为使用绝对定位占满全屏。当对自定义组件使用，
   * 作为局部加载的样式时，可设为 `auto` ，高度随内容撑开
   *
   * @default "fullscreen"
   */
  mode?: mode | string

  /**
   * 骨架屏模板的 name 值
   *
   * @default "skeleton"
   */
  templateName?: string

  /**
   * 支持的枚举值： `"rpx"`, `"rem"`, `"vw"`, `"vh"`, `"vmin"`, `"vmax"`
   *
   * @default "rpx"
   */
  cssUnit?: cssUnit | string

  /**
   * 生成骨架页面中 css 值保留的小数位数，默认值是 4
   *
   * @default 4
   */
  decimal?: number

  [key: string]: any
}

export enum loading {
  chiaroscuro = 'chiaroscuro',
  shine = 'shine',
  spin = 'spin',
}

export enum shape {
  circle = 'circle',
  rect = 'rect',
}

export enum mode {
  auto = 'auto',
  fullscreen = 'fullscreen',
}

export enum cssUnit {
  rem = 'rem',
  rpx = 'rpx',
  vh = 'vh',
  vmax = 'vmax',
  vmin = 'vmin',
  vw = 'vw',
}

// todo 添加 "markdownDescription"
// https://github.com/microsoft/vscode/issues/34498
