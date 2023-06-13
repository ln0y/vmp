import { promises as fsp } from "node:fs";

export async function readPackageJSON(
  id?: string,
  options: ResolveOptions & ReadOptions = {}
): Promise<PackageJson> {
  const resolvedPath = await resolvePackageJSON(id, options);
  const cache =
    options.cache && typeof options.cache !== "boolean"
      ? options.cache
      : FileCache;
  if (options.cache && cache.has(resolvedPath)) {
    return cache.get(resolvedPath)!;
  }
  const blob = await fsp.readFile(resolvedPath, "utf8");
  const parsed = JSON.parse(blob) as PackageJson;
  cache.set(resolvedPath, parsed);
  return parsed;
}
