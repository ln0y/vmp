import type { AnnotatedType, Definition, TypeFormatter } from 'ts-json-schema-generator'
import { AnnotatedTypeFormatter } from 'ts-json-schema-generator'
import removeMd from 'remove-markdown'

export interface PrivateDefinition extends Definition {
  // VSCode specific
  markdownDescription?: string
}

export class MarkdownDescriptionFormatter extends AnnotatedTypeFormatter {
  public constructor(protected childTypeFormatter: TypeFormatter) {
    super(childTypeFormatter)
  }

  public getDefinition(type: AnnotatedType): PrivateDefinition {
    const def = super.getDefinition(type)
    const { description } = def

    if (description) {
      Object.assign(def, {
        description: removeMd(description),
        markdownDescription: description,
      })
    }

    return def
  }
}
