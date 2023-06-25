import type { App, ITabBar } from './app'
import type { Page } from './page_component'

/**
 * 第三方平台开发配置
 *
 * 为了方便第三方平台的开发者引入 `extAppid` 的开发调试工作，需要引入 `ext.json` 的概念。
 *
 * `ext.json` 是一个配置文件，放置在小程序项目的根目录下。
 *
 * 微信文档：
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html>
 *
 * 微信官方 schema：
 *
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/ext.schema.json>
 */
export interface Ext extends Omit<Partial<App>, 'tabBar'> {
  /**
   * 配置 ext.json 是否生效
   *
   * 用于规定当前的 `ext.json` 文件是否生效，开发者可以通过修改这个字段来开启和关闭 `extAppid` 的结合开发。
   */
  extEnable: boolean

  /**
   * 配置 extAppid
   *
   * `extAppid` 是授权调试的 AppID ，例如开发者在此处填写的是 `wxf9c4501a76931b33`
   * 那么在 `extEnable` 为真的情况下，后续的开发逻辑都会基于 `wxf9c4501a76931b33` 来运行。
   */
  extAppid: string

  /**
   * 开发自定义的数据字段
   *
   * `ext` 字段是开发自定义的数据字段，在小程序中可以通过
   *  [`wx.getExtConfigSync`](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html) 或者 [`wx.getExtConfig`](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html) 获取到这些配置信息。
   */
  ext?: Record<string, any>

  /**
   * 单独设置每个页面的 json
   *
   * `extPages` 是一个对象，对象中的每个 `key` 应该是该小程序模板 `app.json` 中定义的页面，
   * 每个 `key` 对应的 `value` 是 page.json 中所规定的各项配置。当开发者设置这个配置以后，
   * 小程序框架会对应的修改相对应的 `page` 的配置信息。
   */
  extPages?: Record<string, Page>

  /**
   * 是否直接提交到待审核列表
   *
   * 用于规定当前的上传操作是否是直接上传到 `extAppid` 的审核列表中。
   *
   * 当 `directCommit` 为 `true` 真时，开发者在工具中的上传操作，
   * 会直接上传到对应的 extAppid 的审核列表，
   * 第三方平台只需要调用 `https://api.weixin.qq.com/wxa/submit_audit?access_token=TOKEN` 即可以提交审核。
   * 更多请参考 [第三方平台文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN)
   *
   * 当 `directCommit` 为 `false` 或者没有定义时，
   * 开发者在工具中的上传操作，会直接上传到对应的草稿箱中。
   */
  directCommit?: boolean

  // todo required "list" property
  /**
   * 底部 `tab` 栏的表现
   *
   * 如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），
   * 可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
   */
  tabBar?: Partial<ITabBar>

  [key: string]: any
}

export type Schema = Ext
