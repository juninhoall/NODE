var arquivo = require('fs');

arquivo.readFile('../arquivo/nome.txt', function(erro, dadosArquivo){
  if (erro)throw erro;
  console.log(dadosArquivo.toString());

});

arquivo.writeFile('../arquivo/novo.txt', 'Criando Arquivos v', { flags:'a'}, function(erro){
if (erro) throw erro;
console.log('arquivo criado');
} );
