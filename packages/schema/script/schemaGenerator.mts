#!/usr/bin/env tsx

import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'glob'
import type { Config } from 'ts-json-schema-generator'
import * as tsj from 'ts-json-schema-generator'
import ora from 'ora'

function resolve(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

const cwd = resolve('..')

const outputRootDir = resolve('../schemas/')
const inputRootDir = resolve('../src/types/')

const types = ['wx']

async function main(type: string) {
  const outputDir = path.resolve(outputRootDir, type)
  const inputDir = path.resolve(inputRootDir, type)

  await fs.rm(outputDir, { force: true, recursive: true })
  await fs.mkdir(outputDir, { recursive: true })

  const config: Config = {
    type: 'Schema',
    encodeRefs: true,
    additionalProperties: true,
    minify: true,
    extraTags: ['markdownDescription'],
  }

  // 获取类型定义文件
  const typeFiles = await glob(path.resolve(inputDir, '*.ts'), {
    cwd,
  })

  // loading 条
  const spinner = ora(`build ${type} Schema`).start()

  // 对每一个类型文件生成一份 Schema
  for (const filePath of typeFiles) {
    const { name: fileNameWithoutExtension } = path.parse(filePath)
    const outputFile = `${fileNameWithoutExtension}.schema.json`
    const outputPath = path.resolve(outputDir, outputFile)

    spinner.text = `building ${outputFile}`

    // 创建生成器
    const generator = tsj.createGenerator({ ...config, path: filePath })
    // 指定生成的 type
    const schema = generator.createSchema(config.type)
    // 生成 json 字符串
    const schemaString = JSON.stringify(schema, null, 2)

    await fs.writeFile(outputPath, schemaString)
  }
  spinner.stop()
}

process.on('unhandledRejection', (reason: Error, promise) => {
  console.error('Unhandled Reject at:', promise, 'reason:', reason)
  console.error(reason.stack)
  process.exit(1)
})

for (const type of types)
  await main(type)
