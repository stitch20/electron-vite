import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";
import { quasar } from "@quasar/vite-plugin";

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()]
	},
	preload: {
		plugins: [externalizeDepsPlugin()]
	},
	renderer: {
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src")
			}
		},
		plugins: [vue(), quasar({ sassVariables: "src/renderer/src/assets/css/quasar-variables.sass" })]
	}
});
