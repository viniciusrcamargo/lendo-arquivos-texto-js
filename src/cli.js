import fs from 'fs';
import trataErros from './erros/funcoes-erros.js';
import { contaPalavras } from './index.js';
import {Command} from 'commander';

const programa = new Command();
programa.version('0.0.1').option('-t,--texto<string>', 'Caminho do texto a ser processado').option('-d,--destino<string>', 'Caminho de destino do arquivo').action((opcoes) =>{
  const {texto, destino} = opcoes;
  if(!texto ||!destino){
    console.log('É necessário informar o caminho do arquivo e o destino');
    programa.help();
    return
  } 
});

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if(erro) throw erro;
    const resultado = contaPalavras(texto);
     criaESalvaArquivo(resultado, endereco);
  }catch (erro) {
    trataErros(erro);
  }
})

// async function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//         await fs.promises.writeFile(arquivoNovo, textoPalavras);
//         console.log('arquivo criado');
//     } catch (erro) {
//         throw erro;
//     }
// }


//Código omitido

 function criaESalvaArquivo(listaPalavras, endereco) {
   const arquivoNovo = `${endereco}/resultado.txt`;
   const textoPalavras = JSON.stringify(listaPalavras);
  
   fs.promises.writeFile(arquivoNovo, textoPalavras)
     .then(() => {
       console.log('arquivo criado');
     })
     .catch((erro) => {
       throw erro
     })
     .finally(() => console.log('operação finalizada'))
 }