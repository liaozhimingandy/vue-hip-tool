import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
import removeConsole from 'vite-plugin-remove-console';
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator';
import {visualizer} from 'rollup-plugin-visualizer';
import {version} from './package.json';


// https://vitejs.dev/config/
export default defineConfig({
    base: '/vue-hip-tool/', // 这里保持和你你的 GitHub 仓库名一致
    define: {
        __APP_VERSION__: JSON.stringify(version),
    },
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
        vitePluginBundleObfuscator({
            excludes: [],
            enable: true,
            log: true,
            autoExcludeNodeModules: false,
            threadPool: false,
            options: {
                compact: true,
                controlFlowFlattening: false, // 控制流扁平化容易导致问题，建议关闭
                controlFlowFlatteningThreshold: 1,
                deadCodeInjection: false,
                debugProtection: false,
                debugProtectionInterval: 0,
                disableConsoleOutput: false,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                selfDefending: true,
                simplify: true,
                splitStrings: false,
                stringArray: true, // 开启后，会将字符串数组转换为常量数组，然后通过常量数组来访问字符串，从而减少字符串的长度，提高代码的执行效率，但是会增加代码的体积，建议开启
                stringArrayCallsTransform: false,
                stringArrayCallsTransformThreshold: 0.5,
                stringArrayEncoding: [],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.75,
                unicodeEscapeSequence: false,
            }
        }),
        visualizer({
            open: true, // 打包后自动打开浏览器中的分析报告
            filename: 'bundle-visualizer.html', // 输出的分析报告文件名
            gzipSize: true,  // 显示 gzip 压缩后的体积
            brotliSize: true // 显示 brotli 压缩后的体积
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 这里设置@为src目录别名
        },
    },
})
