


const tab = [...document.querySelectorAll('.product__tabs-btn')];
const panel = [...document.querySelectorAll('.product__tabs-panel')];


window.addEventListener('load', () => {
    loadStart()
})

function loadStart() {
    for (let i = 0; i !== panel.length; i++)
        panel[i].classList.add(`panel__active-${i + 1}`);
}

tab.forEach((item, tabIndex) => {
    item.addEventListener('click', function () {
        tab.forEach(item => {
            item.classList.remove('btn__active');
        });

        this.classList.add('btn__active');

        panel.forEach((panel, panelIndex) => {
            if (panelIndex === tabIndex) {
                panel.classList.add(`panel__active`);
            } else {
                panel.classList.remove(`panel__active`);
            }
        });
    });
});