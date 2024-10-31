import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vue-hip/', // 这里保持和你你的 GitHub 仓库名一致
    server: {
        host: process.env.VITE_HOST || '0.0.0.0',
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                AntDesignVueResolver()
            ],
        }),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
        removeConsole({
            // 默认在生产环境移除console
            exclude: ['error', 'warn'], // 可选：保留 error 和 warn 信息
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 这里设置@为src目录别名
        },
    }
})
