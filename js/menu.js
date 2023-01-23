const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation')
const container = document.querySelector(".tittle");


menuIcon.addEventListener('click', () =>{
navigation.classList.toggle("spread");
})


window.addEventListener('click', e =>{

  if (
    navigation.classList.contains("spread") &&
    e.target != navigation &&
    e.target != menuIcon
  ) {
    navigation.classList.toggle("spread");
  }
})


const words = ["Hola!","Mi Nombre es: ","Kevin Gabriel Rodriguez Mayo"];

let index = 0;

let characters = 0;

updateText();

function updateText() {
  characters++;
  container.innerHTML = `
   <h1>${words[index].slice(0, characters)}</h1>
  `;
  if (characters === words[index].length) {
    index++;
    characters = 0;
  }

  if (index === words.length) {
    index = 0;
  }

  setTimeout(updateText, 400);
}