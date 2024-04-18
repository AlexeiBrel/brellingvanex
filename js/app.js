const tab = document.querySelectorAll('.product__tabs-btn');
const panel = document.querySelectorAll('.product__tabs-panel');

tab.forEach((item, tabIndex) => {
    item.addEventListener('click', function () {
        tab.forEach(item => {
            item.classList.remove('btn__active');
        });

        this.classList.add('btn__active');

        panel.forEach((panel, panelIndex) => {
            if (panelIndex === tabIndex) {
                panel.classList.add('panel__active');
            } else {
                panel.classList.remove('panel__active');
            }
        });
    });
});
