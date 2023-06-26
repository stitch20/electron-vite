import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { getTaskList } from "./utils";

// Custom APIs for renderer
const api = {};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// TODO: 공통적인 정보들 가져오는 apiserver 구축하자
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI);
		contextBridge.exposeInMainWorld("api", api);
		contextBridge.exposeInMainWorld("test", {
			send: async (channel, data) => {
				const ret = await getTaskList();
				console.log(ret);
				ipcRenderer.send(channel, data);
			},
			receive: (channel, func) => {
				ipcRenderer.on(channel, (event, ...args) => func(...args));
			}
		});
	} catch (error) {
		console.error(error);
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI;
	// @ts-ignore (define in dts)
	window.api = api;
}
