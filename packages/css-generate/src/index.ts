import { createUnplugin } from 'unplugin'
import path from 'node:path'

// 合并插件选项
const options = {
  root: path.resolve('src'),
  include: ['**/*.css'],
  exclude: [],
  ...customOptions,
}

export const unplugin = createUnplugin((options: UserOptions, meta) => {
  console.log(meta.framework)
  return {
    name: 'unplugin-css-generate',
    // webpack's id filter is outside of loader logic,
    // an additional hook is needed for better perf on webpack
    transformInclude(id) {
      return id.endsWith('.vue')
    },
    // just like rollup transform
    transform(code) {
      return code.replace(/<template>/, '<template><div>Injected</div>')
    },
    // more hooks coming
  }
})
