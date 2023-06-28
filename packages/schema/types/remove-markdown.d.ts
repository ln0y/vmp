interface Options {
  stripListLeaders?: boolean | undefined;
  listUnicodeChar?: string | undefined;
  gfm?: boolean | undefined;
  useImgAltText?: boolean | undefined;
  abbr?: boolean | undefined;
  replaceLinksWithURL?: boolean | undefined;
  htmlTagsToSkip?: string[] | undefined;
}

declare function RemoveMarkdown(
  markdown: string,
  options?: Options | undefined
): string;

declare module "remove-markdown" {
  export = RemoveMarkdown;
}
