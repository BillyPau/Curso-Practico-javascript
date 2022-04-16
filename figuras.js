// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}  

function areaCuadrado(lado) {
    return lado * lado;
}  

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd();

// cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
    const Lado1 = document.getElementById("inputTrianguloLado1");
    const Lado2 = document.getElementById("inputTrianguloLado2");
    const Base = document.getElementById("inputTrianguloBase");
    const lado1 = Lado1.value;
    const lado2 = Lado2.value;
    const base = Base.value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase");
    const altura = document.getElementById("inputTrianguloAltura");
    const Base = base.value;
    const Altura = altura.value;
    const area = areaTriangulo(Altura, Base);
    alert(area);
}

// Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputCirculo");
    const value = radio.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo");
    const value = radio.value;
    const area = areaCirculo(value);
    alert(area);
}