import type { Merge, Prettify } from '../utils'
import type { App, IWindow } from './app'

/**
 * 从 App 中公用的属性
 */
type CommonProperty =
  | 'usingComponents'
  | 'style'
  | 'singlePage'
  | 'enablePassiveEvent'
  | 'renderer'
  | 'componentFramework'
  | 'componentPlaceholder'

type PageBase = Prettify<Merge<Pick<App, CommonProperty>, IWindow>>

export interface Components extends PageBase {
  /**
   * 自定义组件 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
   *
   * 首先需要在 json 文件中进行自定义组件声明
   * （将 component 字段设为 true 可将这一组文件设为自定义组件）
   *
   * 注：需要基础库版本 1.6.3 或更高
   */
  component?: boolean

  /**
   * 组件样式隔离 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
   *
   * 它支持以下取值：
   * - `"isolated"` 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
   * - `"apply-shared"` 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
   * - `"shared"` 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 `apply-shared` 或 `shared` 的自定义组件。（这个选项在插件中不可用。）
   *
   * 如果这个 Component 构造器用于构造页面 ，则默认值为 `shared` ，
   * 且还有以下几个额外的样式隔离选项可用：
   * - `"page-isolated"` 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件；
   * - `"page-apply-shared"` 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，但设为 `shared` 的自定义组件会影响到页面；
   * - `"page-shared"` 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式会影响到其他设为 `apply-shared` 或 `shared` 的自定义组件，也会受到设为 `shared` 的自定义组件的影响。
   *
   * 从小程序基础库版本 2.10.1 开始，也可以在页面或自定义组件的 json 文件中配置
   *  `styleIsolation` （这样就不需在 js 文件的 `options` 中再配置）。
   *
   * 注：需要基础库版本 2.6.5 或更高
   *
   * @default "isolated" | "shared"
   */
  styleIsolation?: EStyleIsolation | string

  /**
   * 组件数据中的纯数据字段 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/pure-data.html)
   *
   * 从小程序基础库版本 2.10.1 开始，
   * 也可以在页面或自定义组件的 json 文件中配置 `pureDataPattern`
   * （这样就不需在 js 文件的 options 中再配置）。
   */
  pureDataPattern?: string

  /**
   * 抽象节点 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)
   *
   * 抽象节点可以指定一个默认组件，当具体组件未被指定时，将创建默认组件的实例。
   */
  componentGenerics?: Record<string, IComponentGenerics | boolean | null>

  /**
   * 占位组件 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/placeholder.html)
   *
   * 在使用如 [分包异步化](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html) 或 [用时注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E7%94%A8%E6%97%B6%E6%B3%A8%E5%85%A5) 等特性时，
   * 自定义组件所引用的其他自定义组件，
   * 在刚开始进行渲染时可能处于不可用的状态。此时，为了使渲染过程不被阻塞，
   * 不可用的自定义组件需要一个 「占位组件」（Component placeholder）。
   * 基础库会用占位组件替代不可用组件进行渲染，在该组件可用后再将占位组件替换回该组件。
   *
   * 注：基础库 2.11.2 及以上版本支持，2.11.2 以下和未配置的效果相同
   */
  componentPlaceholder?: Record<string, string>

  [key: string]: any
}

/**
 * 小程序页面或组件配置
 *
 * `app.json` 中的部分配置，也支持对单个页面进行配置，
 * 可以在页面对应的 .json 文件来对本页面的表现进行配置。
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html>
 *
 * 微信官方 schema
 * <https://dldir1.qq.com/WechatWebDev/plugins/editor/wechat-miniprogram_wx-json/1.0.0/page_component.schema.json>
 */
export interface Page extends Components {
  /**
   * 页面容器背景色，[点击查看设置背景色详情](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/custom-route.html#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E9%80%8F%E6%98%8E)
   *
   * @default "#RRGGBBAA"
   */
  backgroundColorContent?: string

  /**
   * 设置为 `true` 则页面整体不能上下滚动。
   * 只在页面配置中有效style
   *
   * @default false
   */
  disableScroll?: boolean

  // 以下属性未记录在文档中

  disableSwipeBack?: boolean

  pageJSONLight?: Page

  pageJSONDark?: Page

  'mini-ios'?: Page

  'mini-android'?: Page

  'mini-weixin'?: Page

  [key: string]: any
}

export enum EStyleIsolation {
  /**
   * 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）
   */
  isolated = 'isolated',

  /**
   * 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
   */
  apply_shared = 'apply-shared',

  /**
   * 表示页面 wxss 样式将影响到自定义组件，
   * 自定义组件 wxss 中指定的样式也会影响页面和其他设置了
   *  `apply-shared` 或 `shared` 的自定义组件。（这个选项在插件中不可用。）
   */
  shared = 'shared',

  /**
   * 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件
   */
  page_isolated = 'page-isolated',

  /**
   * 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，
   * 但设为 `shared` 的自定义组件会影响到页面；
   */
  page_apply_shared = 'page-apply-shared',

  /**
   * 表示在这个页面禁用 app.wxss ，同时，
   * 页面 wxss 样式会影响到其他设为 `apply-shared` 或 `shared` 的自定义组件，
   * 也会受到设为 `shared` 的自定义组件的影响。
   */
  page_shared = 'page-shared',
}

export interface IComponentGenerics {
  default: string

  [key: string]: any
}
export type Schema = Page
