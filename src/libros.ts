// book.ts

export class book {
    constructor(
        public ISBN: string,
        public Titulo: string,
        public Precio: number,
        public Stock: number,
        public idioma: string,
    ) {}
}
