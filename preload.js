/* eslint-disable @typescript-eslint/no-require-imports */
// preload.js
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
	// Define methods to be used in the renderer process
});
