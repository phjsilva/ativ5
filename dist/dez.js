"use strict";
function compactarTexto(texto) {
    if (texto.length === 0) {
        return "";
    }
    let resultado = "";
    let caractereAtual = texto[0];
    let contador = 1;
    for (let i = 1; i < texto.length; i++) {
        if (texto[i] === caractereAtual) {
            contador += 1;
        }
        else {
            resultado += caractereAtual + contador;
            caractereAtual = texto[i];
            contador = 1;
        }
    }
    resultado += caractereAtual + contador;
    return resultado;
}
const textosParaCompactar = [
    "aaabbcdddd",
    "aaaaa",
    "abc",
    "",
    "xxxyyyzzzz",
    "AABBCCCC"
];
for (const t of textosParaCompactar) {
    const compactado = compactarTexto(t);
    console.log(`Texto original: "${t}"`);
    console.log(`Texto compactado: "${compactado}"`);
    console.log("-----------------------------");
}
