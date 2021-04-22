app.controller('testController', ['$scope', '$http', '$location','$localStorage','$timeout',  function ($scope,$http,$location,myProvider,$localStorage,$timeout) {

    $scope.terminar=function(){
        
        $('#bt').prop('disabled', true);
        $('#1').prop('disabled', true);
       // $scope.navegacion ("/testForm");
       $scope.datosTestFormTotal = JSON.parse(window.localStorage.getItem('datosTestForm'))
       console.log($scope.datosTestFormTotal);
       $scope.registrarDatosTest();
      
        $scope.respuestas = [];
        for (i=0; i < $scope.allPreguntas.length ; i++)
        {     
            //console.log($scope.allPreguntas[i].ID_PREGUNTA);
            if($('#'+$scope.allPreguntas[i].ID_PREGUNTA+':checked').val() == 1)
            {
                
                $scope.respuestas.push({
                    cod: $scope.allPreguntas[i].ID_PREGUNTA,
                    resp: 1
                });
            }else{
                $scope.respuestas.push({
                    cod: $scope.allPreguntas[i].ID_PREGUNTA,
                    resp: 0
                }); 
            }  
        }
    
        $scope.resultado = [];

        $scope.Esquizoide=0;
        $scope.Evitativo=0;
        $scope.Depresivo=0;
        $scope.Dependiente=0;
        $scope.Histrionico=0;
        $scope.Narcisita=0;
        $scope.Antisocial=0;
        $scope.Agresivo=0;
        $scope.Compulsivo=0;
        $scope.Negativista=0;
        $scope.Autodestructiva=0;
        $scope.Esquizotipica=0;
        $scope.Limite=0;
        $scope.Paranoide=0;
        $scope.TAnsiedad=0;
        $scope.TSomatoformo=0;
        $scope.TBipolar=0;
        $scope.TDistimico=0;
        $scope.Dalcohol=0;
        $scope.Dsustancias=0;
        $scope.Tpostraumatico=0;
        $scope.Dpensamiento=0;
        $scope.Dmayor=0;
        $scope.Ddelusional=0;
        $scope.Sinceridad=0;
        $scope.DSocial=0;
        $scope.Devaluacion=0;
        $scope.Validez=0;
        
      
        for (i=0; i < $scope.respuestas.length ; i++)
        {
            // Esquizoide
            if($scope.respuestas[i].cod == 	'4'	||
                $scope.respuestas[i].cod == 	'10'	||
                $scope.respuestas[i].cod == 	'27'	||
                $scope.respuestas[i].cod == 	'32'	||
                $scope.respuestas[i].cod == 	'38'	||
                $scope.respuestas[i].cod == 	'46'	||
                $scope.respuestas[i].cod == 	'48'	||
                $scope.respuestas[i].cod == 	'57'	||
                $scope.respuestas[i].cod == 	'92'	||
                $scope.respuestas[i].cod == 	'101'	||
                $scope.respuestas[i].cod == 	'105'	||
                $scope.respuestas[i].cod == 	'142'	||
                $scope.respuestas[i].cod == 	'148'	||
                $scope.respuestas[i].cod == 	'156'	||
                $scope.respuestas[i].cod == 	'165'	||
                $scope.respuestas[i].cod == 	'167'
            )
            {
                $scope.Esquizoide = $scope.Esquizoide + $scope.respuestas[i].resp;
            }
            //Evitativo
            if($scope.respuestas[i].cod == 	'18'	||
            $scope.respuestas[i].cod == 	'40'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'48'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'127'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'146'	||
            $scope.respuestas[i].cod == 	'148'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'158'	||
            $scope.respuestas[i].cod == 	'174'            
            )
            {
                $scope.Evitativo = $scope.Evitativo + $scope.respuestas[i].resp;
            }
            //Depresivo
            if($scope.respuestas[i].cod == 	'20'	||
            $scope.respuestas[i].cod == 	'24'	||
            $scope.respuestas[i].cod == 	'25'	||
            $scope.respuestas[i].cod == 	'43'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'83'	||
            $scope.respuestas[i].cod == 	'86'	||
            $scope.respuestas[i].cod == 	'112'	||
            $scope.respuestas[i].cod == 	'123'	||
            $scope.respuestas[i].cod == 	'133'	||
            $scope.respuestas[i].cod == 	'142'	||
            $scope.respuestas[i].cod == 	'145'	||
            $scope.respuestas[i].cod == 	'148'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'154'	                   
            )
            {
                $scope.Depresivo = $scope.Depresivo + $scope.respuestas[i].resp;
            }

            //Dependiente
            if($scope.respuestas[i].cod == 	'16'	||
            $scope.respuestas[i].cod == 	'35'	||
            $scope.respuestas[i].cod == 	'45'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'56'	||
            $scope.respuestas[i].cod == 	'73'	||
            $scope.respuestas[i].cod == 	'82'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'94'	||
            $scope.respuestas[i].cod == 	'108'	||
            $scope.respuestas[i].cod == 	'120'	||
            $scope.respuestas[i].cod == 	'133'	||
            $scope.respuestas[i].cod == 	'135'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'151'	||
            $scope.respuestas[i].cod == 	'169'	                             
            )
            {
                $scope.Dependiente = $scope.Dependiente + $scope.respuestas[i].resp;
            }

            //Histriónico
            if($scope.respuestas[i].cod == 	'10'	||
            $scope.respuestas[i].cod == 	'12'	||
            $scope.respuestas[i].cod == 	'21'	||
            $scope.respuestas[i].cod == 	'24'	||
            $scope.respuestas[i].cod == 	'27'	||
            $scope.respuestas[i].cod == 	'32'	||
            $scope.respuestas[i].cod == 	'48'	||
            $scope.respuestas[i].cod == 	'51'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'88'	||
            $scope.respuestas[i].cod == 	'92'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'123'	||
            $scope.respuestas[i].cod == 	'127'	||
            $scope.respuestas[i].cod == 	'174'	                                       
            )
            {
                $scope.Histrionico = $scope.Histrionico + $scope.respuestas[i].resp;
            }

            //Narcisita
            if($scope.respuestas[i].cod == 	'5'	||
            $scope.respuestas[i].cod == 	'21'	||
            $scope.respuestas[i].cod == 	'26'	||
            $scope.respuestas[i].cod == 	'31'	||
            $scope.respuestas[i].cod == 	'35'	||
            $scope.respuestas[i].cod == 	'38'	||
            $scope.respuestas[i].cod == 	'40'	||
            $scope.respuestas[i].cod == 	'47'	||
            $scope.respuestas[i].cod == 	'57'	||
            $scope.respuestas[i].cod == 	'67'	||
            $scope.respuestas[i].cod == 	'69'	||
            $scope.respuestas[i].cod == 	'80'	||
            $scope.respuestas[i].cod == 	'84'	||
            $scope.respuestas[i].cod == 	'85'	||
            $scope.respuestas[i].cod == 	'86'	||
            $scope.respuestas[i].cod == 	'88'	||
            $scope.respuestas[i].cod == 	'93'	||
            $scope.respuestas[i].cod == 	'94'	||
            $scope.respuestas[i].cod == 	'99'	||
            $scope.respuestas[i].cod == 	'116'	||
            $scope.respuestas[i].cod == 	'141'	||
            $scope.respuestas[i].cod == 	'144'	||
            $scope.respuestas[i].cod == 	'159'	||
            $scope.respuestas[i].cod == 	'169'	                                                   
            )
            {
                $scope.Narcisita = $scope.Narcisita + $scope.respuestas[i].resp;
            }

             //Antisocial
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'17'	||
             $scope.respuestas[i].cod == 	'21'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'52'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'136'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'172'	                                                              
             )
             {
                 $scope.Antisocial = $scope.Antisocial + $scope.respuestas[i].resp;
             }

             //Agresivo-sádico
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'9'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'17'	||
             $scope.respuestas[i].cod == 	'28'	||
             $scope.respuestas[i].cod == 	'33'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'39'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'64'	||
             $scope.respuestas[i].cod == 	'79'	||
             $scope.respuestas[i].cod == 	'87'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'95'	||
             $scope.respuestas[i].cod == 	'96'	||
             $scope.respuestas[i].cod == 	'116'	||
             $scope.respuestas[i].cod == 	'166'	                                                                        
             )
             {
                 $scope.Agresivo = $scope.Agresivo + $scope.respuestas[i].resp;
             }

             //Compulsivo
             if($scope.respuestas[i].cod == 	'2'	||
             $scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'29'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'59'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'82'	||
             $scope.respuestas[i].cod == 	'97'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'114'	||
             $scope.respuestas[i].cod == 	'137'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'172'	                                                                                     
             )
             {
                 $scope.Compulsivo = $scope.Compulsivo + $scope.respuestas[i].resp;
             }

             //Negativista 
             if($scope.respuestas[i].cod == 	'6'	||
             $scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'42'	||
             $scope.respuestas[i].cod == 	'50'	||
             $scope.respuestas[i].cod == 	'60'	||
             $scope.respuestas[i].cod == 	'79'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'115'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'126'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'166'	                                                                                                 
             )
             {
                 $scope.Negativista = $scope.Negativista + $scope.respuestas[i].resp;
             }

             //Autodestructiva
             if($scope.respuestas[i].cod == 	'18'	||
             $scope.respuestas[i].cod == 	'19'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'25'	||
             $scope.respuestas[i].cod == 	'35'	||
             $scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'43'	||
             $scope.respuestas[i].cod == 	'70'	||
             $scope.respuestas[i].cod == 	'90'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'161'	||
             $scope.respuestas[i].cod == 	'169'	                                                                                                              
             )
             {
                 $scope.Autodestructiva = $scope.Autodestructiva + $scope.respuestas[i].resp;
             }

             //Esquizotípica
             if($scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'48'	||
             $scope.respuestas[i].cod == 	'69'	||
             $scope.respuestas[i].cod == 	'71'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'99'	||
             $scope.respuestas[i].cod == 	'102'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'156'	||
             $scope.respuestas[i].cod == 	'158'	||
             $scope.respuestas[i].cod == 	'162'	                                                                                                                        
             )
             {
                 $scope.Esquizotipica = $scope.Esquizotipica + $scope.respuestas[i].resp;
             }

             //Limite
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'30'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'98'	||
             $scope.respuestas[i].cod == 	'120'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'135'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'161'	||
             $scope.respuestas[i].cod == 	'171'	||
             $scope.respuestas[i].cod == 	'166'	                                                                                                                               
             )
             {
                 $scope.Limite = $scope.Limite + $scope.respuestas[i].resp;
             }

             //Paranoide
             if($scope.respuestas[i].cod == 	'6'	||
             $scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'33'	||
             $scope.respuestas[i].cod == 	'42'	||
             $scope.respuestas[i].cod == 	'48'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'60'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'89'	||
             $scope.respuestas[i].cod == 	'103'	||
             $scope.respuestas[i].cod == 	'115'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'146'	||
             $scope.respuestas[i].cod == 	'158'	||
             $scope.respuestas[i].cod == 	'159'	||
             $scope.respuestas[i].cod == 	'167'	||
             $scope.respuestas[i].cod == 	'175'	                                                                                                                                        
             )
             {
                 $scope.Paranoide = $scope.Paranoide + $scope.respuestas[i].resp;
             }

             //Trastornos de Ansiedad
             if($scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'58'	||
             $scope.respuestas[i].cod == 	'61'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'108'	||
             $scope.respuestas[i].cod == 	'109'	||
             $scope.respuestas[i].cod == 	'124'	||
             $scope.respuestas[i].cod == 	'135'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'147'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'164'	||
             $scope.respuestas[i].cod == 	'170'	                                                                                                                                                     
             )
             {
                 $scope.TAnsiedad = $scope.TAnsiedad + $scope.respuestas[i].resp;
             }

             //Trastorno Somatoformo
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'11'	||
             $scope.respuestas[i].cod == 	'37'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'107'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'148'	                                                                                                                                                                 
             )
             {
                 $scope.TSomatoformo = $scope.TSomatoformo + $scope.respuestas[i].resp;
             }

             //Trastorno Bipolar
             if($scope.respuestas[i].cod == 	'3'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'51'	||
             $scope.respuestas[i].cod == 	'54'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'96'	||
             $scope.respuestas[i].cod == 	'106'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'125'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'166'	||
             $scope.respuestas[i].cod == 	'170'	                                                                                                                                                                             
             )
             {
                 $scope.TBipolar = $scope.TBipolar + $scope.respuestas[i].resp;
             }

             //Trastorno Distimico
             if($scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'25'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'86'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'	                                                                                                                                                                                          
             )
             {
                 $scope.TDistimico = $scope.TDistimico + $scope.respuestas[i].resp;
             }

             //Dependencia del alcohol
             if($scope.respuestas[i].cod == 	'14'	||
             $scope.respuestas[i].cod == 	'23'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'52'	||
             $scope.respuestas[i].cod == 	'64'	||
             $scope.respuestas[i].cod == 	'77'	||
             $scope.respuestas[i].cod == 	'93'	||
             $scope.respuestas[i].cod == 	'100'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'122'	||
             $scope.respuestas[i].cod == 	'131'	||
             $scope.respuestas[i].cod == 	'139'	||
             $scope.respuestas[i].cod == 	'152'	||
             $scope.respuestas[i].cod == 	'166'	                                                                                                                                                                                                  
             )
             {
                 $scope.Dalcohol = $scope.Dalcohol + $scope.respuestas[i].resp;
             }

             //Dependencia de sustancias
             if($scope.respuestas[i].cod == 	'7'	||
             $scope.respuestas[i].cod == 	'13'	||
             $scope.respuestas[i].cod == 	'21'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'39'	||
             $scope.respuestas[i].cod == 	'41'	||
             $scope.respuestas[i].cod == 	'53'	||
             $scope.respuestas[i].cod == 	'66'	||
             $scope.respuestas[i].cod == 	'91'	||
             $scope.respuestas[i].cod == 	'101'	||
             $scope.respuestas[i].cod == 	'113'	||
             $scope.respuestas[i].cod == 	'118'	||
             $scope.respuestas[i].cod == 	'136'	||
             $scope.respuestas[i].cod == 	'139'	                                                                                                                                                                                                          
             )
             {
                 $scope.Dsustancias = $scope.Dsustancias + $scope.respuestas[i].resp;
             }

             //Trastorno estrés postraumático
             if($scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'109'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'129'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'147'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'160'	||
             $scope.respuestas[i].cod == 	'164'	||
             $scope.respuestas[i].cod == 	'173'	                                                                                                                                                                                                                           
             )
             {
                 $scope.Tpostraumatico = $scope.Tpostraumatico + $scope.respuestas[i].resp;
             }

             //Desorden del pensamiento
             if($scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'56'	||
             $scope.respuestas[i].cod == 	'61'	||
             $scope.respuestas[i].cod == 	'68'	||
             $scope.respuestas[i].cod == 	'72'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'78'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'102'	||
             $scope.respuestas[i].cod == 	'117'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'162'	||
             $scope.respuestas[i].cod == 	'168'	                                                                                                                                                                                                                                     
             )
             {
                 $scope.Dpensamiento = $scope.Dpensamiento + $scope.respuestas[i].resp;
             }

             //Depresión mayor
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'44'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'107'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'128'	||
             $scope.respuestas[i].cod == 	'130'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'149'	||
             $scope.respuestas[i].cod == 	'150'	||
             $scope.respuestas[i].cod == 	'154'	||
             $scope.respuestas[i].cod == 	'171'	                                                                                                                                                                                                                                                
             )
             {
                 $scope.Dmayor = $scope.Dmayor + $scope.respuestas[i].resp;
             }

             //Desorden delusional
             if($scope.respuestas[i].cod == 	'5'	||
             $scope.respuestas[i].cod == 	'38'	||
             $scope.respuestas[i].cod == 	'49'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'67'	||
             $scope.respuestas[i].cod == 	'89'	||
             $scope.respuestas[i].cod == 	'103'	||
             $scope.respuestas[i].cod == 	'119'	||
             $scope.respuestas[i].cod == 	'138'	||
             $scope.respuestas[i].cod == 	'140'	||
             $scope.respuestas[i].cod == 	'153'	||
             $scope.respuestas[i].cod == 	'159'	||
             $scope.respuestas[i].cod == 	'175'	                                                                                                                                                                                                                                                           
             )
             {
                 $scope.Ddelusional = $scope.Ddelusional + $scope.respuestas[i].resp;
             }

             //Sinceridad

             $scope.Sinceridad = Math.trunc($scope.Esquizoide + $scope.Evitativo + $scope.Depresivo + $scope.Dependiente +
                                    $scope.Histrionico + $scope.Narcisita * 2 / 3 + $scope.Antisocial + $scope.Agresivo +
                                    $scope.Compulsivo + $scope.Negativista + $scope.Autodestructiva);
            

             //Deseabilidad Social
             if($scope.respuestas[i].cod == 	'20'	||
             $scope.respuestas[i].cod == 	'32'	||
             $scope.respuestas[i].cod == 	'35'	||
             $scope.respuestas[i].cod == 	'40'	||
             $scope.respuestas[i].cod == 	'51'	||
             $scope.respuestas[i].cod == 	'57'	||
             $scope.respuestas[i].cod == 	'59'	||
             $scope.respuestas[i].cod == 	'69'	||
             $scope.respuestas[i].cod == 	'80'	||
             $scope.respuestas[i].cod == 	'82'	||
             $scope.respuestas[i].cod == 	'88'	||
             $scope.respuestas[i].cod == 	'97'	||
             $scope.respuestas[i].cod == 	'104'	||
             $scope.respuestas[i].cod == 	'112'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'137'	||
             $scope.respuestas[i].cod == 	'141'	||
             $scope.respuestas[i].cod == 	'148'	||
             $scope.respuestas[i].cod == 	'151'	||
             $scope.respuestas[i].cod == 	'172'	                                                                                                                                                                                                                                                                       
             )
             {
                 $scope.DSocial = $scope.DSocial + $scope.respuestas[i].resp;
             }

             //Devaluación
             if($scope.respuestas[i].cod == 	'1'	||
             $scope.respuestas[i].cod == 	'4'	||
             $scope.respuestas[i].cod == 	'8'	||
             $scope.respuestas[i].cod == 	'15'	||
             $scope.respuestas[i].cod == 	'22'	||
             $scope.respuestas[i].cod == 	'24'	||
             $scope.respuestas[i].cod == 	'30'	||
             $scope.respuestas[i].cod == 	'34'	||
             $scope.respuestas[i].cod == 	'36'	||
             $scope.respuestas[i].cod == 	'44'	||
             $scope.respuestas[i].cod == 	'55'	||
             $scope.respuestas[i].cod == 	'56'	||
             $scope.respuestas[i].cod == 	'58'	||
             $scope.respuestas[i].cod == 	'62'	||
             $scope.respuestas[i].cod == 	'63'	||
             $scope.respuestas[i].cod == 	'70'	||
             $scope.respuestas[i].cod == 	'74'	||
             $scope.respuestas[i].cod == 	'75'	||
             $scope.respuestas[i].cod == 	'76'	||
             $scope.respuestas[i].cod == 	'83'	||
             $scope.respuestas[i].cod == 	'84'	||
             $scope.respuestas[i].cod == 	'86'	||
             $scope.respuestas[i].cod == 	'99'	||
             $scope.respuestas[i].cod == 	'111'	||
             $scope.respuestas[i].cod == 	'123'	||
             $scope.respuestas[i].cod == 	'128'	||
             $scope.respuestas[i].cod == 	'133'	||
             $scope.respuestas[i].cod == 	'134'	||
             $scope.respuestas[i].cod == 	'142'	||
             $scope.respuestas[i].cod == 	'145'	||
             $scope.respuestas[i].cod == 	'150'	||
             $scope.respuestas[i].cod == 	'171'	                                                                                                                                                                                                                                                                             
             )
             {
                 $scope.Devaluacion = $scope.Devaluacion + $scope.respuestas[i].resp;
             }

             //Validez

             if($scope.respuestas[i].cod == 	'65'	||
             $scope.respuestas[i].cod == 	'110'	||
             $scope.respuestas[i].cod == 	'157'	                                                                                                                                                                                                                                                                                        
             )
             {
                 $scope.Validez = $scope.Validez + $scope.respuestas[i].resp;
             }






        }
  
        $scope.datos = [{ cod:'1',descrip:'Esquizoide', bruto : $scope.Esquizoide},
        { cod:'2A',descrip:'Evitativo', bruto : $scope.Evitativo},
        { cod:'2B',descrip:'Depresivo', bruto : $scope.Depresivo},
        { cod:'3',descrip:'Dependiente', bruto : $scope.Dependiente},
        { cod:'4',descrip:'Histriónico', bruto : $scope.Histrionico},
        { cod:'5',descrip:'Narcisita', bruto : $scope.Narcisita},
        { cod:'6A',descrip:'Antisocial', bruto : $scope.Antisocial},
        { cod:'6B',descrip:'Agresivo-sádico', bruto : $scope.Agresivo},
        { cod:'7',descrip:'Compulsivo', bruto : $scope.Compulsivo},
        { cod:'8A',descrip:'Negativista (pasivo-agresivo)', bruto : $scope.Negativista},
        { cod:'8B',descrip:'Autodestructiva', bruto : $scope.Autodestructiva},
        { cod:'S',descrip:'Esquizotípica', bruto : $scope.Esquizotipica},
        { cod:'C',descrip:'Límite', bruto : $scope.Limite},
        { cod:'P',descrip:'Paranoide', bruto : $scope.Paranoide},
        { cod:'A',descrip:'Trastornos de Ansiedad', bruto : $scope.TAnsiedad},
        { cod:'H',descrip:'Trastorno Somatoformo', bruto : $scope.TSomatoformo},
        { cod:'N',descrip:'Trastorno Bipolar', bruto : $scope.TBipolar},
        { cod:'D',descrip:'Trastorno Distímico', bruto : $scope.TDistimico},
        { cod:'B',descrip:'Dependencia del alcohol', bruto : $scope.Dalcohol},
        { cod:'T',descrip:'Dependencia de sustancias', bruto : $scope.Dsustancias},
        { cod:'R',descrip:'Trastorno estrés postraumático', bruto : $scope.Tpostraumatico},
        { cod:'SS',descrip:'Desorden del pensamiento', bruto : $scope.Dpensamiento},
        { cod:'CC',descrip:'Depresión mayor', bruto : $scope.Dmayor},
        { cod:'PP',descrip:'Desorden delusional', bruto : $scope.Ddelusional},
        { cod:'X',descrip:'Sinceridad', bruto : $scope.Sinceridad},
        { cod:'Y',descrip:'Deseabilidad Social', bruto : $scope.DSocial},
        { cod:'Z',descrip:'Devaluación', bruto : $scope.Devaluacion},
        { cod:'V',descrip:'Validez', bruto : $scope.Validez}];

        $scope.prev = [];
        var t = 0;

       
        for (i = 0; i < $scope.datos.length; i++  )
        {   
          
            if($scope.datos[i].cod != 'X' && $scope.datos[i].cod != 'V')
            {
               
                $http({
                    method: 'GET',
                    url: "php/buscarPREV.php",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    params: {
                        pd:$scope.datos[i].bruto,
                        cod:$scope.datos[i].cod,
                        genero: $scope.datosTestFormTotal.generoT
                    }
                }).then(function successCallback(response) {
                    
                  
                   
                   $scope.prev.push(response.data[0])
                   console.log(response.data[0]);
                
                   
     
                }, function errorCallback(response) {
    
                    swal("Error!", "Ocurrio un error!", "error");
                                
    
                 });
                


                
            }
            if ($scope.datos[i].cod == 'X') {
                    
                    $scope.datos[i].br = $scope.datos[i].bruto;
                    

            }
            if($scope.datos[i].cod == 'V'){
                    
                    $scope.datos[i].br = $scope.datos[i].bruto;
                   
            }

        }
  

        setTimeout(function(){
            

                for(i=0;i < $scope.datos.length; i++)
                {
        
                    for(j=0;j < $scope.prev.length; j++)
                    {
                                    
                        if($scope.prev[j][$scope.datos[i].cod] != undefined)
                        {
                            $scope.datos[i].br = parseInt($scope.prev[j][$scope.datos[i].cod]);
                            $scope.datos[i].cedula = $scope.id;
                            
                           
                        }
                    
                    
                    }
                    //funcion que registra los resultados.
                    $scope.registrarDatosResultado($scope.datos[i]);
                   
                }
                window.localStorage["resultadosTotal"]= JSON.stringify($scope.datos);
                $scope.navegacion ("/resultado");
            
            //console.log($scope.datos);
        }, 5000);


     


    }

    /*$scope.siguiente= function()
    {
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'))
        console.log($scope.usuarioLogin);
    }*/

    $scope.buscarIdTest=function(){

        $http({
            method: 'GET',
            url: "php/buscaridTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                               
            }
        }).then(function successCallback(response) {

            $scope.id = response.data[0].ID_TEST;
           // console.log($scope.id);
                
            
        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");
                        

         });


    }

    $scope.initDatosTest=function(){
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'));
       // console.log($scope.usuarioLogin);
       $scope.nickT = $scope.usuarioLogin.NICK;
        $scope.cedulaT='';
        $scope.generoT='';
        $scope.edadT=18;
        $scope.enferT='';
     

    }

    $scope.registrarDatosResultado=function(data){
        //console.log(data);

        $http({
            method: 'GET',
            url: "php/registrarResultados.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id_test:$scope.id,
                codigo_prev: data.cod,
                descripcion:data.descrip,
                bruto:data.bruto,
                br: data.br
                
            }
        }).then(function successCallback(response) {
 
              
                console.log(response.data);
               
        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");
                        

         });

    }

    $scope.restarNumT=function(){

        console.log($scope.datosTestForm.nickT);
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'))
        
        if($scope.usuarioLogin.COD_TIPO == 1)
        {
            $http({
                method: 'GET',
                url: "php/restarNumTest.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.datosTestForm.nickT
                }
            }).then(function successCallback(response) {
        
                console.log(response.data); 
    
            }, function errorCallback(response) {
    
                swal("Error!", "No se resto el numero de test", "error");
                            
             });
        }
       

    }

    $scope.registrarDatosTest=function(){

        var f = new Date();

        $http({
            method: 'GET',
            url: "php/registrarDatosTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nick:$scope.datosTestForm.nickT,
                nombre:$scope.datosTestForm.nombreT,
                cedula:$scope.datosTestForm.cedulaT,
                genero: $scope.datosTestForm.generoT,
                edad:$scope.datosTestForm.edadT,
                tiempo_enfe:$scope.datosTestForm.enferT,
                fecha: $scope.datosTestForm.fecha
                
            }
        }).then(function successCallback(response) {

            if(response.data.resp == "true")
            {
                //swal("Success!", "Se ingreso correctamente!", "success");
                console.log(response.data);
                $scope.buscarIdTest();
                $scope.restarNumT();
                
               
            }else{
                console.log(response.data);
                swal("Error!", "No se ingreso!", "error");
                setTimeout(function(){
            
                    $scope.navegacion ("/test");
                
                //console.log($scope.datos);
                }, 500);
                
            }
            
        
           

        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");
                        

         });

    }


    $scope.initTest=function(){


        localStorage.removeItem('flag');
        console.log($scope.usuarioLogin.NICK);

        if($scope.usuarioLogin.COD_TIPO == 2)
        {
            $http({
                method: 'GET',
                url: "php/allTest.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {

                }
            }).then(function successCallback(response) {
        
                 $scope.alltest = response.data; 
                console.log($scope.alltest); 
 
            }, function errorCallback(response) {

                swal("Error!", "No existen registros!", "error");
                            

             });
    
        setTimeout(function(){
                $('#datatabletest').DataTable({
                    "language": {
                        "url": "http://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                    }
                });
            }, 500);
            
        }else{
            $http({
                method: 'GET',
                url: "php/allTestId.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.usuarioLogin.NICK
                }
            }).then(function successCallback(response) {
        
                 $scope.alltest = response.data; 
                 console.log($scope.alltest); 
 
            }, function errorCallback(response) {

                swal("Error!", "No existen registros!", "error");
                            

             });
    
        setTimeout(function(){
                $('#datatabletest').DataTable({
                    "language": {
                        "url": "http://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                    }
                });
            }, 500);
        }
      
    
    }


     $scope.initPreguntas=function(){
     

        $scope.datosTestForm = JSON.parse(window.localStorage.getItem('datosTestForm'))
        console.log($scope.datosTestForm );
 
        $http({
            method: 'GET',
            url: "php/allPreguntas.php",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {

            }
        }).then(function successCallback(response) {
    
             $scope.allPreguntas = response.data; 
           

        }, function errorCallback(response) {

            swal("Error!", "No existen registros!", "error");
                        

         });

     }

     $scope.inhabilitarUsuario=function(){  
        $scope.usuarioLogin = JSON.parse(window.localStorage.getItem('usuarioLogin'));
        console.log($scope.usuarioLogin);
        
        $http({
            method: 'GET',
            url: "php/inhabilitarUsuario.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                nick : $scope.usuarioLogin.NICK
            }
        }).then(function successCallback(response) {
    
            console.log(response.data); 

        }, function errorCallback(response) {

            swal("Error!", "No se resto el numero de test", "error");
                        
         });
    }

     $scope.siguiente=function(){  

        var f = new Date();
        window.localStorage["datosTestForm"]= JSON.stringify({nickT:$scope.nickT,
            cedulaT:$scope.cedulaT,
            nombreT:$scope.nombreT,
            generoT:$scope.generoT,
            edadT: $scope.edadT,
            enferT:$scope.enferT,
            fecha:f.getFullYear()+'-'+(f.getMonth()+1)+'-'+f.getDate()+' '+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()});

            $http({
                method: 'GET',
                url: "php/buscarUsuario.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    nick : $scope.nickT
                }
            }).then(function successCallback(response) {
                console.log(response.data.length);
                if (response.data.length == 1)
                {
                    if(parseInt(response.data[0].NUM_PRUEBAS) >= 1)
                    {
                        $scope.navegacion ("/testForm");
                    }else{
                        $scope.inhabilitarUsuario();
                        swal("Warning!", "El usuario se encuenta deshabilitado, solicite al administrador que lo active!", "warning");
                    }
                }
    
            }, function errorCallback(response) {
    
                swal("Error!", "Al conultar usuario", "error");
                            
             });
    
    }


    $scope.buscarTest=function(){  

        $http({
            method: 'GET',
            url: "php/buscarTest.php",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                               
            }
        }).then(function successCallback(response) {

            $scope.id = response.data[0].ID_TEST;
           // console.log($scope.id);
                
            
        }, function errorCallback(response) {

            swal("Error!", "Ocurrio un error!", "error");
                        

         });

    }

    $scope.verTest=function(test){  

        $scope.test = test;
        $scope.flag = 1;
        window.localStorage["flag"]= JSON.stringify($scope.flag);
        console.log($scope.test);
        console.log($scope.test.ID_TEST);

            $http({
                method: 'GET',
                url: "php/verResultado.php",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    idtest :  $scope.test.ID_TEST               
                }
            }).then(function successCallback(response) {
    
                
                console.log(response.data[0]);
                window.localStorage["resultadosTotal"]= JSON.stringify(response.data);
                window.localStorage["datosTestForm"]= JSON.stringify($scope.test);
                $scope.navegacion ("/resultado");


                    
                
            }, function errorCallback(response) {
    
                swal("Error!", "Ocurrio un error!", "error");
                            
    
             });
        

  

    }

    $scope.imprimir=function(){
        var doc = new jsPDF();
var elementHTML = $('#content').html();
var specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
});

// Save the PDF
doc.save('sample-document.pdf');
    }



    $scope.initResultado=function(){

        $("#miTexto").focus();
        

        $scope.datosTestFormTotal = JSON.parse(window.localStorage.getItem('datosTestForm'))
        console.log($scope.datosTestFormTotal);


        $scope.resultadosTotal = JSON.parse(window.localStorage.getItem('resultadosTotal'))
        console.log($scope.resultadosTotal);
        $scope.flag = JSON.parse(window.localStorage.getItem('flag'))
        console.log($scope.flag);

        if($scope.flag == 1)
        {
            $scope.shore = {
                nombreT : $scope.datosTestFormTotal.NOMBRE,
                enferT : $scope.datosTestFormTotal.TIEMPO_ENFERMEDAD,
                edadT : $scope.datosTestFormTotal.EDAD
            }
            $scope.datosTestFormTotal = $scope.shore;
            console.log($scope.datosTestFormTotal);
        }

        $scope.variables=[28];

        for (i=0; i<$scope.resultadosTotal.length;i++)
        {
            console.log("Dentro");
                if($scope.resultadosTotal[i].cod == '1')
                {
                    $scope.variables[0]= $scope.resultadosTotal[i]
                    console.log($scope.resultadosTotal[i].cod );
                    console.log("Posicion"+ i)
                }
                if($scope.resultadosTotal[i].cod == '2A')
                {
                    $scope.variables[1]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '2B')
                {
                    $scope.variables[2]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '3')
                {
                    $scope.variables[3]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '4')
                {
                    $scope.variables[4]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod =='5')
                {
                    $scope.variables[5]= $scope.resultadosTotal[i];
                    console.log($scope.variables[5]);
                }
                if($scope.resultadosTotal[i].cod == '6A')
                {
                    $scope.variables[6]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '6B')
                {
                    $scope.variables[7]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '7')
                {
                    $scope.variables[8]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '8A')
                {
                    $scope.variables[9]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == '8B')
                {
                    $scope.variables[10]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'S')
                {
                    $scope.variables[11]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'C')
                {
                    $scope.variables[12]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'P')
                {
                    $scope.variables[13]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'A')
                {
                    $scope.variables[14]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'H')
                {
                    $scope.variables[15]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'N')
                {
                    $scope.variables[16]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'D')
                {
                    $scope.variables[17]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'B')
                {
                    $scope.variables[18]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'T')
                {
                    $scope.variables[19]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'R')
                {
                    $scope.variables[20]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'SS')
                {
                    $scope.variables[21]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'CC')
                {
                    $scope.variables[22]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'PP')
                {
                    $scope.variables[23]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'X')
                {
                    $scope.variables[24]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'Y')
                {
                    $scope.variables[25]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'Z')
                {
                    $scope.variables[26]= $scope.resultadosTotal[i];
                }
                if($scope.resultadosTotal[i].cod == 'V')
                {
                    $scope.variables[27]= $scope.resultadosTotal[i];
                }
                
        }

        console.log( $scope.variables);

 
            var bar_data = {
              data : [['Esquizoide', $scope.variables[0].br], ['Evitativo', $scope.variables[1].br], ['Depresivo', $scope.variables[2].br], ['Dependiente', $scope.variables[3].br], ['Histriónico', $scope.variables[4].br], 
              ['Narcisita', $scope.variables[5].br], ['Antisocial', $scope.variables[6].br], ['Agresivo-sádico', $scope.variables[7].br], ['Compulsivo', $scope.variables[8].br], ['Negativista (pasivo-agresivo)', $scope.variables[9].br], ['Autodestructiva', $scope.variables[10].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart1', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3',
                
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Esquizotípica', $scope.variables[11].br], ['Límite', $scope.variables[12].br], 
              ['Paranoide', $scope.variables[13].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart2', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Trastornos de Ansiedad', $scope.variables[14].br], ['Trastorno Somatoformo', $scope.variables[15].br], ['Trastorno Bipolar',$scope.variables[16].br], 
              ['Trastorno Distímico', $scope.variables[17].br], ['Dependencia del alcohol', $scope.variables[18].br], ['Dependencia de sustancias', $scope.variables[19].br], 
              ['Trastorno estrés postraumático', $scope.variables[20].br]], 
              color: '#3c8dbc'
            }
            $.plot('#bar-chart3', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
              data : [['Desorden del pensamiento', $scope.variables[21].br], ['Depresión mayor', $scope.variables[22].br], ['Desorden delusional', $scope.variables[23].br]],
              color: '#3c8dbc'
            }
            $.plot('#bar-chart4', [bar_data], {
              grid  : {
                borderWidth: 1,
                borderColor: '#f3f3f3',
                tickColor  : '#f3f3f3'
              },
              series: {
                bars: {
                  show    : true,
                  barWidth: 0.5,
                  align   : 'center'
                }
              },
              xaxis : {
                mode      : 'categories',
                tickLength: 0
              }
            })
            /* END BAR CHART */
            var bar_data = {
                data : [['Sinceridad', $scope.variables[24].br], ['Deseabilidad Social', $scope.variables[25].br], 
                ['Devaluación', $scope.variables[26].br], ['Validez', $scope.variables[23].br]],
                color: '#3c8dbc'
              }
              $.plot('#bar-chart5', [bar_data], {
                grid  : {
                  borderWidth: 1,
                  borderColor: '#f3f3f3',
                  tickColor  : '#f3f3f3'
                },
                series: {
                  bars: {
                    show    : true,
                    barWidth: 0.5,
                    align   : 'center'
                  }
                },
                xaxis : {
                  mode      : 'categories',
                  tickLength: 0
                }
              })
              /* END BAR CHART */
              
    }

}]);