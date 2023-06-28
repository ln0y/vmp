/**
 * 小程序及页面微信索引配置
 *
 * 小程序根目录下的 `sitemap.json` 文件用于配置小程序及其页面是否允许被微信索引，
 * 或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。
 * 当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。
 *
 * 注：没有 sitemap.json 则默认所有页面都能被索引
 *
 * 微信文档：
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html>
 *
 * 微信官方 schema：
 *
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/sitemap.schema.json>
 */
export type Schema = Sitemap

export interface Sitemap {

  /**
   * sitemap 描述
   *
   * @default "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html"
   */
  desc?: string

  /**
   * 索引规则列表
   */
  rules: IRules[]

  [key: string]: any
}

export interface IRules {
  /**
   * 命中该规则的页面是否能被索引
   *
   * 未显式指明 `"disallow"` 的都默认被索引
   *
   * @default "allow"
   */
  action?: EAction | string

  /**
   * 配置页面的路径
   *
   * `*` 表示所有页面，不能作为通配符使用
   */
  page: EPage | string

  /**
   * 当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表（不含参数值）
   *
   * @default []
   */
  params?: string[]

  /**
   * 当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式
   *
   * 取值说明：
   * - `"exact"` 当小程序页面的参数列表等于 params 时，规则命中
   * - `"exclusive"` 当小程序页面的参数列表包含 params 时，规则命中
   * - `"inclusive"` 当小程序页面的参数列表与 params 交集为空时，规则命中
   * - `"partial"` 当小程序页面的参数列表与 params 交集不为空时，规则命中
   */
  matching?: EMatching | string

  /**
   * 优先级，值越大则规则越早被匹配，否则默认从上到下匹配
   */
  priority?: number

  [key: string]: any
}

export enum EPage {
  '*' = '*',
}

export enum EAction {
  /**
   * 允许被索引
   */
  allow = 'allow',

  /**
   * 不允许被索引
   */
  disallow = 'disallow',
}

export enum EMatching {
  /**
   * 当小程序页面的参数列表等于 params 时，规则命中
   */
  exact = 'exact',

  /**
   * 当小程序页面的参数列表包含 params 时，规则命中
   */
  exclusive = 'exclusive',

  /**
   * 当小程序页面的参数列表与 params 交集为空时，规则命中
   */
  inclusive = 'inclusive',

  /**
   * 当小程序页面的参数列表与 params 交集不为空时，规则命中
   */
  partial = 'partial',
}
