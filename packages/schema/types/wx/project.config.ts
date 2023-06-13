// https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html

export type compileType = 'miniprogram' | 'plugin'

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
   */
  compileType: compileType
}
