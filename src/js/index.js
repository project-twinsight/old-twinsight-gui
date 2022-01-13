// const { ipcRenderer } = require('electron');
// const ipc = ipcRenderer;

// const minimize = document.getElementById('minimize');
// const close = document.getElementById('close');
// minimize.addEventListener('click', () => {
//     ipc.send('minimizeApp');
// });
// close.addEventListener('click', () => {
//     ipc.send('closeApp');
// });

document.querySelectorAll('.slider').forEach((it) => {
    it.outerHTML = `<label><span class="slider-value">Delay: ${it.value}</span>` + it.outerHTML + '</label>';
});

document.querySelectorAll('.slider').forEach((it) => {
    it.addEventListener('input', () => {
        it.parentElement.querySelector('.slider-value').innerHTML = `Delay: ${it.value}`;
    });
});