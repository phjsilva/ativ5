type Estatisticas = {
    quantidadeCaracteres: number;
    quantidadePalavras: number;
    maiorPalavra: string;
    menorPalavra: string;
    quantidadeVogais: number;
    quantidadeConsoantes: number;
};

function separarPalavras(texto: string): string[] {
    const textoSemPontuacao = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?!]/g, ""); 
    return textoSemPontuacao.split(/\s+/).filter(p => p.length > 0); 
}

function contarVogais(texto: string): number {
    const vogais = "aeiouáéíóúâêîôûãõàèìòùäëïöü"; 
    let contador = 0; 
    for (const caractere of texto.toLowerCase()) { 
        if (vogais.includes(caractere)) { 
            contador += 1; 
        }
    }
    return contador; 
}

function encontrarMaiorPalavra(palavras: string[]): string {
    if (palavras.length === 0) return "";
    let maior = palavras[0]; 
    for (const palavra of palavras) { 
        if (palavra.length > maior.length) { 
            maior = palavra; 
        }
    }
    return maior; 
}

function encontrarMenorPalavra(palavras: string[]): string {
    if (palavras.length === 0) return "";
    let menor = palavras[0];
    for (const palavra of palavras) {
        if (palavra.length < menor.length) {
            menor = palavra;
        }
    }
    return menor;
}

function gerarEstatisticas(texto: string): Estatisticas {
    const palavras = separarPalavras(texto);
    const caracteresLimpos = texto.replace(/\s+/g, ""); 
    const totalVogais = contarVogais(texto);
    
   
    const apenasLetras = texto.toLowerCase().replace(/[^a-záéíóúâêîôûãõç]/g, "");
    const totalConsoantes = apenasLetras.length - contarVogais(apenasLetras);

    return {
        quantidadeCaracteres: texto.length, 
        quantidadePalavras: palavras.length, 
        maiorPalavra: encontrarMaiorPalavra(palavras), 
        menorPalavra: encontrarMenorPalavra(palavras), 
        quantidadeVogais: totalVogais, 
        quantidadeConsoantes: totalConsoantes > 0 ? totalConsoantes : 0 
    };
}


const textos: string[] = [
    "TypeScript é uma linguagem poderosa!", 
    "A lógica de programação desenvolve o raciocínio.", 
    "", 
    "Olá, mundo!" 
];

for (const texto of textos) { 
    const estatisticas = gerarEstatisticas(texto); 
    console.log(`Texto: "${texto}"`); 
    console.log(`Quantidade de caracteres: ${estatisticas.quantidadeCaracteres}`); 
    console.log(`Quantidade de palavras: ${estatisticas.quantidadePalavras}`); 
    console.log(`Maior palavra: ${estatisticas.maiorPalavra}`); 
    console.log(`Menor palavra: ${estatisticas.menorPalavra}`); 
    console.log(`Quantidade de vogais: ${estatisticas.quantidadeVogais}`); 
    console.log(`Quantidade de consoantes: ${estatisticas.quantidadeConsoantes}`); 
    console.log("-----------------------------"); 
}

export{}