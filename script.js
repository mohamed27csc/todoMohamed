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

const recup = input.value.trim();
console.log(recup);

if(recup ==='') {
  return
}

const element = document.createElement("li");
const deleteButton = document.createElement("button");
deleteButton.innerText = "supprimer";
deleteButton.type = "button";
element.innerText = recup + '';
element.appendChild(deleteButton);

 //on a cree la const deleteButton on lui a mis un text "supprimer" deleteButton et de type bouton c'est un enfant de "li"
list.appendChild(element);
input.value = '';

deleteButton.addEventListener("click", function(){
  element.remove();
});

//const element2 = document.createElement("li");
const completed = document.createElement("button");
completed.innerText = "valide";
completed.type = "button";
element.appendChild(completed);

completed.addEventListener("click", function(){
element.classList.toggle("completed");
  });
});

input.addEventListener('keydown', function (event) {
if (event.key === 'Enter'){
  event.preventDefault();
  ajt_bouton.click();
}
});
