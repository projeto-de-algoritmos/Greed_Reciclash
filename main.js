let latinha, pet, anel, cobre;
let valorLatinha = 6.48, valorPet = 1.69,
valorAnel = 2.71, valorCobre = 38.00;
let vp = [];
let capacidade = 50;

document.getElementById('calcula').addEventListener('click', function() {

  let inputLatinha = document.getElementById('latinha').value;
  let inputPet = document.getElementById('pet').value;
  let inputAnel = document.getElementById('anel').value;
  let inputCobre = document.getElementById('cobre').value;
  
  let pesoLatinha = parseFloat(inputLatinha);
  let pesoPet = parseFloat(inputPet);
  let pesoAnel = parseFloat(inputAnel);
  let pesoCobre = parseFloat(inputCobre);

  let pesoTotal = [];
  pesoTotal.push(pesoLatinha + pesoPet + pesoAnel + pesoCobre);
  
  console.log("pesoTotal " + pesoTotal)

  vp[0] = valorLatinha / pesoLatinha;
  vp[1] = valorPet / pesoPet;
  vp[2] = valorAnel / pesoAnel;
  vp[3] = valorCobre / pesoCobre;

  let tupla = (latinha, pesoLatinha, vp[0], pet, pesoPet, vp[1],
               anel, pesoAnel, vp[2], cobre, pesoCobre, vp[3])

  console.log(tupla);

  vp.sort();
  vp.reverse();
  
  
  function knapsack(capacidade, pesoTotal) {
        
        if(capacidade === 0 || pesoTotal === 0){
          console.log("Carrinho vazio")
          return 0
        }

        while(capacidade != 0){
          
        }
        
        return knapsack(capacidade, pesoInicial - 1, vp, pesoTotal)
  }

  let resultados = knapsack(capacidade, vp.length - 1, vp, pesoTotal);

  console.log({capacidade, pesoTotal}, vp, pesoTotal);
  console.log(resultados)
})







