//Prezzo modelli
const modelPrices = {
    Sedia00: 100,
    Sedia01: 110,
    Giacca00: 150,
    Lampada00: 50
};

 //Prezzo Materiali
const materialPrices = {
    first: {
        Olivia: 10,
        Sabbia: 20,
        Blu: 30,
        Carminio: 40,
        Orange: 10,
        White: 15,
        Black: 20
    },
    second: {
        Frassino: 10,
        NoceCanaletto: 20,
        OpaBlack: 30
    }
};

//Variabili per gestire le selezioni
let selectedModel = '';
let firstMaterial = '';
let secondMaterial = '';


//Selezione del Modello
function selectModel(model) {
    selectedModel = model;
    firstMaterial = '';
    secondMaterial = '';
    updatePrice();
}

//Selezione del Materiale
function selectMaterial(type, material) {
    if(type  === 'first') {
        firstMaterial = material;
    } else if (type === 'second') {
        secondMaterial = material;
    }
    updatePrice();
}

//Aggiornamento del prezzo
function updatePrice() {
    let totalPrice = modelPrices[selectedModel] || 0;

  if (firstMaterial) {
    totalPrice += materialPrices.first[firstMaterial] || 0;
  }

  if (secondMaterial) {
    totalPrice += materialPrices.second[secondMaterial] || 0;
  }

  document.getElementById('price-value').textContent = totalPrice.toFixed(2);      
}