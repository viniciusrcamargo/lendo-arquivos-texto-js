const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
  // verificaPalavrasDuplicadas(texto);
  quebraemParagrafos(texto);
})

function quebraemParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) =>{
      return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
    
}
//criar um array com palavras

function limpaPalavras(palavra){
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {}
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; 
    })
    return resultado;
}
