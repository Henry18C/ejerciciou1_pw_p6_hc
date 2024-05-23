
let display1 = document.getElementById("display1");

let display0 = document.getElementById("display0");
let imgP= document.getElementById('imgP');
let intento = 1;

let puntaje= 5;

function playG(valor) {

     if (intento>=3){
        resetG();
     }
    if (valor&& intento <=2) {


        display0.innerText= "Puntaje: "+ puntaje + "\nIntentos: "+  intento;


        display1.innerText = "Felicitaciones, has seleccionado la opción correcta";
        display1.style.background = "blue";
        display1.style.border = "solid";
        display1.style.fontFamily = '"Times New Roman", Times, serif';

        imgP.src= "../img/pcolor.jpg";

        
    }
    else { 

        puntaje= puntaje-2;

        display0.innerText= "Puntaje: "+ puntaje + "\nIntentos: "+  intento;


        display1.innerText = "Pokémon incorrecto, intentalo nuevamente";
        display1.style.background = "red";
        display1.style.border = "solid";
        display1.style.fontFamily = '"Times New Roman", Times, serif';

       
 

    }

    intento++;
}


function resetG(){

    display0.innerText= "Puntaje: "+ 0 + "\nIntentos: "+  0+ "\nSelecciona el nombre de Pokémon correcto";

    imgP.src= "../img/pnegro.jpg";

    display1.innerText = " ";

}