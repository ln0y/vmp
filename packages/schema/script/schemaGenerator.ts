#!/usr/bin/env tsx

import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'glob'
import type { Config } from 'ts-json-schema-generator'
import {
  SchemaGenerator,
  createFormatter,
  createParser,
  createProgram,
} from 'ts-json-schema-generator'
import ora from 'ora'
import { MarkdownDescriptionFormatter } from './markdownDescriptionFormatter'

function resolve(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

const cwd = resolve('..')

const outputRootDir = resolve('../schemas/')
const inputRootDir = resolve('../src/types/')

// todo 可以选择不同的类型小程序
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

    const program = createProgram({ ...config, path: filePath })

    const parser = createParser(program, config)

    // 添加自定义格式化程序。
    const formatter = createFormatter(config, (fmt, circularReferenceTypeFormatter) => {
      fmt.addTypeFormatter(new MarkdownDescriptionFormatter(circularReferenceTypeFormatter))
    })

    const generator = new SchemaGenerator(program, parser, formatter, config)

    // 指定生成的 type
    const schema = generator.createSchema(config.type)

    // todo 添加 minify arg
    // 生成 json 字符串
    const schemaString = JSON.stringify(schema)

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
  main(type)
