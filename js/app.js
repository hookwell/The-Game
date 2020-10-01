/**alerta de bienvenida */
Swal.fire({
  title: 'Wellcome!!! -Remember to add "to" before all the verbs:) Good Luck!!!',
  snowClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})

/*alert('Remember to add "to" first the verb:) GOOD LUCK!!!')*/

const Word = function(english, spanish) {
  if (typeof english === 'string' && typeof 'spanish' === 'string') {
    this.english = english;
    this.spanish = spanish;
    this.done = false;
  } else {
    throw new Error('There is some mistake...try again')
  }
} 

const createInputs = (word) => {
  if (word instanceof Word && typeof word.english === 'string' && typeof word.spanish === 'string') {
    const currentInput = document.createElement('input');
    currentInput.classList.add('input-text');
    [["type", "text"], ["data-correct", word.english], ["placeholder", `${word.spanish}`]].forEach(([attr, value]) => {
      currentInput.setAttribute(attr, value);
  });
  currentInput.addEventListener('input', () => {
    const inValid = !(currentInput.value.toLowerCase().match(new RegExp(word.english.toLowerCase())));
    currentInput.classList.toggle('isThrow', inValid);
    currentInput.classList.toggle('inValid', !inValid);
    word.done = !inValid;
  })
  document.body.appendChild(currentInput);
  }
}

console.log('run')
const dictionary = [];
dictionary.push(new Word('to run', 'correr'));
dictionary.push(new Word('to drink', 'beber'));
dictionary.push(new Word('to teach', 'ensenar'));
dictionary.push(new Word('to learn', 'aprender'));
dictionary.push(new Word('to study', 'estudiar'));
dictionary.push(new Word('to write', 'escribir'));
dictionary.push(new Word('to eat', 'comer'));
dictionary.push(new Word('to read', 'leer'));
dictionary.push(new Word('to work', 'trabajar'));
dictionary.push(new Word('to speak', 'hablar'));
dictionary.forEach(createInputs);

