let myArray = [];

function addItem() { 
if(myArray.length < 10){
  let input = document.getElementById("input").value;
  if(input){
  myArray.push(input);
  displayList();
  }
  else{
      alert("Enter a Data");
    }
}
else{
  alert("You reached the limit! \nUse Push or Unshift button to add more items ");
}
}
function push() {
  let pushInput = prompt("Enter A Car Brand: ");
  myArray.push(pushInput);
  displayList();
}
function unshift() {
  let pushInput = prompt("Enter A Car Brand: ");
  myArray.unshift(pushInput);
  displayList();
}
function removeFirst() {
  myArray.shift();
  displayList();
}

function removeLast() {
  myArray.pop();
  displayList();
}

function displayList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(myArray[i]));
    list.appendChild(item);
  }
}