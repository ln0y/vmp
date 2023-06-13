import { basename, extname } from 'node:path'
import { globSync } from 'glob'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: globSync('src/*.ts').map(file => ({
    input: file,
    name: basename(file, extname(file)),
  })),
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
