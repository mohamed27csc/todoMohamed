const form = document.querySelector('#task-form');
const ajt_bouton = document.querySelector('#bouton');
const input = document.querySelector('#mytache');
const list = document.querySelector('#mylist');
console.log(form, ajt_bouton, list);

// queryselector = sert a selectionner
// preventDefault =  arreter le comportement par defaut apres l'evenement
// EventLister = lis ce qu'il y a dans...

ajt_bouton.addEventListener('click', function (event){
  event.preventDefault();
  console.log('Button waz clicked !');

const recup = input.value;
console.log(recup);

const element = document.createElement("li");

element.innerText = recup;

list.appendChild(element);
input.value ='';
});






