import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/business-strategy-project/",
	plugins: [react()],
	build: {
		outDir: "build",
	},
});
