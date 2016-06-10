var arquivo = require('fs');

arquivo.readFile('../arquivo/nome.txt', function(erro, dadosArquivo){
  if (erro)throw erro;
  console.log(dadosArquivo.toString());

});

arquivo.exists('../arquivo/nome.txt', function(result){
  if (!result) {
    arquivo.writeFile('../arquivo/novo.txt', 'Criando Arquivos v', function(erro){
    if (erro) throw erro;
    console.log('arquivo criado');
    } );

  }else{
    console.log('já existe um arquivo com esse nome.  ');
  }
});
