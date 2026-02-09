let a = 1;
let b = 2;
let c = 3;

let delta = b * b - 4 * a * c;

if (a ===0){
    console.log("A é zero");
}
if (a===0){
    console.log("Não é uma equação de segundo grau");
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0){
        console.log("Não existem raízes reais");
    } else if (delta === 0){
        let x = -b / (2 * a);
        console.log("Existe uma raiz real: " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Existem duas raízes reais: " + x1 + " e " + x2);
    }
}
