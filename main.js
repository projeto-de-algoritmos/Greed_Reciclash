
let latinha, pet, anel, cobre;
let valorLatinha = 6.48, valorPet = 1.69,
    valorAnel = 2.71, ValorCobre = 38.00;
let vp = [(latinha, 0.6) ];

document.getElementById('calcula').addEventListener('click', function() {

  let inputLatinha = document.getElementById('latinha').value;
  let inputPet = document.getElementById('pet').value;
  let inputAnel = document.getElementById('anel').value;
  let inputCobre = document.getElementById('cobre').value;
  
  let pesoLatinha = parseFloat(inputLatinha);
  let pesoPet = parseFloat(inputPet);
  let pesoAnel = parseFloat(inputAnel);
  let pesoCobre = parseFloat(inputCobre);

  let peso = [];
  peso.push(pesoLatinha, pesoPet, pesoAnel, pesoCobre);

  vp[0] = valorLatinha / peso[0];
  let valorProdutoLatinha = vp[0]
  vp[1] = valorPet / peso[1];
  vp[2] = valorAnel / peso[2];
  vp[3] = ValorCobre / peso[3];


  sort(vp) {
    ordernado = vp[(cobre, 3.p)]
  }

  let pi = peso[0] + peso[1] + peso[2] + peso[3];
  let pt = 50;
  
  function knapsack() {
    while (pt != 0 || pi === 0) {
        
    }     
  }

  
})







