function Welcome() {
    console.log("Hello, World! Dentro da função"); 
}

Welcome()

function WelcommeWithParams (name) {
    console.log(`Olá, ${name}`);
}

WelcommeWithParams("Chocolate")

function NomeCompleto (fullName) {
    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length-1]
    
    console.log (`Olá, ${firstName} ${lastName}`)
}

NomeCompleto("Cleo Hortiz de Savio")