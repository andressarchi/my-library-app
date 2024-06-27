//Importacion Book
import { libros } from "./librosPredeterminados";
import { book } from "./libros";

//Export y creacion de la clase seccion
export class libreria {
  Nombre: string;
  Descripcion: string;
  Libros: book[] = [];

  constructor(Nombre: string, Descripcion: string, Libros: book[]) {
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
    this.Libros = Libros;
  }

  //Agregar Libros

  AgregarLibro(libro: book): void {
    this.Libros.push(libro);
  }

  //Eliminar libros

  EliminarLibro(isbn: string): void {
    for (let i = 0; i < this.Libros.length; i++) {
      if (this.Libros[i].ISBN === isbn) {
        this.Libros.splice(i, 1);
        break; // Termina el bucle una vez encontrado y eliminado el libro
      }
    }
  }

  //Mostrar Libros

  Verlibros(): book[] {
    return this.Libros;
  }
  porTitulo(libro:any){
     libro = this.Libros.map((libro)=>{
        return{
            titulo:libro.Titulo,
            precio:libro.Precio,
            stok:libro.Stock,
            ISBN:libro.ISBN,
            idioma:libro.idioma
        }
        
        
    })
    
  }
}
