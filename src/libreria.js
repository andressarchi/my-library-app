"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libreria = void 0;
//Export y creacion de la clase seccion
class libreria {
    constructor(Nombre, Descripcion, Libros) {
        this.Libros = [];
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Libros = Libros;
    }
    //Agregar Libros
    AgregarLibro(libro) {
        this.Libros.push(libro);
    }
    //Eliminar libros
    EliminarLibro(isbn) {
        for (let i = 0; i < this.Libros.length; i++) {
            if (this.Libros[i].ISBN === isbn) {
                this.Libros.splice(i, 1);
                break; // Termina el bucle una vez encontrado y eliminado el libro
            }
        }
    }
    //Mostrar Libros
    Verlibros() {
        return this.Libros;
    }
    porTitulo(libro) {
        libro = this.Libros.map((libro) => {
            return {
                titulo: libro.Titulo,
                precio: libro.Precio,
                stok: libro.Stock,
                ISBN: libro.ISBN,
                idioma: libro.idioma
            };
        });
    }
}
exports.libreria = libreria;
