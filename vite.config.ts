import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置别名 @ 为 src 的别名 引入
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
