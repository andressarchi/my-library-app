"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libros = void 0;
// books.ts
const libros_1 = require("./libros"); // Importa la clase book correctamente
exports.libros = [
    new libros_1.book("2019", "Cien anos de soledad", 19.99, 5, "Español"),
    new libros_1.book("2020", "Aura", 15.5, 8, "Español"),
    new libros_1.book("2021", "La casa de los espíritus", 12.75, 3, "Español"),
    new libros_1.book("2022", "Pedro Páramo", 14.25, 6, "Español"),
    new libros_1.book("2023", "La noche de Tlatelolco", 10.0, 10, "ingles"),
];
