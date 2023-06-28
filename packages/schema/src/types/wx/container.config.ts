import type { AdditionalProperties } from '../utils'

/**
 * 微信云托管初始化服务配置
 *
 * 微信官方 schema
 *
 * <https://dldir1.qq.com/WechatWebDev/editor-extension/wx-json/container.config.schema.json>
 */
export type Schema = AdditionalProperties<ContainerConfig>

export interface ContainerConfig {
  /**
   * 版本备注
  */
  remark?: string

  /**
   * Dockerfile 相对文件夹的路径
   *
   * @default "Dockerfile"
   */
  dockerfilePath?: string

  /**
   * 构建目录
   */
  buildDir?: string

  /**
   * 云端运行的最少实例数量
   *
   * @default 0
   */
  minNum?: number

  /**
   * 云端运行的最大实例数量
   *
   * @default 50
   */
  maxNum?: number

  /**
   * 实例 CPU 规格（单位：核）
   *
   * @default 0.5
   */
  cpu?: number

  /**
   * 实例内存规格（单位：GB）
   *
   * @default 1
   */
  mem?: number

  /**
   * 自动扩缩容依据，默认 cpu
   *
   * @default "cpu"
   */
  policyType?: string

  /**
   * 自动扩缩容临界点
   *
   * @default 60
   */
  policyThreshold?: number

  /**
   * 环境变量
   */
  envParams?: Record<string, any>

  /**
   * 容器内部监听的端口号
   */
  containerPort?: number

  /**
   * 启动检测延迟，如 2s 则会在启动后 2s 检测判断容器实例是否正常启动
   *
   * @default 2
   */
  initialDelaySeconds?: number

  /**
   * 是否将新部署的版本的流量设为 100%，如果填 1 则是，填 0 则设为 0%，仅支持 0 或 1
   *
   * @default 0
   */
  flowRatio?: 0 | 1
}
