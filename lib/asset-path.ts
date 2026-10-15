const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/danube-website" : "";

export function assetPath(path: string) {
  const normalizedPath = path.replace(/^\/danube-website/, "");
  return `${BASE_PATH}${normalizedPath}`;
}
