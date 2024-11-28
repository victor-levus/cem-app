/* eslint-disable @typescript-eslint/no-require-imports */
// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const mainWindow = new BrowserWindow({
		minWidth: 1200,
		minHeight: 800,
		backgroundColor: "#2e2c29",
		title: "Call Taker App",
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	// Load the React app
	mainWindow.loadURL("http://localhost:3000");
	// Uncomment the line below to open the DevTools.
	// mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
