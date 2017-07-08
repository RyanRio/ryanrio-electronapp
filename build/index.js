"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var electron_1 = require("electron");
var electron_devtools_installer_1 = require("electron-devtools-installer");
var electron_compile_1 = require("electron-compile");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
var isDevMode = process.execPath.match(/[\\/]electron/);
console.log(process.type);
if (isDevMode)
    electron_compile_1.enableLiveReload({ strategy: 'react-hmr' });
var createWindow = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Create the browser window.
                mainWindow = new electron_1.BrowserWindow({
                    width: 800,
                    height: 600,
                });
                // and load the index.html of the app.
                mainWindow.loadURL("file://" + __dirname + "/index.html");
                if (!isDevMode) return [3 /*break*/, 2];
                return [4 /*yield*/, electron_devtools_installer_1.default(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)];
            case 1:
                _a.sent();
                mainWindow.webContents.openDevTools();
                _a.label = 2;
            case 2:
                // Emitted when the window is closed.
                mainWindow.on('closed', function () {
                    // Dereference the window object, usually you would store windows
                    // in an array if your app supports multi windows, this is the time
                    // when you should delete the corresponding element.
                    mainWindow = null;
                });
                return [2 /*return*/];
        }
    });
}); };
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//# sourceMappingURL=index.js.map