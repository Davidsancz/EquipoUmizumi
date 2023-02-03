let boton = document.getElementById("Btnsumar"); 

boton.addEventListener("click", sumarnumeros);

function sumarnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero1").value);
    varnumero2 = Number(document.getElementById("numero2").value);

    varresultado = varnumero1 + varnumero2;

    let imprimir = document.getElementById("imprimirresultadosuma");

    imprimir.innerText = varresultado;

}


// Resta

let boton2 = document.getElementById("Btnrestar"); 

boton2.addEventListener("click", restarnumeros);

function restarnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero3").value);
    varnumero2 = Number(document.getElementById("numero4").value);

    varresultado = varnumero1 - varnumero2;

    let imprimir = document.getElementById("imprimirresultadoresta");

    imprimir.innerText = varresultado;

}

// multiplicación

let boton3 = document.getElementById("Btnmultiplicar"); 

boton3.addEventListener("click", multnumeros);

function multnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero5").value);
    varnumero2 = Number(document.getElementById("numero6").value);

    varresultado = varnumero1 * varnumero2;

    let imprimir = document.getElementById("imprimirresultadomultiplicar");

    imprimir.innerText = varresultado;

}

// División

let boton4 = document.getElementById("Btndividir"); 

boton4.addEventListener("click", divnumeros);

function divnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero7").value);
    varnumero2 = Number(document.getElementById("numero8").value);

    varresultado = varnumero1 / varnumero2;

    let imprimir = document.getElementById("imprimirresultadodivision");

    imprimir.innerText = varresultado;

}

// CUADRADO

let boton5 = document.getElementById("Btndareac"); 

boton5.addEventListener("click", areac);

function areac(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("basec").value);
    varnumero2 = Number(document.getElementById("alturac").value);

    varresultado = varnumero1 * varnumero2;

    let imprimir = document.getElementById("imprimirresultadoarea");

    imprimir.innerText = varresultado;

}

// RECTANGULO

let boton7 = document.getElementById("Btndarear"); 

boton7.addEventListener("click", arear);

function arear(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("baser").value);
    varnumero2 = Number(document.getElementById("alturar").value);

    varresultado = (varnumero1 * varnumero2)/2;

    let imprimir = document.getElementById("imprimirresultadoarear");

    imprimir.innerText = varresultado;

}

const boton6 = document.getElementById("Btnverificar").addEventListener("click", verificarcalificación);

function verificarcalificación(){
    let varnumero1 = Number(document.getElementById("numero11").value);
    let printresult = document.getElementById("imprimirresultadoverificar");

    if(varnumero1 >= 8 ){
        printresult.innerText = "Aprobada"; 
    }else{
        printresult.innerText = "Reprobada";
        const audio = document.getElementById("audio");
        audio.play();
    }
}

// NUMEROS ASCENDENTES

const botonascendente = document.getElementById("Btnnumeros").addEventListener("click", numeros);

function numeros(){

    const imprimirnumeros = document.getElementById("imprimirresultadonúmeros");
    imprimirnumeros.innerHTML = " ";

    for(let x=0; x<=20; x++){

        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        imprimirnumeros.appendChild(lista);
    }
}
