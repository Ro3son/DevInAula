import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/classes/livros';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-estante-livros',
  templateUrl: './estante-livros.component.html',
  styleUrls: ['./estante-livros.component.scss']
})
export class EstanteLivrosComponent implements OnInit {

  public livros: Livros[] = [];
  
  public novoLivro: Livros = {id: 5, autor: 'Carlos Drummond', titulo: 'Poesias', anoPublicacao: 0};

  public livroAtualizado: Livros = {id: 5, autor: 'Felipe Rios', titulo: 'Mestre Angular', anoPublicacao: 2022};

  constructor(private LivroService: LivroService) { }

  ngOnInit(): void {
    this.LivroService.getLivrosAsync().subscribe((retorno) => {
      this.livros = retorno.map((func) => {
        return new Livros(func.id, func.autor, func.titulo, func.anoPublicacao);
      })
    }
    )
  }
  delete(numero: number) {
    console.log(this.livros);
    this.LivroService.deleteData(numero);
    console.log(this.livros);
  }
  post() {
    this.LivroService.postData(this.novoLivro);
  }
  put() {
    this.LivroService.editData(this.livroAtualizado);
  }
}
