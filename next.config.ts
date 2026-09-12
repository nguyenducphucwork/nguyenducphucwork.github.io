import type { NextConfig } from "next";

const exportForPages = process.env.PORTFOLIO_STATIC_EXPORT === "true";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  ...(exportForPages ? { output: "export", trailingSlash: true } : {}),
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
