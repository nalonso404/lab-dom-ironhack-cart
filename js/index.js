
function calculatePrice(){
  let totalPrice=0;
  let pricesArray=[...document.getElementsByClassName('precio')];
  let productsQuantityArray =[...document.getElementsByClassName('cantidad')];

  for(let i=0; i<pricesArray.length; i++){
    totalPrice= parseFloat(productsQuantityArray[i].value)* parseFloat(pricesArray[i].innerText);
  }
  console.log(totalPrice)
  return totalPrice;
}

let priceButton=document.getElementById('price-button').addEventListener("click", calculatePrice);
console.log(priceButton);

function deleteItem(event){
event.target.parentElement.remove()
}

//no se como ponerlo dentro de la funcion, ni comprobar si funciona.
let itemProduct=document.getElementsByClassName('precio-del-producto')[0].innerText;

function getPriceByProduct(itemNode){
}




// creo una variable que acceda por classname al input de las cantidades

let contadorButton = document.getElementsByClassName('cantidad-btn')[0];
// cuando se hace click en el input, accedo al valor del primer TagName 
contadorButton.onclick = function(){
  let input = document.getElementsByTagName('input')[0];
    return input.value;
}

//no se como ponerlo dentro de la funcion ni si funciona
function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
//seleccionar por clases los precios iterar por la funcion de calcularPrice i sumar el total
let sumaDifProducts=0;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}
/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/