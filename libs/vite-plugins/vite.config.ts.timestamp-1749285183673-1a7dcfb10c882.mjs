// vite.config.ts
import { defineConfig } from "file:///F:/Vue/sakana-element/node_modules/.pnpm/vite@5.4.15_@types+node@20.17.28_sass@1.86.3_terser@5.39.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///F:/Vue/sakana-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_e82cfea1548f34f6ffe9c373368f251d/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\Vue\\sakana-element\\libs\\vite-plugins";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      include: ["./**/*.ts"],
      exclude: ["./vite.config.ts"]
    })
  ],
  build: {
    minify: false,
    outDir: ".dist",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "vitePlugins",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["shelljs", "lodash-es"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxWdWVcXFxcc2FrYW5hLWVsZW1lbnRcXFxcbGlic1xcXFx2aXRlLXBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFZ1ZVxcXFxzYWthbmEtZWxlbWVudFxcXFxsaWJzXFxcXHZpdGUtcGx1Z2luc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovVnVlL3Nha2FuYS1lbGVtZW50L2xpYnMvdml0ZS1wbHVnaW5zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBkdHMoe1xyXG4gICAgICBpbmNsdWRlOiBbJy4vKiovKi50cyddLFxyXG4gICAgICBleGNsdWRlOiBbJy4vdml0ZS5jb25maWcudHMnXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgICBvdXREaXI6ICcuZGlzdCcsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAndml0ZVBsdWdpbnMnLFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgZm9ybWF0czogWydlcyddLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsnc2hlbGxqcycsICdsb2Rhc2gtZXMnXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVQsU0FBUyxvQkFBb0I7QUFDOVUsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsV0FBVztBQUFBLE1BQ3JCLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxJQUM5QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUN0QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsV0FBVyxXQUFXO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
