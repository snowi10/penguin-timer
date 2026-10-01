const { app, BrowserWindow } = require('electron');

const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 185,
        frame: false,
        transparent: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.setAlwaysOnTop(true);
    win.setPosition(1030, 570);
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});