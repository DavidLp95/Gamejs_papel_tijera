const opciones = ["piedra", "papel", "tijera"];
let oportunidades = 4;



document.querySelector("#boton_random").addEventListener("click", function() {
    if(oportunidades <= 0){
        document.querySelector(".resultado").value = "No tienes más oportunidades";
        return;
    }

    const eleccionUsuario = document.getElementById("opciones_de_seleccion").value; //opciones del usuario 
    const eleccionpc = opciones[Math.floor(Math.random() * opciones.length)]; //opcionesde de la pc, usando Math.random para generar un número aleatorio entre 0 y 2, y luego seleccionando la opción correspondiente del array opciones. 

   let resultado = "";

    if (
        (eleccionUsuario === "piedra" && eleccionpc === "tijera") ||
        (eleccionUsuario === "papel" && eleccionpc === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionpc === "papel")
    ) {
        resultado = `Ganaste 🎉. La computadora eligió ${eleccionpc}.`;
    } else if (eleccionUsuario === eleccionpc) {
        resultado = `Empate. Ambos eligieron ${eleccionUsuario}.`;
    } else {
        resultado = `Perdiste 😢. La computadora eligió ${eleccionpc}.`;
    }

    document.getElementById("resultado").value = resultado;
    oportunidades--;});