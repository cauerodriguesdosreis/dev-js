// ===== 1. Array de nomes =====
let nomes = ["Ana", "Carlos", "João"];

console.log("Array inicial:", nomes);

// push (adiciona no final)
nomes.push("Marina");

// pop (remove do final)
nomes.pop();

// unshift (adiciona no início)
nomes.unshift("Pedro");

// shift (remove do início)
nomes.shift();

console.log("Array final:", nomes);


// ===== 2. Array de números =====
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// filter → apenas pares
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// map → ao quadrado
let quadrados = numeros.map(num => num * num);
console.log("Quadrados:", quadrados);

// reduce → soma total
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Soma:", soma);

// sort → ordenar
let ordenado = [...numeros].sort((a, b) => a - b);
console.log("Ordenado:", ordenado);

// reverse → inverter
let invertido = [...ordenado].reverse();
console.log("Invertido:", invertido);

// ===== Mostrar no navegador =====
let resultado = document.getElementById("resultado");

resultado.innerHTML = `
  <p><strong>Array de nomes:</strong> ${nomes.join(", ")}</p>
  <p><strong>Números:</strong> ${numeros.join(", ")}</p>
  <p><strong>Pares:</strong> ${pares.join(", ")}</p>
  <p><strong>Quadrados:</strong> ${quadrados.join(", ")}</p>
  <p><strong>Soma:</strong> ${soma}</p>
  <p><strong>Ordenado:</strong> ${ordenado.join(", ")}</p>
  <p><strong>Invertido:</strong> ${invertido.join(", ")}</p>
`;