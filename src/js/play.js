export default class Play {
  constructor(element) {
    this.element = element;
    this.fields = document.getElementsByClassName('field');
    this.hit = document.querySelector('.hit');
    this.miss = document.querySelector('.miss');
  }

  reloading() {
    this.hit.textContent = 0;
    this.miss.textContent = 0;
    window.location.reload();
  }

  inactive() {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= this.fields.length; i++) {
      const field = document.getElementById(`f${i}`);

      field.addEventListener('click', () => {
        field.style.boxShadow = `inset 5px 5px 10px rgba(0, 0, 0, .2), 
        inset -5px -5px 10px #fffb`;
        setTimeout(() => {
          field.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, .2), 
        -5px -5px 10px #fffb`;
        }, 500);
        if (field.classList.contains('goblin')) {
          this.hit.textContent = +this.hit.textContent + 1;
        } else {
          this.miss.textContent = +this.miss.textContent + 1;
        }

        if (this.hit.textContent === '10') {
          // eslint-disable-next-line no-alert
          alert('WINNER!');
          this.reloading();
        }

        if (this.miss.textContent === '5') {
          // eslint-disable-next-line no-alert
          alert('SORRY, YOU ARE LOSE!');
          this.reloading();
        }
      });
    }
  }
}
