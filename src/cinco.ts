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

const jogadores: Jogador[] = [
    {
    nome: "Luna",
    pontuacao: 8500,
    fase: 12
    },
    {
    nome: "Caio",
    pontuacao: 7300,
    fase: 10
    },
    {nome: "Maya",
    pontuacao: 9200,
    fase: 14
    },
    {
    nome: "Ravi",
    pontuacao: 6800,
    fase: 9
    },
    {
    nome: "Nina",
    pontuacao: 9200,
    fase: 13
    }
    ];
    exibirRanking(jogadores);
    const campeao = buscarCampeao(jogadores);
    if (campeao !== null) {
    console.log(`Campeão: ${campeao.nome}`);
    console.log(`Pontuação: ${campeao.pontuacao}`);
    } else {
    console.log("Não há jogadores cadastrados.");
    }