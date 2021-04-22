var app = angular.module("myApp", ['ngStorage','ngRoute'])
var direccion = 'http://localhost';
var url = 'http://localhost/php';


app.config (function($routeProvider ,$provide){
    //ruta principal;
    $routeProvider.when("/",{templateUrl:"paginas/listaTest.html", controller:'testController'});
    //Rutas para navegacion
    $routeProvider.when("/usuarios",{templateUrl:"paginas/listaUsuarios.html", controller:'usuariosController'});
    $routeProvider.when("/reg_usuarios",{templateUrl:"paginas/registroUsuario.html", controller:'usuariosController'});
    $routeProvider.when("/test",{templateUrl:"paginas/listaTest.html", controller:'testController'});
    $routeProvider.when("/infotest",{templateUrl:"paginas/datosTest.html", controller:'testController'});
    $routeProvider.when("/testForm",{templateUrl:"paginas/test.html", controller:'testController'});
    $routeProvider.when("/resultado",{templateUrl:"paginas/resultado.html", controller:'testController'});
    $routeProvider.when("/modificarUsuario",{templateUrl:"paginas/modificarUsuario.html", controller:'usuariosController'});

    
   });


app.controller('navegacion', ['$scope', '$http', '$location','$localStorage',  
function ($scope,$http,$location,myProvider,$localStorage) {

    

    $scope.navegacion = function (url) {
        $location.path(url);

    }
    $scope.inicializarPage=function(){
        

        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'))

        console.log($scope.usuarioLogin.COD_TIPO);

        if($scope.usuarioLogin.COD_TIPO == 1 )
        {
            $scope.mostrar = false;
        }
        if($scope.usuarioLogin.COD_TIPO == 2 )
        {
            $scope.mostrar = true;
        }

      
    }

    $scope.logout=function(){

        localStorage.clear();
        window.location ='index.html';


    }
    $scope.irConfiguraciones=function(){

        $location.path('/DatosInstituto');

    }

}

]);