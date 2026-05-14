function separarPalavras(texto:string){
    texto.replace(/\./g, "")
    const list = texto.split(" ")
    return list
}

export {}