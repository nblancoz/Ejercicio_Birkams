let variableSinValor; // 1

let booleano1 = false; // 2

let booleano2 = true; // 2

const PI = 3.14; // 3

const TAU = PI*2; // 4

let booleanoAnd = booleano1 && booleano2; // 5

let booleanoNot = !booleano1; // 6 

let booleanoMix0 = booleanoAnd && !booleano1; // 7

let incrementarDesp = 2; // 8

let resultadoDesp = incrementarDesp++; // 8

let incrementarAntes = 2; // 9

let resultadoAntes = ++incrementarAntes; // 9

let contarHasta10_2 = 0; // 10

for (; contarHasta10_2 !== 10; ) {
    contarHasta10_2++;
}

let postI = 0; // 11

let postJ = 0; // 11

for (let i = 0; i < 11; i++) {
    postI += postJ++;
    
}

let sumaPares = 0; // 12

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

let variableValorNumerico = 11; // 13

const MiNombre = "Nicolas"; // 14

const MiNumeroFav = 11; // 15

let booleanoOr = booleano1 || booleano2; // 16

let booleanoMix1 = (booleano1 && TAU/2) || (variableValorNumerico >= MiNumeroFav); // 17

let seisNoEsNueve = 6 !== 9; //18

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU); // 19

let valorSuma = (MiNumeroFav + variableValorNumerico); // 20

let valorResta = (MiNumeroFav - variableValorNumerico); // 21

let valorMultiplicacion = (MiNumeroFav * variableValorNumerico); // 22

let valorDivision = (MiNumeroFav / 3); // 23

let contarHasta10 = 0; // 24

while (contarHasta10 !== 10) {
    contarHasta10++
}

let preI = 0; // 25

let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI += ++preJ;
}

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;   
    }
}