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

    formValidator.clearErrors();
    
    for(let i=0; i<inputs.length; i++){ // verificando os valores
      let input = inputs[i];
      let check = formValidator.checkInput(input);
      if(check !== true) {
        send = false;
        formValidator.showError(input, check);
      }
    }
    
    if(send) {
      let msg = alert("Cadastrado!"); //mensagem de alerta
      form.submit();
    }
  }, 
  checkInput:(input) => { // verificando as regras
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
          case 'email':
            //validação de email
            if(input.value != '') {
              let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!regex.test(input.value.toLowerCase())) {
                    return 'E-mail digitado não é válido!';
                }
            }
        }
      }
      
    }
    
    return true;
    
    
  }, 
  showError:(input, error) => {
    input.style.borderColor = '#FF0000';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input);
    /* 
      Caso queira o erro abaixo do input:
      input.parentElement.insertBefore(errorElement, input.ElementSibling);
    */
  },
  clearErrors:() => {
    let inputs = form.querySelectorAll('input'); // remove as bordas 
    for(let i=0; i<inputs.length; i++) {
      inputs[i].style = '';
    }
    
    
    let errorElements = document.querySelectorAll('.error'); // remove o texto de erro
    for(let i=0; i<errorElements.length; i++) {
      errorElements[i].remove();
    }
  }
};


let form = document.querySelector('.validator');
form.addEventListener('submit', formValidator.handleSubmit);


// scroll suave
function subirtela() {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
}
function decidirbotaoscroll() {
  if(window.scrollY === 0) {
      // ocultar o botão
      document.querySelector('.scrollbutton').style.display = 'none';
  } else {
      // mostrar o botão
      document.querySelector('.scrollbutton').style.display = 'block';
  }
}

setInterval(decidirbotaoscroll, 1000);
