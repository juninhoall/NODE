// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// Criando a Factory, o auth será enjetado no controler
.factory('Auth', function($firebaseAuth){

  var pontoFinalDadosUsuario = "https://authioniccatolica.firebaseio.com/users"; // criara uma tabela usuarios
  var referenciaUsuario = new Firebase(pontoFinalDadosUsuario);//pegar referencia para os usuarios
  return $firebaseAuth(referenciaUsuario);//factory criada e funcionando

} )
// Criando o Controlador

.controller('appCtrl', function(/*Adicionando dependencias*/ $scope, Auth /*Factory*/ ){
  Auth.$onAuth(function(authData){ // quando autenticar

    if(authData === null){
     console.log("Usuario nao autenticado!");
    }else{
      console.log("Autenticado");
      console.log(authData);
    }
    $scope.authData = authData;
  }) // fim authenticar
  $scope.login = function(metodoAutentica){

    Auth.$authWithOAuthRedirect(metodoAutentica).then(function(authData){}
    ).catch(function(error){
      if(error.code === 'TRANSPORT_UNAVAILABLE'){
      Auth.$authWithOAuthPopup(metodoAutentica).then(function(authData){});
    }else{
      console.log("Nome do Erro:" + error);
    }
    }) /*Sera capturado o erro e feito outro tipo de autencicacao*/
  };
})
