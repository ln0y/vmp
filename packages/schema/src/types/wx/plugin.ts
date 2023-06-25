import type { AdditionalProperties } from '../utils'

/**
 * 插件配置文件
 *
 * 向使用者小程序开放的所有自定义组件、页面和 js 接口都必须在插件配置文件 plugin.json 列出
 *
 * 微信文档：
 *
 * <https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/development.html#%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6>
 *
 * 微信官方 schema：
 *
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/plugin.schema.json>
 */
export interface Plugin {
  /**
   * 导出的所有 js 接口
   */
  main?: string

  /**
   * 开放自定义组件
   */
  publicComponents?: Record<string, string>

  /**
   * 使用自定义组件
   */
  usingComponents?: Record<string, string>

  /**
   * 开放页面
   */
  pages?: Record<string, string>

  /**
   * 使用云开发
   */
  cloud?: boolean
}

export type Schema = AdditionalProperties<Plugin>
