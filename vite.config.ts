import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
import removeConsole from 'vite-plugin-remove-console';
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";

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
       vitePluginBundleObfuscator({
        excludes: [],
        enable: true,
        log: true,
        autoExcludeNodeModules: false,
        threadPool: false,
        options: {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 1,
          deadCodeInjection: false,
          debugProtection: false,
          debugProtectionInterval: 0,
          disableConsoleOutput: false,
          identifierNamesGenerator: "hexadecimal",
          log: false,
          numbersToExpressions: false,
          renameGlobals: false,
          selfDefending: true,
          simplify: true,
          splitStrings: false,
          stringArray: false,
          stringArrayCallsTransform: false,
          stringArrayCallsTransformThreshold: 0.5,
          stringArrayEncoding: [],
          stringArrayIndexShift: true,
          stringArrayRotate: true,
          stringArrayShuffle: true,
          stringArrayWrappersCount: 1,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersParametersMaxCount: 2,
          stringArrayWrappersType: "variable",
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false,
        },
      }),

    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 这里设置@为src目录别名
        },
    }
})
