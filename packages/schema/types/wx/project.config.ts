/**
 * 小程序项目配置文件
 *
 * 可以在项目根目录使用 `project.config.json` 文件对项目进行配置。
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html>
 */
export interface ProjectConfig {
  /**
   * 指定小程序源码的目录(需为相对路径)
   */
  miniprogramRoot: string

  /**
   * 指定腾讯云项目的目录(需为相对路径)
   */
  qcloudRoot: string

  /**
   * 指定插件项目的目录(需为相对路径)
   */
  pluginRoot: string

  /**
   * 云开发代码根目录(需为相对路径)
   */
  cloudbaseRoot: string

  /**
   * 云函数代码根目录(需为相对路径)
   */
  cloudfunctionRoot: string

  /**
   * 云函数本地调试请求模板的根目录(需为相对路径)
   */
  cloudfunctionTemplateRoot: string

  /**
   * 云托管代码根目录(需为相对路径)
   */
  cloudcontainerRoot: string

  /**
   * 编译类型
   *
   * `"miniprogram"` 当前为普通小程序项目
   *
   * `"plugin"` 当前为小程序插件项目
   *
   * @default "miniprogram"
   */
  compileType: compileType

  /**
   * 项目设置
   */
  setting: setting

  /**
   * 基础库版本
   *
   * 可以指定项目运行的基础库具体的版本号，也可以指定以下值
   *
   * `"latest"` 最新的非灰度中的基础库
   *
   * `"trial"` 最新的基础库
   *
   * `"widelyUsed"` 使用比例最高的基础库
   *
   */
  libVersion: libVersion

  /**
   * 项目的 appid，`只在新建项目时读取`
   */
  appid: string

  /**
   * 项目名字，`只在新建项目时读取`
   */
  projectname: string

  /**
   * 打包配置选项
   *
   * `packOptions` 用以配置项目在打包过程中的选项。打包是预览、上传时对项目进行的必须步骤。
   *
   * 注: 这部分设置的更改可能需要重新打开项目才能生效。
   */
  packOptions: packOptions

  /**
   * 调试配置选项
   *
   * `debugOptions` 用以配置在对项目代码进行调试时的选项
   *
   * 注：配置此规则后，可能需要关闭并重新打开项目才能看到效果。
   */
  debugOptions: debugOptions

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
  watchOptions: watchOptions

  /**
   * 指定自定义预处理的命令
   */
  scripts: scripts

  /**
   * 仅在小游戏项目中有效
   *
   * 在微信开发者工具里开启一个本地静态资源服务器，用于托管项目静态资源。
   */
  staticServerOptions: staticServerOptions

}

/**
 * 编译类型作用于开发工具的以下设置
 *
 * `"miniprogram"` 当前为普通小程序项目
 *
 * `"plugin"` 当前为小程序插件项目
 */
export type compileType = 'miniprogram' | 'plugin'

/**
 * 项目的编译设置，可以指定以下设置。部分设置无法在 `project.private.config.json` 中生效
 */
export interface setting {
  /**
   * 启用[条件编译](https://dev.weixin.qq.com/docs/framework/dev/framework/operation/condition-compile.html)
   *
   * 允许私有设置 否
   */
  condition: boolean

  /**
   * 是否启用 es6 转 es5
   *
   * 允许私有设置 否
   */
  es6: boolean

  /**
   * 是否打开增强编译
   *
   * 允许私有设置 否
   */
  enhance: boolean

  /**
   * 上传代码时样式是否自动补全
   *
   * 允许私有设置 否
   */
  postcss: boolean

  /**
   * 上传代码时是否自动压缩脚本文件
   *
   * 允许私有设置 否
   */
  minified: boolean

  /**
   * 上传代码时是否自动压缩样式文件
   *
   * 允许私有设置 否
   */
  minifyWXSS: boolean

  /**
   * 上传代码时是否自动压缩 WXML 文件
   *
   * 允许私有设置 否
   */
  minifyWXML: boolean

  /**
   * 上传时进行代码保护
   *
   * 允许私有设置 否
   */
  uglifyFileName: boolean

  /**
   * 上传时是否过滤无依赖文件
   *
   * 允许私有设置 否
   */
  ignoreUploadUnusedFiles: boolean

  /**
   * 是否自动运行体验评分
   *
   * 允许私有设置 是
   */
  autoAudits: boolean

  /**
   * 是否检查安全域名和 TLS 版本
   *
   * 允许私有设置 是
   */
  urlCheck: boolean

  /**
   * 是否开启文件保存后自动热重载
   *
   * 允许私有设置 是
   */
  compileHotReLoad: boolean

  /**
   * 小程序加载时是否数据预拉取
   *
   * 允许私有设置 是
   */
  preloadBackgroundData: boolean

  /**
   * 是否启用懒注入占位组件调试
   *
   * 允许私有设置 是
   */
  lazyloadPlaceholderEnable: boolean

  /**
   * 仅在小游戏项目有效，是否开启静态资源服务器
   *
   * 允许私有设置 是
   */
  useStaticServer: boolean

  /**
   * 预览及真机调试的时主包、分包体积上限调整为4M（小程序）、8M（小游戏）
   *
   * 允许私有设置 是
   */
  bigPackageSizeSupport: boolean

  // 以下字段是开发者工具的隐式设置

  /**
   * 增强编译下Babel的配置项
   *
   * 允许私有设置 否
   */
  babelSetting: babelSetting

  /**
   * 编译插件配置
   *
   * 允许私有设置 否
   */
  useCompilerPlugins: useCompilerPlugins[] | false

  /**
   * 将 JS 编译成 ES5 时，是否禁用严格模式
   *
   * 允许私有设置 否
   */
  disableUseStrict: boolean

  /**
   * 上传时是否带上 sourcemap（默认为true）
   *
   * 允许私有设置 否
   *
   * @default true
   */
  uploadWithSourceMap: boolean

  /**
   * 在小游戏插件项目中，是否启用 “以本地目录为插件资源来源” 特性
   *
   * 允许私有设置 否
   *
   * @default true
   */
  localPlugins: boolean

  /**
   * 是否手动配置构建 npm 的路径
   *
   * 允许私有设置 否
   *
   * @default true
   */
  packNpmManually: boolean

  /**
   * 仅 packNpmManually 为 true 时生效，详细参考[构建 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
   *
   * 允许私有设置 否
   */
  packNpmRelationList: packNpmRelationList[]

  /**
   * 仅是否使用工具渲染 `CoverView`
   *
   * 允许私有设置 是
   */
  coverView: boolean

  /**
   * 预览、真机调试和本地模拟器等开发阶段是否过滤无依赖文件（默认为true）
   *
   * 允许私有设置 是
   *
   * @default true
   */
  ignoreDevUnusedFiles: boolean

  /**
   * 是否展示 JSON 文件校验错误信息
   *
   * 允许私有设置 是
   */
  checkInvalidKey: boolean

  /**
   * 是否开启调试器 WXML 面板展示 shadow-root
   *
   * 允许私有设置 是
   */
  showShadowRootInWxmlPanel: boolean

  /**
   * 是否开启小程序独立域调试特性
   *
   * 允许私有设置 是
   */
  useIsolateContext: boolean

  /**
   * 是否开启模拟器预先载入小程序的某些资源。此设定为 false 时会导致 `useIsolateContext` 失效
   *
   * 允许私有设置 是
   */
  useMultiFrameRuntime: boolean

  /**
   * 是否启用 `API Hook` 功能
   *
   * 允许私有设置 是
   */
  useApiHook: boolean

  /**
   * 是否在额外的进程处理一些小程序 API
   *
   * 允许私有设置 是
   */
  useApiHostProcess: boolean

  /**
   * 仅在小游戏有效，是否开启局域网调试服务器
   *
   * 允许私有设置 是
   */
  useLanDebug: boolean

  /**
   * 是否在游戏引擎项目中开启支持引用 node 原生模块的底层加速特性
   *
   * 允许私有设置 是
   */
  enableEngineNative: boolean

  /**
   * 是否在本地设置中展示传统的 ES6 转 ES5 开关（对应 es6），增强编译开关 （对应 enhance）
   *
   * 允许私有设置 是
   */
  showES6CompileOption: boolean

}

export interface packNpmRelationList {
  packageJsonPath: string
  miniprogramNpmDistDir: string
}

export type useCompilerPlugins = 'typescript' | 'less' | 'sass'

/**
 * `将 JS 编译为 ES5` 时 Babel 的配置项，其中可以指定以下设置
 */
export interface babelSetting {
  /**
   * Babel 辅助函数的输出目录，默认为 `@babel/runtime`
   */
  outputPath: string

  /**
   * 配置需要跳过Babel编译(包括代码压缩)处理的文件或目录
   */
  ignore: string[]
}

// todo 生成 libVersion Schema 后 需要把 anyOf 中 type:object 改为 type:string
// https://github.com/microsoft/TypeScript/issues/29729
interface Nothing {}
export type libVersion = 'latest' | 'trial' | 'widelyUsed' | (string & Nothing)

/**
 * packOptions 用以配置项目在打包过程中的选项。打包是预览、上传时对项目进行的必须步骤。
 */
export interface packOptions {
  /**
   * 用以配置打包时需要强制带上的文件（仅限后缀名白名单内）或者文件夹，
   * 匹配的这些文件或文件夹将一定会出现在预览或上传的结果内。
   * （该字段的优先级高于 packOptions.ignore）
   */
  include?: packItem[]

  /**
   * 用以配置打包时对符合指定规则的文件或文件夹进行忽略，
   * 以跳过打包的过程，这些文件或文件夹将不会出现在预览或上传的结果内。
   */
  ignore?: packItem[]
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
  type: packItemType
}

export type packItemType = 'folder' | 'file' | 'suffix' | 'prefix' | 'regexp' | 'glob'

/**
 * debugOptions 用以配置在对项目代码进行调试时的选项。
 */
export interface debugOptions {
  /**
   * 用以配置调试时于调试器 Sources 面板隐藏源代码的文件。
   *
   * 当某个 js 文件符合此规则时，调试器 Sources 面板中此文件源代码正文内容将被隐藏，显示为：
   * ```js
   * // xxx.js has been hided by project.config.json
   * ```
   */
  hidedInDevtools?: packItem[]
}

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
   */
  ignore?: string
}

/**
 * 指定自定义预处理的命令
 */
export interface scripts {
  /**
   * 编译前预处理命令
   */
  beforeCompile: string

  /**
   * 预览前预处理命令
   */
  beforePreview: string

  /**
   * 上传前预处理命令
   */
  beforeUpload: string
}

/**
 * 仅在小游戏项目中有效
 *
 * 在微信开发者工具里开启一个本地静态资源服务器，用于托管项目静态资源。
 */
export interface staticServerOptions {
  /**
   * 可以指向项目路径下的某个目录作为静态资源路径。
   * 之后就可以通过工具提供的 `本地ip:端口port/` 来访问具体的静态资源。
   * 通常可以用于上线发布前预览测试静态资源加载效果。
   */
  servePath: string
}
