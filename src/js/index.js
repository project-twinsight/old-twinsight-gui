const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

const minimize = document.getElementById('minimize');
const close = document.getElementById('close');
minimize.addEventListener('click', () => {
    ipc.send('minimizeApp');
});
close.addEventListener('click', () => {
    ipc.send('closeApp');
});

