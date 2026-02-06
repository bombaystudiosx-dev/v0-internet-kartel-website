import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { realpathSync } from "node:fs"

const __filename = realpathSync(fileURLToPath(import.meta.url))
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: resolve(__dirname),
  },
}

export default nextConfig
