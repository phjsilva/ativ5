function cifrarMensagem(mensagem: string, deslocamento: number): string {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let resultado = "";

    for (const caractere of mensagem.toLowerCase()) {

        const posicao = alfabeto.indexOf(caractere);

        if (posicao !== -1) {
            const novaPosicao = (posicao + deslocamento) % 26;
            resultado += alfabeto[novaPosicao];
        } else {
            resultado += caractere;
        }
    }

    return resultado;
}

function decifrarMensagem(mensagem: string, deslocamento: number): string {
    return cifrarMensagem(mensagem, 26 - deslocamento);
}

const mensagemOriginal = "ataque ao castelo";
const deslocamento = 3;

const mensagemCifrada = cifrarMensagem(mensagemOriginal, deslocamento);
const mensagemDecifrada = decifrarMensagem(mensagemCifrada, deslocamento);

console.log(`Mensagem original: ${mensagemOriginal}`);
console.log(`Mensagem cifrada: ${mensagemCifrada}`);
console.log(`Mensagem decifrada: ${mensagemDecifrada}`);

console.log("-----------------------------");

const outraMensagem = "typescript 123!";
const outraCifrada = cifrarMensagem(outraMensagem, deslocamento);
const outraDecifrada = decifrarMensagem(outraCifrada, deslocamento);

console.log(`Mensagem original: ${outraMensagem}`);
console.log(`Mensagem cifrada: ${outraCifrada}`);
console.log(`Mensagem decifrada: ${outraDecifrada}`);
