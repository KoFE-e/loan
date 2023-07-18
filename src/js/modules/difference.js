export default class Difference {
    constructor(container, items) {
        this.container = document.querySelector(container);
        try {
            this.items = this.container.querySelectorAll(items);
        } catch(e) {}
        this.counter = 0;
    }

    bindTriggers() {
        this.container.querySelector('.plus').addEventListener('click', () => {
            if (this.counter !== this.items.length - 2) {
                this.items[this.counter].classList.add('animated', 'fadeIn');
                this.items[this.counter].style.display = 'flex';
                this.counter++;
            } else {
                this.items[this.counter].classList.add('animated', 'fadeIn');
                this.items[this.counter].style.display = 'flex';
                this.items[this.items.length - 1].classList.add('animated', 'fadeOut');
                this.items[this.items.length - 1].remove();
            }
        });
    }

    hideItems() {
        this.items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch(e){}
    }
}