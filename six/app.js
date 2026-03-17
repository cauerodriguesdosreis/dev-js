// 1. Função que recebe nome e idade
function frasePersonalizada(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

// 2. Função que retorna o dobro
function dobro(numero) {
  return numero * 2;
}

// 3. Função que soma dois números
function soma(a, b) {
  return a + b;
}

// 4. Função que verifica se o número é par ou ímpar
function verificaNumero(numero) {
  if (numero % 2 === 0) {
    return "Número par";
  } else {
    return "Número ímpar";
  }
}

// Testes no terminal (Node.js)
if (typeof require !== "undefined" && require.main === module) {
  console.log(frasePersonalizada("Cauê", 19));
  console.log(dobro(10));
  console.log(soma(5, 7));
  console.log(verificaNumero(8));
}
