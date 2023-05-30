let resultado = document.getElementById('resultado');
document.getElementById('calcula').addEventListener('click', function() {
  resultado.style.display = 'none';

  let pesoLatinha = document.getElementById('latinha').value;
  let pesoPet = document.getElementById('pet').value;
  let pesoAnel = document.getElementById('anel').value;
  let pesoCobre = document.getElementById('cobre').value;

  if(pesoLatinha === '' || pesoLatinha < 0 || pesoPet === '' || pesoPet < 0 ||
     pesoAnel === '' || pesoAnel < 0 || pesoCobre === '' || pesoCobre < 0) {
    alert('Os valores de peso são inválidos. Certifique-se de inserir valores maiores ou iguais a zero.');
  } else {
    resultado.innerHTML = '<p style="font-weight: 600;">Resultado:</p>';
    resultado.style.display = 'flex';

    let valorLatinha = pesoLatinha * 6.48;
    let valorPet = pesoPet * 1.69;
    let valorAnel = pesoAnel * 2.71;
    let valorCobre = pesoCobre * 38.00;

    const items = [
      { name: "latinha", weight: pesoLatinha, profit: valorLatinha }, 
      { name: "pet", weight: pesoPet, profit: valorPet }, 
      { name: "anel", weight: pesoAnel, profit: valorAnel }, 
      { name: "cobre", weight: pesoCobre, profit: valorCobre }, 
    ];
    const capacity = 50;
    
    const totalProfit = fractionalKnapsack(items, capacity);
    console.log("Total Profit:", totalProfit);
    resultado.innerHTML += `Lucro total: R$${totalProfit.toFixed(2)}`
  }

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
      resultado.innerHTML += `
        <p>Item: ${currentItem.name}, Quantidade: ${currentItem.weight}kg, Capacidade restante da moto: ${remainingCapacity}kg</p>
      `
    } else {
      const fraction = remainingCapacity / currentItem.weight;
      let weightConsidered = fraction * currentItem.weight;
      console.log(`Item: ${currentItem.name}, Quantidade: ${weightConsidered}`)
      totalProfit += fraction * currentItem.profit;
      remainingCapacity = 0;
      resultado.innerHTML += `
        <p>Item: ${currentItem.name}, Quantidade: ${weightConsidered}kg, Capacidade restante da moto: ${remainingCapacity}kg</p>
      `;
    }
  }

  return totalProfit;
}
