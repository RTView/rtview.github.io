//Prezzo modelli
const modelPrices = {
    Sedia00: 100,
    Sedia01: 110,
    Giacca00: 150,
    Lampada00: 50,
    Beba00: 100,
    TavoloDiamante00: 150
};

 //Prezzo Materiali
const materialPrices = {
    first: {
        Olivia: 10,
        Sabbia: 20,
        Blu: 30,
        Carminio: 40,
        NoceCanaletto: 20,
        OpaBlack: 30,
        Bianco: 40,
        Orange: 10,
        White: 15,
        Black: 20,
        Seduta: 30,
        Schienale: 20
    },
    second: {
        Frassino: 10,
        NoceCanaletto: 20,
        OpaBlack: 30,
        Bianco: 40,
        Seduta: 30,
        Schienale: 20
    },
    third: {
        Salvia: 20,
        Blu: 30,
        Salmone: 40,
        Marrone: 20
    }
};

//Variabili per gestire le selezioni
let selectedModel = '';
let firstMaterial = '';
let secondMaterial = '';
let thirdMaterial = '';
let totalPrice = '0.00';


//Selezione del Modello
function selectModel(model) {
    if(selectedModel == model) {
        selectedModel = '';
    } else {
        selectedModel = model;
    }
    firstMaterial = '';
    secondMaterial = '';
    thirdMaterial = '';
    updatePrice();
}

//Selezione del Materiale
function selectMaterial(type, material) {
    if(type  === 'first') {
        firstMaterial = material;
    } else if (type === 'second') {
        secondMaterial = material;
    } else if (type === 'third') {
        thirdMaterial = material;
    }
    updatePrice();
}

//Aggiornamento del prezzo
function updatePrice() {
    totalPrice = modelPrices[selectedModel] || 0;

  if (firstMaterial) {
    totalPrice += materialPrices.first[firstMaterial] || 0;
  }

  if (secondMaterial) {
    totalPrice += materialPrices.second[secondMaterial] || 0;
  }

  if (thirdMaterial) {
    totalPrice += materialPrices.third[thirdMaterial] || 0;
  }

  document.getElementById('price-value').textContent = totalPrice.toFixed(2);      
}