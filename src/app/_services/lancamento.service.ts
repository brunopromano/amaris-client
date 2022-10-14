import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILancamento } from '../_models/ILancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  baseUrl = `${environment.baseApiUrl}/lancamentos`;

  constructor(private http: HttpClient) { }

  obterLancamentoPorId(id: number): Observable<ILancamento> {
    return this.http.get<ILancamento>(`${this.baseUrl}/${id}`);
  }

  obterTodosLancamentos(): Observable<ILancamento[]> {
    return this.http.get<ILancamento[]>(this.baseUrl);
  }

  cadastrarLancamento(lancamento: ILancamento): Observable<ILancamento> {
    return this.http.post<ILancamento>(this.baseUrl, lancamento);
  }

  atualizarLancamento(lancamento: ILancamento): Observable<any> {
    return this.http.put(this.baseUrl, lancamento);
  }

  excluirLancamento(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
