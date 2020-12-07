const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow,
  windowSize = { width: 5760, height: 2160 };
function createWindow() {
  mainWindow = new BrowserWindow({
    ...windowSize,
    minimizable: false,
    movable: false, //是否可以动窗口
    frame: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true, // 是否集成 Nodejs
      webSecurity: false
    }
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:8000/");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./dist/renderer/index.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
