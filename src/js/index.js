document.querySelectorAll('.slider').forEach((it) => {
    it.outerHTML = `<label><span class="slider-value">Delay: ${it.value}</span>` + it.outerHTML + '</label>';
});

document.querySelectorAll('.slider').forEach((it) => {
    it.addEventListener('input', () => {
        it.parentElement.querySelector('.slider-value').innerHTML = `Delay: ${it.value}`;
    });
});

document.querySelectorAll('.item').forEach((it)=> {
    it.addEventListener('click', ()=> {
        let payloadId = it.getAttribute("data-payload")

        document.querySelectorAll('.payload-container').forEach((container)=> {
            container.classList.add('payload-container-hidden')
        })
        document.querySelectorAll('.item-text').forEach((text)=> {
            text.classList.remove('current')
        })

        let payload = document.querySelector("#" + payloadId)
        payload.classList.remove('payload-container-hidden')
        it.querySelector('.item-text').classList.add('current')
    })
})