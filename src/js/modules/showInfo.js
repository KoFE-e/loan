export default class ShowInfo {
    constructor(triggerSelector) {
        this.btns = document.querySelectorAll(triggerSelector);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const closedInfo = btn.closest('.module__info-show').nextElementSibling;
                if (closedInfo.style.display !== 'block') {
                    closedInfo.classList.remove('fadeOutUp');
                    closedInfo.classList.add('animated', 'fadeInDown');
                    closedInfo.style.display = "block";
                } else {
                    closedInfo.classList.remove('fadeInDown');
                    closedInfo.classList.add('fadeOutUp');
                    setTimeout(() => closedInfo.style.display = "none", 500);
                }
            });
        });
    }
    
}