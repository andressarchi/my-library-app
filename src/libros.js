"use strict";
// book.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
class book {
    constructor(ISBN, Titulo, Precio, Stock, idioma) {
        this.ISBN = ISBN;
        this.Titulo = Titulo;
        this.Precio = Precio;
        this.Stock = Stock;
        this.idioma = idioma;
    }
}
exports.book = book;
