
app.controller('usuariosController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {

    $scope.initAllUsuarios=function(){

       

        $http({
                method: 'GET',
                url: "php/allUsuarios.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {

                }
            }).then(function successCallback(response) {
        
                 $scope.allusuarios = response.data; 
                 console.log($scope.allusuarios); 
 
            }, function errorCallback(response) {

                swal("Error!", "Ocurrio un error!", "error");
                            

             });
    
        setTimeout(function(){
                $('#datatableuser').DataTable({
                    "language": {
                        "url": "http://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                    }
                });
            }, 1000);
            
       

      
    
    }

    $scope.modificarU=function(){

        console.log('modificarU');

        $http({
            method: 'GET',
            url: "php/modificarUsuarios.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nick:$scope.nick,
                nombres:$scope.nombres,
                apellidos:$scope.apellidos,
                password:$scope.contrasena,
                numPruebas:$scope.pruebas,
                celular:$scope.celular,
                email:$scope.email
       
            }
        }).then(function successCallback(response) {
 
                console.log(response.data);
                swal({
                    title: "Exito:",
                    text: "El usuario se modifico correctamente!",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "ok!",
                    cancelButtonText: "No, cancelar!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm){
                    if (isConfirm) {
                           window.location ='./principal.html';
                    } else {
    
                    }
                });
               
        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");
                        

         });
    
    }

    $scope.modificarUsuario=function(usuario){
        window.localStorage["usuario"]= JSON.stringify(usuario);
        $scope.navegacion ("/modificarUsuario");
        console.log("modificaUsuario");

    }
    $scope.initModUsuarios=function(){
        $scope.datosUsuario = JSON.parse(window.localStorage.getItem('usuario'));
        console.log($scope.datosUsuario);
        $scope.nick = $scope.datosUsuario.NICK;
        $scope.nombres = $scope.datosUsuario.NOMBRES;
         $scope.apellidos = $scope.datosUsuario.APELLIDOS;
        $scope.contrasena = $scope.datosUsuario.PASWORD;
        $scope.pruebas = parseInt($scope.datosUsuario.NUM_PRUEBAS);
        $scope.celular = $scope.datosUsuario.CELULAR;
        $scope.email = $scope.datosUsuario.EMAIL;
    }

    $scope.initUsuarios=function(){
               $scope.nick = ''
                $scope.nombres = '';
                $scope.apellidos = '';
                $scope.contrasena = '';
                $scope.pruebas = 1;
                $scope.celular = '';
                $scope.email = '';
    }

    $scope.registrarUsuarios=function(){
        

        $.ajax({
            // la URL para la petición
            url : "php/registrarUsuarios.php",
        
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data:{ 
                nick:$scope.nick,
                nombres:$scope.nombres,
                apellidos:$scope.apellidos,
                password:$scope.contrasena,
                numPruebas:$scope.pruebas,
                celular:$scope.celular,
                email:$scope.email,
            },
        
            // especifica si será una petición POST o GET
            type : 'GET',
        
            // el tipo de información que se espera de respuesta
            dataType : 'json',
        
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success : function(result) {
                //si existe algun resultado
                console.log(result);
                console.log(true);
                console.log('true');
                if(result == true)
                {
                    swal({
                        title: "Exito:",
                        text: "El usuario se ingreso correctamente!",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "ok!",
                        cancelButtonText: "No, cancelar!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm){
                        if (isConfirm) {
                            window.location ='./principal.html';
                            
                        } else {
        
                        }
                    });
                    
                }else
                {
                    swal("Error!", "Error no se ingreso correctamente!", "error");
                }
                
            },
        
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error : function(xhr, status) {
                console.log(xhr);
                console.log(status);

                
            },
        });

    }

$scope.registrarU=function(){
 
console.log('aqui dentro');
            $.ajax({
                // la URL para la petición
                url : "php/buscarUsuario.php",
            
                // la información a enviar
                // (también es posible utilizar una cadena de datos)
                data:{ 
                    nick:$scope.nick,
                },
            
                // especifica si será una petición POST o GET
                type : 'GET',
            
                // el tipo de información que se espera de respuesta
                dataType : 'json',
            
                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success : function(result) {
                    //si existe algun resultado
                    console.log(result);
                   if (result.length == 1)
                   {
                    swal("Error!", "Ya existe el usuario, habilitelo!", "error");
                   }else{
                    $scope.registrarUsuarios();
                   }
                    
                },
            
                // código a ejecutar si la petición falla;
                // son pasados como argumentos a la función
                // el objeto de la petición en crudo y código de estatus de la petición
                error : function(xhr, status) {
                    
                    
                },
            });

     }


}]);