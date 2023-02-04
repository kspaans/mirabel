let rate = 0
let public_value = 100_000_000
let revenue = 80_000_000
let budget = 0

function updateParagraphText() {
  let labelElement = document.getElementById('label');

  rate = (budget - revenue) / public_value

  labelElement.innerText = `Tax Rate: ${rate}%`;
}

function sayHello(){
  let inputElement = document.getElementById('name-input');
  let name = inputElement.value;
  try {
    let new_budget = Number(name)
    console.log(new_budget, typeof new_budget, isNaN(new_budget))
    if (isNaN(new_budget)) {
      budget = 0
    } else {
      budget = new_budget
    }
  } catch {
    budget = 0
  }
  
  let outputElement = document.getElementById('output');
  outputElement.innerText = 'New Budget:  ' + budget + '!';
}
