var letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var aleatorio;
const maximo=letras.length;
var mostrar;
var lista=[];

const sortear=()=>{
    var div=document.getElementById("contenedorDeLetras");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
   
    aleatorio=Math.floor(Math.random()*maximo);
    mostrar=letras[aleatorio];
    letras.splice(aleatorio, 1);
    console.log(aleatorio);
    console.log(mostrar);

    if (mostrar!=undefined) {
        var elementoNuevo=document.createElement("h2");
        elementoNuevo.innerHTML= mostrar;
        div.append(elementoNuevo);
        lista.push(mostrar);
       
        var span=document.getElementById("letrasAnteriores");
        var letrasPasadas=document.createElement("span");
        letrasPasadas.innerHTML=mostrar;
        span.append(letrasPasadas,"-");
       
        if (lista.length>=maximo) {
            var elementoNuevo=document.createElement("h2");
        elementoNuevo.innerHTML= "Se me acabaron las letras! FIN DEL JUEGO";
        div.append(elementoNuevo);
        }
    }
    else{
        
        var elementoNuevo=document.createElement("h2");
        elementoNuevo.innerHTML= "Tira de Nuevo!";
        div.append(elementoNuevo);
    }
    
}

const reiniciar=()=>{
    location.reload();
}