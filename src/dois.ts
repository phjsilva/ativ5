type resultadoSenha = {
    pontuacao: number,
    classificacao: string
}


function analisarSenha(senha:string){
    let pontuacao = 0

    if(senha.length >= 8 ) {
        pontuacao++
    }if(/[a-z]/.test(senha)) {
        pontuacao++
    }if(/[A-Z]/.test(senha)) {
        pontuacao++
    }if(/[0-9]/.test(senha)) {
        pontuacao++
    } if (/[^\w\s]/.test(senha)) {
        pontuacao++;
    }

    let classificacao = ""

    if (pontuacao <= 2){
       classificacao = "Fraca"
    }else if (pontuacao <= 3){
        classificacao = "média"
    }else if (pontuacao <= 4){
        classificacao = "Forte"
    }else {
        classificacao = "Muito forte"
    }

    return  {
        pontuacao,
        classificacao
    }
}

const senhas: string[] = [
    "abc",
    "abcdefghi",
    "Abcdefghi",
    "Abc12345",
    "Abc123@#"
    ];
    for (const senha of senhas) {
    const resultado = analisarSenha(senha);
    console.log(`Senha: ${senha}`);
    console.log(`Pontuação: ${resultado.pontuacao}`);
    console.log(`Classificação: ${resultado.classificacao}`);
    console.log("-----------------------------");
    }
export{}