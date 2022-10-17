import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISaldoDiario } from '../_models/ISaldoDiario';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  
  baseUrl: string = `${environment.BASE_URL}/relatorio`

  constructor(private http: HttpClient) { }

  obterRelatorio(): Observable<ISaldoDiario[]> {
    console.log(this.baseUrl);
    return this.http.get<ISaldoDiario[]>(this.baseUrl);
  }
}
