export class Livros {
    id: number;
    autor: string;
    titulo: string;
    anoPublicacao: number;

    constructor(id: number, autor: string, titulo: string, anoPublicacao: number) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
}
