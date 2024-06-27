import { book } from "./libros";
import { libreria } from "./libreria";
import { libros } from "./librosPredeterminados";
import { seccion } from "./index";
import promptSync from "prompt-sync";

const prompt = promptSync();

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

  
  function eliminarLibro(): void {
    const ISBN = prompt("Ingrese el ISBN del libro a eliminar: ");
    seccion.EliminarLibro(ISBN);
    console.log("Libro eliminado correctamente.");
  }
  

  
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
  export {buscarPorTitulo,verLibros,eliminarLibro,agregarLibro}