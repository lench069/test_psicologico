
app.controller('LoginController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {


    $scope.initUsuarios=function(){
        $scope.nick = ''
         $scope.nombres = '';
         $scope.apellidos = '';
         $scope.contrasena = '';
         $scope.pruebas = 1;
         $scope.celular = '';
         $scope.email = '';
}

     $scope.login=function(){
 

        if($scope.usuario!=undefined && $scope.usuario!=''&&$scope.password!=undefined && $scope.password!='')    {
 
            $.ajax({
                // la URL para la petición
                url : "php/buscarUsuario.php",
            
                // la información a enviar
                // (también es posible utilizar una cadena de datos)
                data:{ 
                    nick:$scope.usuario,
                },
            
                // especifica si será una petición POST o GET
                type : 'GET',
            
                // el tipo de información que se espera de respuesta
                dataType : 'json',
            
                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success : function(result) {

                    if(result[0] == undefined)
                    {
                         swal({
                             title: "Mensaje al usuario:",
                             text: "El usuario no existe!",
                             type: "warning",
                             showCancelButton: false,
                             confirmButtonColor: "#DD6B55",
                             confirmButtonText: "Vuelva a intentar!",
                             cancelButtonText: "No, cancelar!",
                             closeOnConfirm: false,
                             closeOnCancel: false
                         },
                         function(isConfirm){
                             if (isConfirm) {
                                 window.location ='./index.html';
                             } else {
             
                             }
                         });
                     
                    }
                    //si existe algun resultado
                    if(result.length = 1)
                    {
                       //revisar que el usuario este activo
                      
                            //revisar que la contraseña se enceuntre correcta
                            if(result[0].PASWORD == $scope.password)
                            {
                              //ingresa a la pantalla principal
                            window.localStorage["usuarioLogin"]= JSON.stringify(result[0]);
                             window.location ='./principal.html'
                             
                             
                             
                             
                            }else{
                            swal("Error!", "Usuario o contraseña incorrecta!", "error");
                            
                            }
                             
                    }
                    
                },
            
                // código a ejecutar si la petición falla;
                // son pasados como argumentos a la función
                // el objeto de la petición en crudo y código de estatus de la petición
                error : function(xhr, status) {
                    swal({
                        title: "Mensaje al usuario:",
                        text: "El usuario no existe!",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Vuelva a intentar!",
                        cancelButtonText: "No, cancelar!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm){
                        if (isConfirm) {
                            window.location ='./index.html';
                        } else {
        
                        }
                    });
                    
                },
            });

        }else{

        }
     };

     $scope.registrarUsuarios=function(){
        
console.log('registra');
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
                numPruebas:3,
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
                            window.location ='./index.html';
                            
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

    };

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
                    swal("Error!", "Ya existe el usuario", "error");
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

     };
 
 }]);