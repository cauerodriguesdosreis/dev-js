// Declaração de variáveis de diferentes tipos

let texto = "123";          // string
let numero = 10;            // number
let booleano = true;        // boolean
let indefinido;             // undefined
let nulo = null;            // null

// Mostrando o tipo de cada variável no console

console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("booleano:", typeof booleano);
console.log("indefinido:", typeof indefinido);
console.log("nulo:", typeof nulo); // curiosidade: typeof null retorna "object"

// ----------------------------
// Conversões de tipo
// ----------------------------

// 1. String para número
let stringParaNumero = Number(texto);
console.log("String para Número:", stringParaNumero, "-", typeof stringParaNumero);

// 2. Número para string
let numeroParaString = String(numero);
console.log("Número para String:", numeroParaString, "-", typeof numeroParaString);

// 3. Número para boolean
let numeroParaBoolean = Boolean(numero);
console.log("Número para Boolean:", numeroParaBoolean, "-", typeof numeroParaBoolean);

/*
Diferença entre == e ===

==  → Compara apenas o valor, fazendo conversão automática de tipo se necessário.
=== → Compara valor E tipo, sem fazer conversão automática.

Exemplo:
"5" == 5   → true  (ele converte a string para número)
"5" === 5  → false (tipos diferentes: string e number)
*/