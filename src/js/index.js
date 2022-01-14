document.querySelectorAll('.slider').forEach((it) => {
    it.outerHTML = `<label><span class="slider-value">Delay: ${it.value}</span>` + it.outerHTML + '</label>';
});

document.querySelectorAll('.slider').forEach((it) => {
    it.addEventListener('input', () => {
        it.parentElement.querySelector('.slider-value').innerHTML = `Delay: ${it.value}`;
    });
});

document.querySelectorAll('.sidebar-item').forEach((it) => {
    it.addEventListener('click', () => {
        let payloadId = it.getAttribute("data-payload")

        document.querySelectorAll('.payload-container').forEach((container) => {
            container.classList.add('payload-container-hidden')
        })
        document.querySelectorAll('.item-text').forEach((text) => {
            text.classList.remove('current')
        })

        let payload = document.querySelector("#" + payloadId)
        payload.classList.remove('payload-container-hidden')
        it.querySelector('.item-text').classList.add('current')
    })
})

document.querySelectorAll('.file-selector').forEach((it) => {
    it.addEventListener('click', () => {
        let fileInput = document.querySelector("#" + it.getAttribute('data-file'))
        fileInput.click()
    })
})

function get_file() {

}

let inputLoadAccounts = document.querySelector('#input-load-accounts')
inputLoadAccounts.addEventListener('change', () => {
    let reader = new FileReader()
    reader.onload = () => {
        let accountList = document.querySelector('#accounts-list')
        accountList.innerHTML = ''
        reader.result.split('\n').forEach((line) => {
            let newId = (Math.random() + 1).toString(36).substring(10);
            let split = line.split(':')
            if (split.length == 2) {
                newItem  =`
                <li class="item">
                    <div class="item-container">
                        <input type="checkbox" id="${newId}">
                        <label class="frozen" for="${newId}">${split[0]}</label>
                        <div class="info">
                            <p>
                                Link:
                                <span>twitter.com</span>
                            </p>
                        </div>
                    </div>
                </li>
                `
                accountList.innerHTML += newItem
            }
        })
    }
    reader.readAsText(inputLoadAccounts.files[0])
})