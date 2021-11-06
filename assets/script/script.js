// Efeito máquina de escrever no H1 do banner
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
setInterval(() =>  typeWriter(titulo), 10000);
const titulo = document.getElementById("text");
typeWriter(titulo);

// carrosel

class SlideStories {
    constructor(id) {
      this.slide = document.querySelector(`[data-slide="${id}"]`);
      this.active = 0;
      this.init();
    }
  
    activeSlide(index) {
      this.active = index;
      this.items.forEach((item) => item.classList.remove('active'));
      this.items[index].classList.add('active');
      this.thumbItems.forEach((item) => item.classList.remove('active'));
      this.thumbItems[index].classList.add('active');
      this.autoSlide();
    }
  
    prev() {
      if (this.active > 0) {
        this.activeSlide(this.active - 1);
      } else {
        this.activeSlide(this.items.length - 1);
      }
    }
  
    next() {
      if (this.active < this.items.length - 1) {
        this.activeSlide(this.active + 1);
      } else {
        this.activeSlide(0);
      }
    }
  
    addNavigation() {
      const nextBtn = this.slide.querySelector('.slide-next');
      const prevBtn = this.slide.querySelector('.slide-prev');
      nextBtn.addEventListener('click', this.next);
      prevBtn.addEventListener('click', this.prev);
    }
  
    addThumbItems() {
      this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
      this.thumbItems = Array.from(this.thumb.children);
    }
  
    autoSlide() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.next, 5000);
    }
  
    init() {
      this.next = this.next.bind(this);
      this.prev = this.prev.bind(this);
      this.items = this.slide.querySelectorAll('.slide-items > *');
      this.thumb = this.slide.querySelector('.slide-thumb');
      this.addThumbItems();
      this.activeSlide(0);
      this.addNavigation();
    }
  }
  
  new SlideStories('slide');


// validador de formulários
let formValidator = {
  handleSubmit:(event)=>{
    event.preventDefault(); //previne que envie
    let send = true;

    let inputs = form.querySelectorAll('input');

    for(let i=0; i<inputs.length; i++){
      let input = inputs[i];
      let check = formValidator.checkInput(input);
      if(check !== true) {
        send = false;
        console.log(check);
      }
    }
    
    if(send) {
      form.submit();
    }
  }, 
  checkInput:(input) => {
    let rules = input.getAttribute('data-rules');

    if(rules !== null) {
      rules = rules.split('|');
      for(let k in rules) {
        let rDetails = rules[k].split('=');
        switch(rDetails[0]) {
          case 'required':
            if(input.value == '') {
              return 'Este campo é obrigatório!'
            }
          break;
          case 'min':

          break;
        }
      }
    }

    return true;
  }
};


let form = document.querySelector('.validator');
form.addEventListener('submit', formValidator.handleSubmit);

