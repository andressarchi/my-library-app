import { book } from "./libros";
import { libreria } from "./libreria";
import { libros } from "./librosPredeterminados";
/**
 * !Instalacion de librerias Prompt-Sync
 */
import promptSync from "prompt-sync";

const prompt = promptSync();

//Constante de la seccion

const seccion = new libreria(
  "Realismo Mágico",
  "Sección dedicada a libros del género Realismo Mágico",
  libros
);

//Funcion agregar libros a la lista
function agregarLibro(): void {
  const ISBN = prompt("Ingrese el ISBN del libro: ");
  const Titulo = prompt("Ingrese el título del libro: ");
  const Precio = parseFloat(prompt("Ingrese el precio del libro: "));
  const Stock = parseInt(prompt("Ingrese el stock del libro: "), 10);
  const idioma = prompt("Ingrese el Idioma del Libro: ");

  const libro = new book(ISBN, Titulo, Precio, Stock, idioma);
  seccion.AgregarLibro(libro);
  console.log("Libro agregado correctamente.");
}

//Funcion Eliminar libros a la lista

function eliminarLibro(): void {
  const ISBN = prompt("Ingrese el ISBN del libro a eliminar: ");
  seccion.EliminarLibro(ISBN);
  console.log("Libro eliminado correctamente.");
}

//Funcion ver libros a la lista

function verLibros(): void {
  const libros = seccion.Verlibros();
  if (libros.length === 0) {
    console.log("no hay libros disponibles");
  } else {
    libros.forEach((libro) => {
      console.log(`ISBN: ${libro.ISBN},
                Título: ${libro.Titulo},
                Precio: ${libro.Precio},
                Stock: ${libro.Stock},
                Idioma: ${libro.idioma},
                `);
    });
  }
}
function buscarPorTitulo(){
    let libro :string=prompt(`ingrese el titulo de el libro:`)
  seccion.porTitulo(libro)
  
    
}
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
