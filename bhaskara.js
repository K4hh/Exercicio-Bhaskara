// --------------------------------------------
// Programa para resolver equação do 2º grau
// Fórmula de Bhaskara
// --------------------------------------------

// Criando as variáveis da equação ax² + bx + c = 0
let a = 1;
let b = -3;
let c = 2;

// Primeiro: verificar se "a" é igual a zero
// Se for zero, não é equação do segundo grau
if (a === 0) {
    console.log("Não é uma equação do segundo grau.");
} 
else {

    // Calculando o valor de delta (Δ)
    // Fórmula: delta = b² - 4ac
    // Como não existe ² no JavaScript, usamos b * b
    let delta = b * b - 4 * a * c;

    // Agora vamos analisar o valor de delta

    // Caso 1: delta menor que zero
    // Significa que não existem raízes reais
    if (delta < 0) {
        console.log("Não existem raízes reais.");
    } 
    
    // Caso 2: delta igual a zero
    // Significa que existe apenas uma raiz real
    else if (delta === 0) {

        // Fórmula simplificada quando delta é 0
        let x = -b / (2 * a);

        console.log("Existe apenas uma raiz real:");
        console.log("x = " + x);
    } 
    
    // Caso 3: delta maior que zero
    // Significa que existem duas raízes reais
    else {

        // Fórmula de Bhaskara completa
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log("Existem duas raízes reais:");
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);
    }
}
