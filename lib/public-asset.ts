// configure-pages supplies the repository prefix when GitHub builds the site.
// An empty prefix also supports username.github.io, custom domains and Vercel.
export function publicAsset(path: string): string {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
  return basePath + (path.startsWith("/") ? path : "/" + path);
}
