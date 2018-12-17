const addListButton = document.querySelector(".add-list");
const createList = document.querySelector(".create-list");
const addButton = document.querySelector(".add-button");
let sourceObj = {
  lists: [{ listName: "", cards: [] }]
};
let listArr = [];

function addToBoard() {
  
}

function addListToBoard(e) {  
  let cardArr = [];
  const listName = document.querySelector(".list-name");
  
  sourceObj["lists"].push({listName: listName.value, cards: listArr});

  var listBox = document.createElement("div");
  listBox.classList.add("list-box");

  var listHeading = document.createElement("h3");
  listHeading.classList.add("list-heading");
  listHeading.textContent = listName.value;

  var addCard = document.createElement("button");
  addCard.classList.add("add-card");
  addCard.textContent = "Add a card";
  
  
  document.body.firstElementChild.appendChild(listBox);
  listBox.appendChild(listHeading);
  listBox.appendChild(addCard);

  addCard.addEventListener("click", addCardToList);
  
  var cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  var cardInput = document.createElement("input");
  cardInput.classList.add("card-input");
  cardInput.placeholder = "Add a card";


  var cardAddButton = document.createElement("button");
  cardAddButton.classList.add("card-add-button");
  cardAddButton.textContent = "ADD";

  listBox.appendChild(cardContainer);
  cardContainer.appendChild(cardInput);
  cardContainer.appendChild(cardAddButton);

  cardAddButton.addEventListener("click", addingCard);

  function addCardToList() {

    addCard.style.display = "none";
    cardContainer.style.display = "inline-block";
    
  }

  function addingCard() {

    cardArr.push(cardInput.value);
    console.log(cardArr);

    cardInput.value = "";
  }

  listName.value = "";
  createList.style.display = "none";
  addListButton.style.display = "inline-block";
}

addListButton.addEventListener("click", (e) => {  
  addListButton.style.display = "none";
  createList.style.display = "inline-block";
});

addButton.addEventListener("click", addListToBoard);