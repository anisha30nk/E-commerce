const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 650
  });

  win.loadFile('home.html');
}

app.whenReady().then(createWindow);