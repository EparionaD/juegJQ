//Juego con Jquery
/*$(document).ready(function(){

    $('button').on('click', function(e){
        var nombre = e.currentTarget.dataset.key;
        var compu = eleccion();
        $('#cambiar').attr('src',`./img/${nombre}.png`);
        $('#cambiar1').attr('src',`./img/${compu}.png`);
        //Eleccion compu
        function eleccion(){
            var array = ['piedra', 'papel', 'tijera'];
            var numero = Math.floor(Math.random()*3);
            return array[numero];
        }
        //Comparacion
        var resultado = comparacion(nombre,compu);
        $('#mensaje').html(`Tú ${resultado} escogiendo ${nombre} contra de ${compu}`);
        console.log(resultado);

        function comparacion(nombre, compu){
            if(nombre == compu){
                return "Empate";
            }
            if((nombre == 'papel' && compu == 'piedra') || (nombre == 'tijera' && compu == 'papel') || (nombre == 'piedra' && compu == 'tijera')){
                return "ganas";
            }else if((nombre == 'papel' && compu == 'tijera') || (nombre == 'tijera' && compu == 'piedra') || (nombre == 'piedra' && compu == 'papel')){
                return "pierdes";
            }
        }
    });
});*/


//Juego con JavaScript
var botones = document.querySelectorAll(`button`);
//console.log(botones);
botones.forEach(function(numero){
    var boton = numero;
    //console.log(boton);
    boton.addEventListener('click', function(e){
        var nombre = e.currentTarget.dataset.key;
        //console.log(nombre);
        var compu = eleccion();
        //console.log(compu);
        var cambiar = document.getElementById('cambiar').src=`./img/${nombre}.png`;
        var cambiar1 = document.getElementById('cambiar1').src=`./img/${compu}.png`;
        //Eleccion compu
        function eleccion(){
            var array = ['piedra', 'papel', 'tijera'];
            var numero = Math.floor(Math.random()*3);
            return array[numero];
        }
        //Comparacion
        var resultado = comparacion(nombre,compu);
        var mensaje = document.getElementById('mensaje').innerHTML=`Tú ${resultado} escogiendo ${nombre} contra de ${compu}`;
        //console.log(resultado);

        function comparacion(nombre, compu){
            if(nombre == compu){
                return "Empate";
            }
            if((nombre == 'papel' && compu == 'piedra') || (nombre == 'tijera' && compu == 'papel') || (nombre == 'piedra' && compu == 'tijera')){
                return "ganas";
            }else if((nombre == 'papel' && compu == 'tijera') || (nombre == 'tijera' && compu == 'piedra') || (nombre == 'piedra' && compu == 'papel')){
                return "pierdes";
            }
        }
    });
});