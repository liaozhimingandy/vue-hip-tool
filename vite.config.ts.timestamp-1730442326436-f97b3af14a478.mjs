// vite.config.ts
import { defineConfig } from "file:///D:/Git/vue-hip/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Git/vue-hip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/Git/vue-hip/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///D:/Git/vue-hip/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/Git/vue-hip/node_modules/unplugin-auto-import/dist/vite.js";
import path from "path";
import removeConsole from "file:///D:/Git/vue-hip/node_modules/vite-plugin-remove-console/dist/index.mjs";
import vitePluginBundleObfuscator from "file:///D:/Git/vue-hip/node_modules/vite-plugin-bundle-obfuscator/dist/index.mjs";
import { visualizer } from "file:///D:/Git/vue-hip/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "D:\\Git\\vue-hip";
var vite_config_default = defineConfig({
  base: "/vue-hip/",
  // 这里保持和你你的 GitHub 仓库名一致
  server: {
    host: process.env.VITE_HOST || "0.0.0.0"
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        AntDesignVueResolver()
      ]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
          // css in js
        })
      ]
    }),
    removeConsole({
      // 默认在生产环境移除console
      exclude: ["error", "warn"]
      // 可选：保留 error 和 warn 信息
    }),
    vitePluginBundleObfuscator({
      excludes: [],
      enable: true,
      log: true,
      autoExcludeNodeModules: false,
      threadPool: false,
      options: {
        compact: true,
        controlFlowFlattening: false,
        // 控制流扁平化容易导致问题，建议关闭
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
        stringArray: true,
        // 开启后，会将字符串数组转换为常量数组，然后通过常量数组来访问字符串，从而减少字符串的长度，提高代码的执行效率，但是会增加代码的体积，建议开启
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
        unicodeEscapeSequence: false
      }
    }),
    visualizer({
      open: true,
      // 打包后自动打开浏览器中的分析报告
      filename: "bundle-visualizer.html",
      // 输出的分析报告文件名
      gzipSize: true,
      // 显示 gzip 压缩后的体积
      brotliSize: true
      // 显示 brotli 压缩后的体积
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
      // 这里设置@为src目录别名
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRcXFxcdnVlLWhpcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0XFxcXHZ1ZS1oaXBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdC92dWUtaGlwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQge0FudERlc2lnblZ1ZVJlc29sdmVyfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gJ3ZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlJztcclxuaW1wb3J0IHZpdGVQbHVnaW5CdW5kbGVPYmZ1c2NhdG9yIGZyb20gJ3ZpdGUtcGx1Z2luLWJ1bmRsZS1vYmZ1c2NhdG9yJztcclxuaW1wb3J0IHt2aXN1YWxpemVyfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGJhc2U6ICcvdnVlLWhpcC8nLCAvLyBcdThGRDlcdTkxQ0NcdTRGRERcdTYzMDFcdTU0OENcdTRGNjBcdTRGNjBcdTc2ODQgR2l0SHViIFx1NEVEM1x1NUU5M1x1NTQwRFx1NEUwMFx1ODFGNFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuVklURV9IT1NUIHx8ICcwLjAuMC4wJyxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdnVlKCksXHJcbiAgICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgICAgICAgICAgQW50RGVzaWduVnVlUmVzb2x2ZXIoKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAgICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRTdHlsZTogZmFsc2UsIC8vIGNzcyBpbiBqc1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcmVtb3ZlQ29uc29sZSh7XHJcbiAgICAgICAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NTcyOFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NzlGQlx1OTY2NGNvbnNvbGVcclxuICAgICAgICAgICAgZXhjbHVkZTogWydlcnJvcicsICd3YXJuJ10sIC8vIFx1NTNFRlx1OTAwOVx1RkYxQVx1NEZERFx1NzU1OSBlcnJvciBcdTU0OEMgd2FybiBcdTRGRTFcdTYwNkZcclxuICAgICAgICB9KSxcclxuICAgICAgICB2aXRlUGx1Z2luQnVuZGxlT2JmdXNjYXRvcih7XHJcbiAgICAgICAgICAgIGV4Y2x1ZGVzOiBbXSxcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2c6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9FeGNsdWRlTm9kZU1vZHVsZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aHJlYWRQb29sOiBmYWxzZSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY29tcGFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xGbG93RmxhdHRlbmluZzogZmFsc2UsIC8vIFx1NjNBN1x1NTIzNlx1NkQ0MVx1NjI0MVx1NUU3M1x1NTMxNlx1NUJCOVx1NjYxM1x1NUJGQ1x1ODFGNFx1OTVFRVx1OTg5OFx1RkYwQ1x1NUVGQVx1OEJBRVx1NTE3M1x1OTVFRFxyXG4gICAgICAgICAgICAgICAgY29udHJvbEZsb3dGbGF0dGVuaW5nVGhyZXNob2xkOiAxLFxyXG4gICAgICAgICAgICAgICAgZGVhZENvZGVJbmplY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVidWdQcm90ZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRlYnVnUHJvdGVjdGlvbkludGVydmFsOiAwLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUNvbnNvbGVPdXRwdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllck5hbWVzR2VuZXJhdG9yOiAnaGV4YWRlY2ltYWwnLFxyXG4gICAgICAgICAgICAgICAgbG9nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlcnNUb0V4cHJlc3Npb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbmFtZUdsb2JhbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2VsZkRlZmVuZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNpbXBsaWZ5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BsaXRTdHJpbmdzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5OiB0cnVlLCAvLyBcdTVGMDBcdTU0MkZcdTU0MEVcdUZGMENcdTRGMUFcdTVDMDZcdTVCNTdcdTdCMjZcdTRFMzJcdTY1NzBcdTdFQzRcdThGNkNcdTYzNjJcdTRFM0FcdTVFMzhcdTkxQ0ZcdTY1NzBcdTdFQzRcdUZGMENcdTcxMzZcdTU0MEVcdTkwMUFcdThGQzdcdTVFMzhcdTkxQ0ZcdTY1NzBcdTdFQzRcdTY3NjVcdThCQkZcdTk1RUVcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENcdTRFQ0VcdTgwMENcdTUxQ0ZcdTVDMTFcdTVCNTdcdTdCMjZcdTRFMzJcdTc2ODRcdTk1N0ZcdTVFQTZcdUZGMENcdTYzRDBcdTlBRDhcdTRFRTNcdTc4MDFcdTc2ODRcdTYyNjdcdTg4NENcdTY1NDhcdTczODdcdUZGMENcdTRGNDZcdTY2MkZcdTRGMUFcdTU4OUVcdTUyQTBcdTRFRTNcdTc4MDFcdTc2ODRcdTRGNTNcdTc5RUZcdUZGMENcdTVFRkFcdThCQUVcdTVGMDBcdTU0MkZcclxuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5Q2FsbHNUcmFuc2Zvcm06IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nQXJyYXlDYWxsc1RyYW5zZm9ybVRocmVzaG9sZDogMC41LFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nQXJyYXlFbmNvZGluZzogW10sXHJcbiAgICAgICAgICAgICAgICBzdHJpbmdBcnJheUluZGV4U2hpZnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdHJpbmdBcnJheVJvdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5U2h1ZmZsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5V3JhcHBlcnNDb3VudDogMSxcclxuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5V3JhcHBlcnNDaGFpbmVkQ2FsbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdHJpbmdBcnJheVdyYXBwZXJzUGFyYW1ldGVyc01heENvdW50OiAyLFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nQXJyYXlXcmFwcGVyc1R5cGU6ICd2YXJpYWJsZScsXHJcbiAgICAgICAgICAgICAgICBzdHJpbmdBcnJheVRocmVzaG9sZDogMC43NSxcclxuICAgICAgICAgICAgICAgIHVuaWNvZGVFc2NhcGVTZXF1ZW5jZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICB2aXN1YWxpemVyKHtcclxuICAgICAgICAgICAgb3BlbjogdHJ1ZSwgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XHU0RTJEXHU3Njg0XHU1MjA2XHU2NzkwXHU2MkE1XHU1NDRBXHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLXZpc3VhbGl6ZXIuaHRtbCcsIC8vIFx1OEY5M1x1NTFGQVx1NzY4NFx1NTIwNlx1Njc5MFx1NjJBNVx1NTQ0QVx1NjU4N1x1NEVGNlx1NTQwRFxyXG4gICAgICAgICAgICBnemlwU2l6ZTogdHJ1ZSwgIC8vIFx1NjYzRVx1NzkzQSBnemlwIFx1NTM4Qlx1N0YyOVx1NTQwRVx1NzY4NFx1NEY1M1x1NzlFRlxyXG4gICAgICAgICAgICBicm90bGlTaXplOiB0cnVlIC8vIFx1NjYzRVx1NzkzQSBicm90bGkgXHU1MzhCXHU3RjI5XHU1NDBFXHU3Njg0XHU0RjUzXHU3OUVGXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksIC8vIFx1OEZEOVx1OTFDQ1x1OEJCRVx1N0Y2RUBcdTRFM0FzcmNcdTc2RUVcdTVGNTVcdTUyMkJcdTU0MERcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrTyxTQUFRLG9CQUFtQjtBQUM3UCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUSw0QkFBMkI7QUFDbkMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0NBQWdDO0FBQ3ZDLFNBQVEsa0JBQWlCO0FBUnpCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ0osTUFBTSxRQUFRLElBQUksYUFBYTtBQUFBLEVBQ25DO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDUCxxQkFBcUI7QUFBQSxNQUN6QjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1AscUJBQXFCO0FBQUEsVUFDakIsYUFBYTtBQUFBO0FBQUEsUUFDakIsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQTtBQUFBLE1BRVYsU0FBUyxDQUFDLFNBQVMsTUFBTTtBQUFBO0FBQUEsSUFDN0IsQ0FBQztBQUFBLElBQ0QsMkJBQTJCO0FBQUEsTUFDdkIsVUFBVSxDQUFDO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCx3QkFBd0I7QUFBQSxNQUN4QixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDTCxTQUFTO0FBQUEsUUFDVCx1QkFBdUI7QUFBQTtBQUFBLFFBQ3ZCLGdDQUFnQztBQUFBLFFBQ2hDLG1CQUFtQjtBQUFBLFFBQ25CLGlCQUFpQjtBQUFBLFFBQ2pCLHlCQUF5QjtBQUFBLFFBQ3pCLHNCQUFzQjtBQUFBLFFBQ3RCLDBCQUEwQjtBQUFBLFFBQzFCLEtBQUs7QUFBQSxRQUNMLHNCQUFzQjtBQUFBLFFBQ3RCLGVBQWU7QUFBQSxRQUNmLGVBQWU7QUFBQSxRQUNmLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQTtBQUFBLFFBQ2IsMkJBQTJCO0FBQUEsUUFDM0Isb0NBQW9DO0FBQUEsUUFDcEMscUJBQXFCLENBQUM7QUFBQSxRQUN0Qix1QkFBdUI7QUFBQSxRQUN2QixtQkFBbUI7QUFBQSxRQUNuQixvQkFBb0I7QUFBQSxRQUNwQiwwQkFBMEI7QUFBQSxRQUMxQixpQ0FBaUM7QUFBQSxRQUNqQyx1Q0FBdUM7QUFBQSxRQUN2Qyx5QkFBeUI7QUFBQSxRQUN6QixzQkFBc0I7QUFBQSxRQUN0Qix1QkFBdUI7QUFBQSxNQUMzQjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQSxNQUNWLFVBQVU7QUFBQTtBQUFBLE1BQ1YsWUFBWTtBQUFBO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQTtBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
