import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProd = process.env.NEXT_PUBLIC_ENV === 'production'
const basePath = isProd ? '/mdefeo.github.io' : ''

const nextConfig = {
output: 'export',
basePath,
images: {
    unoptimized: true,
},
webpack: (config) => {
    config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname),
    }
    return config
},
}

export default nextConfig

