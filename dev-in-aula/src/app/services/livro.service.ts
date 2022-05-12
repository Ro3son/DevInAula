import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../classes/livros';
import { environment } from 'src/environments/environment';
import { Livro } from '../interfaces/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  public requestURL = environment.API_Path;

  public getLivrosAsync(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.requestURL);
  }
  deleteData(id: number) {
    this.http.delete<Livros[]>(`${this.requestURL}/${id}`).subscribe(
      resultado => {
        console.log('Produto excluído com sucesso.');
      },
      erro => {
        if (erro.status == 404) {
          console.log('Produto não localizado.');
        }
      }
    );
    // return this.http.delete(`${this.requestURL}/${id}`);
  }
  postData(data: any) {
    this.http.post(`${this.requestURL}`, data).subscribe(() => {
      alert('Success!');
    },
      () => {
        alert('Error');
      });
  }
  editData(data: any) {
    this.http.put(`${this.requestURL}/5`, data).subscribe(
      resultado => {
        console.log('Produto alterado com sucesso.')
      },
      erro => {
        switch(erro.status) {
          case 400:
            console.log(erro.error.mensagem);
            break;
          case 404:
            console.log('Produto não localizado.');
            break;
        }
      }
    );
}
}

  // getTodos() {
  //   const requestURL = environment.API_Path;
  //   this.http.get(requestURL).toPromise()
  //   .then((response: any) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

