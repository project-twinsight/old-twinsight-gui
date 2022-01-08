const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const ipc = ipcMain;

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1220,
    height: 700,
    title: 'Twinsight',
    titleBarStyle: 'hidden',
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('src/index.html')

  ipc.on('minimizeApp', () => {
    mainWindow.minimize();
  });

  ipc.on('closeApp', () => {
    mainWindow.close();
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
