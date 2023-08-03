// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css',
        'assets/main.less',
        'element-plus/theme-chalk/dark/css-vars.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    ssr: true,
    modules: [
        'nuxt-og-image',
        "nuxt-gtag",
        '@element-plus/nuxt',
        '@nuxt-alt/proxy',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `usePinia()`
                    'defineStore',
                    // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    imports: {
        dirs: ['./stores'],
    },
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tools.aoe.top',
            siteName: '小莫的工具箱',
            siteDescription: '小莫的工具箱, 随心制作一些便利有用的工具~',
            language: 'zh', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    gtag: {
        id: 'G-L04H04RSS7'
    },
    proxy: {
        proxies: {
            '/api_ip': {
                target: 'https://api.ip.sb/geoip',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api_ip/, '')
            },
        }
    },
})
