
app.controller('LoginController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {


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


/*
            $http({
                method: 'POST',
                url: "php/buscarUsuario.php",
                headers: {
                    
                },
                data: {
                    cedula: '0604262956'
                }
            }).then(function successCallback(response) {
        
                  //si existe algun resultado
                  console.log(response);
                  if(response.data.length = 1)
                  {
                     //revisar que el usuario este activo
                     if(response.data[0].ESTADO != 1)
                     {
                      swal("Error!", "El usuario se encuentra inactivo, solicitar la activacion!", "error");                    
                    }else{
                          //revisar que la contraseña se enceuntre correcta
                          if(response.data[0].PASWORD == $scope.password)
                          {
                            //ingresa a la pantalla principal
                           window.location ='./principal.html'
                           
                           
                          }else{
                          swal("Error!", "Contraseña incorrecta!", "error");
                          
                          }
                      }

                     
                  }
 
            }, function errorCallback(response) {

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
                            

             });*/


        }else{

        }
     }


 
 $scope.listaCedulaNoValida=[];
 $scope.listaTodos=[];

     $scope.validador=function(){
 
         $http({
             method: 'POST',
             url: 'http://localhost:3002/api/getAll',
             headers: {
                 'Content-Type': 'application/json'
             },
             data: {
 
 
             }
 
 
         }).then(function successCallback(response) {
 
             $scope.listaTodos=response.data;
             var n=$scope.listaTodos.length;
             var count1=0;
             var count2=0;
             for(var i =0; i<n;i++){
 
                 var cedula = $scope.listaTodos[i].clicedula;
 
                 //Preguntamos si la cedula consta de 10 digitos
                 if(cedula.length == 10){
 
                     //Obtenemos el digito de la region que sonlos dos primeros digitos
                     var digito_region = cedula.substring(0,2);
 
                     //Pregunto si la region existe ecuador se divide en 24 regiones
                     if( digito_region >= 1 && digito_region <=24 ){
 
                         // Extraigo el ultimo digito
                         var ultimo_digito   = cedula.substring(9,10);
 
                         //Agrupo todos los pares y los sumo
                         var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
 
                         //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
                         var numero1 = cedula.substring(0,1);
                         var numero1 = (numero1 * 2);
                         if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
 
                         var numero3 = cedula.substring(2,3);
                         var numero3 = (numero3 * 2);
                         if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
 
                         var numero5 = cedula.substring(4,5);
                         var numero5 = (numero5 * 2);
                         if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
 
                         var numero7 = cedula.substring(6,7);
                         var numero7 = (numero7 * 2);
                         if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
 
                         var numero9 = cedula.substring(8,9);
                         var numero9 = (numero9 * 2);
                         if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
 
                         var impares = numero1 + numero3 + numero5 + numero7 + numero9;
 
                         //Suma total
                         var suma_total = (pares + impares);
 
                         //extraemos el primero digito
                         var primer_digito_suma = String(suma_total).substring(0,1);
 
                         //Obtenemos la decena inmediata
                         var decena = (parseInt(primer_digito_suma) + 1)  * 10;
 
                         //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
                         var digito_validador = decena - suma_total;
 
                         //Si el digito validador es = a 10 toma el valor de 0
                         if(digito_validador == 10)
                             var digito_validador = 0;
 
                         //Validamos que el digito validador sea igual al de la cedula
                         if(digito_validador == ultimo_digito){
                             //console.log('la cedula:' + cedula + ' es correcta');
                             count1++;
                         }else{
                             $scope.listaCedulaNoValida.push($scope.listaTodos[i]);
                             count2++;
                         }
 
                     }else{
                         // imprimimos en consola si la region no pertenece
                         //console.log('Esta cedula no pertenece a ninguna region');
                         $scope.listaCedulaNoValida.push($scope.listaTodos[i]);
                         count2++
                     }
                 }else{
                     //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
                    // console.log('Esta cedula tiene menos de 10 Digitos');
                     $scope.listaCedulaNoValida.push($scope.listaTodos[i]);
                     count2++;
                 }
             }
 
 
             console.log($scope.listaCedulaNoValida);
             console.log(count1);
             console.log(count2);
 
             $http({
                 method: 'POST',
                 url: 'http://localhost:3002/api/getALlBad',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 data:
                         $scope.listaCedulaNoValida
 
 
 
             }).then(function successCallback(response) {
 
             }, function errorCallback(response) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
                 // console.log(response);
                 //$scope.mesaje = response.mensaje;
                 alert('error al realizar Ingreso');
 
             });
         }, function errorCallback(response) {
             // called asynchronously if an error occurs
             // or server returns response with an error status.
             // console.log(response);
             //$scope.mesaje = response.mensaje;
             alert('error al realizar Ingreso');
 
         });
 
 
 
 
 
     }
 
 }]);