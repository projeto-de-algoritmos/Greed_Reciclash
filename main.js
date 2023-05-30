document.getElementById('calcula').addEventListener('click', function() {

  let inputLatinha = document.getElementById('latinha').value;
  let inputPet = document.getElementById('pet').value;
  let inputAnel = document.getElementById('anel').value;
  let inputCobre = document.getElementById('cobre').value;
  
  let pesoLatinha = parseFloat(inputLatinha);
  let pesoPet = parseFloat(inputPet);
  let pesoAnel = parseFloat(inputAnel);
  let pesoCobre = parseFloat(inputCobre);

  let valorLatinha = pesoLatinha * 6.48;
  let valorPet = pesoPet * 1.69;
  let valorAnel = pesoAnel * 2.71;
  let valorCobre = pesoCobre * 38.00;

  const items = [
    { weight: pesoLatinha, profit: valorLatinha }, // 10/64.8
    { weight: pesoPet, profit: valorPet }, // 20/35.8
    { weight: pesoAnel, profit: valorAnel }, // 30/81.3
    { weight: pesoCobre, profit: valorCobre }, // 40/1520  38
  ];
  const capacity = 50;
  
  const totalProfit = fractionalKnapsack(items, capacity);
  console.log("Total Profit:", totalProfit);

})

function fractionalKnapsack(items, capacity) {
  // Ordena os itens em ordem decrescente de taxa valor/peso
  items.sort((a, b) => b.profit / b.weight - a.profit / a.weight);

  let totalProfit = 0;
  let remainingCapacity = capacity;

  for (let i = 0; i < items.length; i++) {
    if (remainingCapacity <= 0) {
      break;
    }

    const currentItem = items[i];

    if (currentItem.weight <= remainingCapacity) {
      totalProfit += currentItem.profit;
      remainingCapacity -= currentItem.weight;
    } else {
      const fraction = remainingCapacity / currentItem.weight;
      totalProfit += fraction * currentItem.profit;
      remainingCapacity = 0;
    }
  }

  return totalProfit;
}
