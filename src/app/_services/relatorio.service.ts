import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISaldoDiario } from '../_models/ISaldoDiario';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  baseUrl = `${environment.baseApiUrl}/relatorio`

  constructor(private http: HttpClient) { }

  obterRelatorio(): Observable<ISaldoDiario[]> {
    return this.http.get<ISaldoDiario[]>(this.baseUrl);
  }
}
