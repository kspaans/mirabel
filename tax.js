let rate = 0
let public_value = 100_000_000
let revenue = 80_000_000
let budget = 119_339_000
let home_value = 300_000

const f = new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD' })

function qcd(amount) {
  return f.format(amount)
}

function updateParagraphText() {
  let labelElement = document.getElementById('label');

  rate = (budget - revenue) / public_value

  labelElement.innerText = `Tax Rate: ${rate}% ; Tax Owing: ${qcd(home_value * rate)}`;
}

function sayHello(){
  let inputElement = document.getElementById('name-input')
  let name = inputElement.value;
  try {
    let new_budget = Number(name)
    if (isNaN(new_budget)) {
      alert('Error: New Budget should be number!')
      budget = revenue
    } else if (new_budget < revenue) {
      alert('Error: New Budget should be at least 80 000 000 $!')
      budget = revenue
    } else {
      budget = new_budget
    }
  } catch {
    budget = 0
  }

  let outputElement = document.getElementById('output')
  let budgetElement = document.getElementById('budget2023')
  outputElement.innerText = 'New Budget:  ' + qcd(budget) + '!'
  budgetElement.innerText = qcd(budget)
}
