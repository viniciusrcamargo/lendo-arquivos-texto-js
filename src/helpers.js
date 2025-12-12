function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

//Código omitido

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = '';
  listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `No parágrafo ${indice + 1} temos as palavras duplicadas: ${duplicadas}\n`;
    })
}