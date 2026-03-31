// ─────────────────────────────────────────
// 1. OBJETO PESSOA
// ─────────────────────────────────────────
const pessoa = {
  nome: "Ana Silva",
  idade: 28,
  profissao: "Desenvolvedora",

  apresentar() {
    return `Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  },
};

// ─────────────────────────────────────────
// 2. OBJETO CARRO
// ─────────────────────────────────────────
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,

  ligar() {
    const msg = `${this.marca} ${this.modelo} (${this.ano}) — Carro ligado! 🚗`;
    console.log(msg);
    return msg;
  },
};

// ─────────────────────────────────────────
// 3. OBJETO LOJA
// ─────────────────────────────────────────
const loja = {
  nome: "TechStore",
  produtos: {
    notebook: 4500.0,
    smartphone: 2800.0,
    fone: 350.0,
    teclado: 220.0,
    mouse: 130.0,
  },

  // Usando for...in
  listarComForIn() {
    console.log(`\n📦 Produtos da ${this.nome} (for...in):`);
    for (const produto in this.produtos) {
      console.log(
        `  • ${produto}: R$ ${this.produtos[produto].toFixed(2)}`
      );
    }
  },

  // Usando Object.entries
  listarComEntries() {
    console.log(`\n📦 Produtos da ${this.nome} (Object.entries):`);
    Object.entries(this.produtos).forEach(([produto, preco]) => {
      console.log(`  • ${produto}: R$ ${preco.toFixed(2)}`);
    });
  },

  // Retorna HTML formatado para o navegador
  listarHTML() {
    return Object.entries(this.produtos)
      .map(
        ([produto, preco]) =>
          `<li><strong>${produto}</strong>: R$ ${preco.toFixed(2)}</li>`
      )
      .join("");
  },
};

// ─────────────────────────────────────────
// EXECUÇÃO NO TERMINAL (Node.js)
// ─────────────────────────────────────────
console.log("════════════════════════════════════");
console.log("         TESTANDO OS OBJETOS        ");
console.log("════════════════════════════════════");

console.log("\n👤 PESSOA:");
console.log(" ", pessoa.apresentar());

console.log("\n🚗 CARRO:");
carro.ligar();

console.log("\n🏪 LOJA:");
loja.listarComForIn();
loja.listarComEntries();

console.log("\n════════════════════════════════════");

// ─────────────────────────────────────────
// EXPORTA PARA O NAVEGADOR (index.html)
// ─────────────────────────────────────────
if (typeof window !== "undefined") {
  window.pessoa = pessoa;
  window.carro = carro;
  window.loja = loja;
}