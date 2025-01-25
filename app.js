// Asigna una variable de una lista vacia 
        let nombres = [];

// Funcion para agregar nombres por caja de texto a una lista previamente asignada como nombres
        function agregarAmigo() {
            const nombreInput = document.getElementById("amigo");
            const nuevoNombre = nombreInput.value;
            if (nuevoNombre !== "") {
                nombres.push(nuevoNombre);
                mostrarNombres();
//Limpia la caja de texto
                nombreInput.value = "";
//imprime la lista por consola 
                console.log(nombres);
// Valida que la caja de texto se introduca los nombres validos
            }else{
                alert('Ingrese un nombre valido porfavor!');   
            }
        }
//Muestra los nombres previamente capturados por la caja de texto en la inteface del usuario
        function mostrarNombres() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            nombres.forEach(nombre => {
                const li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }
// Sortea los nombres de la lista atravez de un indice el cual [0,1,2,3,4,5,....] segun su
//posicion se asigan nombre de acuerdo con la clave Valor en javascript
        function sortearAmigo() {
            if (nombres.length > 0) {
                const indiceAleatorio = Math.floor(Math.random() * nombres.length);
                const nombreSorteado = nombres[indiceAleatorio];
                document.getElementById("resultado").textContent = `El amigo secreto es: ${nombreSorteado}`;

// Se llama al document.getElementById("listaAmigos")para poder acceder y
//  borrar los datos en pantalla con lista.innerHTML = "";
                const lista = document.getElementById("listaAmigos");
                lista.innerHTML = "";
                console.log(nombreSorteado);                  
// Se da un mensaje de alerta para cuando se hace click en el boton de Sortear amigo y
// no se ha introducido nombres en la caja de texto. Es una alerta de validación de datos-
           }else{
                alert("La lista de nombres no puede estar  vacía. Introduzca un nombre");
            }
        }
       
