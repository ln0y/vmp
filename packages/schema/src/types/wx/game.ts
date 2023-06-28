import type { AdditionalProperties } from '../utils'
import type { IWorkers, PermissionObject } from './app'

/**
 * 小游戏全局配置
 *
 * 小游戏根目录下的 game.json 文件用来对小游戏进行配置。
 *
 * 微信文档：
 *
 * <https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html>
 *
 * 微信官方 schema：
 *
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/game.schema.json>
 */
export type Schema = AdditionalProperties<Game>

export interface Game {
  /**
   * 屏幕选择方向
   *
   * - `"portrait"` 竖屏。不随用户手机的旋转而旋转。
   * - `"landscape"` home 键在屏幕右侧的横屏。当用户的手机没有锁定屏幕方向时，横屏的方向会随着手机的旋转而旋转。
   * - `"landscapeLeft"` home 键在屏幕左侧的横屏
   * - `"landscapeRight"` home 键在屏幕右侧的横屏
   *
   * @default "portrait"
   */
  deviceOrientation?: EDeviceOrientation | string

  /**
   * 是否显示状态栏
   *
   * @default false
   */
  showStatusBar?: boolean

  /**
   * 网络请求的超时时间，单位：毫秒
   */
  networkTimeout?: INetworkTimeout

  /**
   * 多线程 Worker 配置项，[详细请参考](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/worker/basic.html)
   *
   * 使用 Worker 处理多线程任务时，设置 `Worker` 代码放置的目录
   */
  workers?: string | IWorkers

  /**
   * 分包结构配置
   *
   * 启用 [分包加载](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html) 时，声明项目分包结构
   *
   * 写成 `subPackages` 也支持。
   *
   * 注：微信客户端 6.6.7 ，基础库 2.1.0 及以上版本支持
   */
  subpackages?: ISubpackages[]

  /**
   * 分包结构配置
   *
   * 启用 [分包加载](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html) 时，声明项目分包结构
   *
   * 写成 `subpackages` 也支持。
   *
   * 注：微信客户端 6.6.7 ，基础库 2.1.0 及以上版本支持
   */
  subPackages?: ISubpackages[]

  /**
   * 需要跳转的小程序列表，详见 [wx.navigateToMiniProgram](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html)
   *
   * 注：基础库 2.4.0 及以上版本支持
   */
  navigateToMiniProgramAppIdList?: string[]

  /**
   * 小游戏 [接口权限](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html) 相关设置
   *
   * 注：微信客户端 7.0.0
   */
  permission?: IPermission

  /**
   * 小游戏开放数据域目录，详见 [关系链数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html)
   */
  openDataContext?: string

  /**
   * 是否开启大屏支持。如果开启，在 PC 端用户可以固定比例拖动窗口大小，
   * 也可以将窗口置为全屏；在 iPad 上则开启屏幕旋转支持
   *
   * @default false
   */
  resizable?: boolean

  /**
   * 是否禁止开放数据域接口 `wx.setUserCloudStorage` 写入托管数据，
   * 设置为 true 之后，只能通过后台接口写用户托管数据
   *
   * @default false
   */
  disableSetUserStorageFromMiniProgram?: boolean

  /**
   * [帧同步游戏服务](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/lock-step.html) 配置对象
   *
   * 注：基础库 2.8.0 及以上版本支持
   */
  lockStepOptions?: ILockStepOptions

  /**
   * 是否开启iOS高性能模式。需要在mp后台开通后才可用，详情 [高性能模式](https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance.html)
   *
   * @default false
   */
  iOSHighPerformance?: boolean

  /**
   * [游戏引擎插件](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/game-engine-plugin.html)
   */
  plugins?: Record<string, IPlugin>

  loadingImageInfo?: ILoadingImageInfo

}

export interface INetworkTimeout {
  /**
   * [wx.request](https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  request?: number

  /**
   * [wx.connectSocket](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.connectSocket.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  connectSocket?: number

  /**
   * [wx.uploadFile](https://developers.weixin.qq.com/minigame/dev/api/network/upload/wx.uploadFile.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  uploadFile?: number

  /**
   * [wx.downloadFile](https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html) 的超时时间，单位：毫秒。
   *
   * @default 60000
   */
  downloadFile?: number

  [ket: string]: any
}

export enum EDeviceOrientation {
  /**
   * 竖屏。不随用户手机的旋转而旋转。
   */
  portrait = 'portrait',

  /**
   * home 键在屏幕右侧的横屏。当用户的手机没有锁定屏幕方向时，横屏的方向会随着手机的旋转而旋转。
   */
  landscape = 'landscape',

  /**
   * home 键在屏幕左侧的横屏
   */
  landscapeLeft = 'landscapeLeft',

  /**
   * home 键在屏幕右侧的横屏
   */
  landscapeRight = 'landscapeRight',
}

export interface ISubpackages {
  /**
   * 分包根目录
   */
  root: string

  /**
   * 分包别名
   */
  name?: string

  /**
   * 分包是否是 [独立分包](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
   */
  independent?: boolean

  /**
   * 分包内引入插件
   */
  plugins?: Record<string, IPlugin>

  [key: string]: any
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

  /**
   * 引擎插件的本地文件夹路径
   */
  path?: string

  contexts?: IContexts[]

  [key: string]: any
}

export interface IContexts {
  type: EContextsType | string

  [key: string]: any
}

export enum EContextsType {
  gameContext = 'gameContext',
  isolatedContext = 'isolatedContext',
  openDataContext = 'openDataContext',
}

export interface IPermission {
  /**
   * 用户信息
   *
   * 对应接口：
   * - wx.getUserInfo
   */
  'scope.userInfo'?: PermissionObject

  /**
   * 地理位置
   *
   * 对应接口：
   * - wx.getLocation
   */
  'scope.userLocation'?: PermissionObject

  /**
   * 微信运动步数
   *
   * 对应接口：
   * - wx.getWeRunData
   */
  'scope.werun'?: PermissionObject

  /**
   * 保存到相册
   *
   * 对应接口：
   * - wx.saveImageToPhotosAlbum
   */
  'scope.writePhotosAlbum'?: PermissionObject

  /**
   * 是否授权使用你的微信朋友信息
   *
   * 对应接口：
   * - [wx.getFriendCloudStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html)
   * - [wx.getGroupCloudStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html)
   * - [wx.getGroupInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html)
   * - [wx.getPotentialFriendList](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html)
   * - [wx.getUserCloudStorageKeys](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html)
   * - [wx.getUserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/OpenDataContext-wx.getUserInfo.html)
   * - [GameServerManager.getFriendsStateData](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html)
   * - [wx.getUserInteractiveStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html)
   */
  'scope.WxFriendInteraction'?: PermissionObject

  /**
   * 游戏圈加圈、点赞、发表数据
   *
   * 对应接口：
   * - wx.getGameClubData
   */
  'scope.gameClubData'?: PermissionObject

  [key: string]: any
}

export interface ILockStepOptions {
  /**
   * 游戏帧下发周期，单位 ms
   *
   * @default 33
   */
  gameTick?: number

  /**
   * 帧同步心跳周期，单位 ms
   *
   * @default 2000
   */
  heartBeatTick?: number

  /**
   * 帧同步心跳超时时长，单位 ms
   *
   * @default 100000
   */
  offlineTimeLength?: number

  /**
   * 帧冗余策略，表示每次下发帧时总共下发的帧数量
   *
   * @default 3
   */
  UDPReliabilityStrategy?: number

  /**
   * actionList 的数据类型
   *
   * 有效值：
   * - `"String"` 字符串
   * - `"ArrayBuffer"` 二进制数据
   *
   * @default "String"
   */
  dataType?: EDataType | string

  [key: string]: any
}

export enum EDataType {
  /**
   * 字符串
   */
  String = 'String',

  /**
   * 二进制数据
   */
  ArrayBuffer = 'ArrayBuffer',
}

export interface ILoadingImageInfo {
  path: string
  progressBarColor?: string
  [key: string]: any
}
