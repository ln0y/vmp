import { resolve } from 'node:path'

import * as TJS from 'typescript-json-schema'

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
  required: true,
}

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
}

// optionally pass a base path
const basePath = './my-dir'

const program = TJS.getProgramFromFiles(
  [resolve('my-file.ts')],
  compilerOptions,
  basePath,
)

// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, 'MyType', settings)

// ... or a generator that lets us incrementally get more schemas

const generator = TJS.buildGenerator(program, settings)

// generator can be also reused to speed up generating the schema if usecase allows:
const schemaWithReusedGenerator = TJS.generateSchema(program, 'MyType', settings, [], generator)

// all symbols
const symbols = generator.getUserSymbols()

// Get symbols for different types from generator.
generator.getSchemaForSymbol('MyType')
generator.getSchemaForSymbol('AnotherType')


// In larger projects type names may not be unique,
// while unique names may be enabled.
const settings: TJS.PartialArgs = {
    uniqueNames: true,
};

const generator = TJS.buildGenerator(program, settings);

// A list of all types of a given name can then be retrieved.
const symbolList = generator.getSymbols("MyType");

// Choose the appropriate type, and continue with the symbol's unique name.
generator.getSchemaForSymbol(symbolList[1].name);

// Also it is possible to get a list of all symbols.
const fullSymbolList = generator.getSymbols();
