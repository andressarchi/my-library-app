import { book } from "./libros";
import { libreria } from "./libreria";
import { libros } from "./librosPredeterminados";
import { buscarPorTitulo,eliminarLibro,agregarLibro,verLibros } from "./funciones";
/**
 * !Instalacion de librerias Prompt-Sync
 */
import promptSync from "prompt-sync";

const prompt = promptSync();

//Constante de la seccion

 export const seccion = new libreria(
  "accion",
  "libreria de con libros del genero de accion",
  libros
);


//Funcion Menu (Consola-Terminal)

function menu(): void {
  let opcion: string;
  do {
    console.log(
      "\n Menú\n1. Agregar libro\n2. Eliminar libro\n3. Ver libros\n4.buscar por titulo\n5. Salir"
    );
    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
      case "1":
        agregarLibro();
        break;
      case "2":
        eliminarLibro();
        break;
      case "3":
        verLibros();
        break;
      case "4":
        buscarPorTitulo()
        break;  
      case "5":
        console.log("el programa a terminado");
        break;
        
      default:
        console.log("no se encuentra en el menu");
    }
  } while (opcion !== "5");
}

menu();
