// FOR - números de 1 a 10
let numerosDiv = document.querySelector(".numeros")
let resultado1 = ""

for (let i = 1; i <= 10; i++) {
    resultado1 += i + " "
}

numerosDiv.textContent = resultado1



// WHILE - pares de 2 a 20
let paresDiv = document.querySelector(".pares")
let numero = 2
let resultado2 = ""

while (numero <= 20) {
    resultado2 += numero + " "
    numero += 2
}

paresDiv.textContent = resultado2



// DO...WHILE - senha
let botao = document.querySelector(".senhaBtn")

botao.addEventListener("click", function () {

    let senha

    do {
        senha = prompt("Digite a senha:")
    } while (senha !== "1234")

    alert("Senha correta!")

})