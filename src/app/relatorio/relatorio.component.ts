import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ISaldoDiario } from '../_models/ISaldoDiario';
import { RelatorioService } from '../_services/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  listaSaldoDiario!: ISaldoDiario[];

  constructor(
    private relatorioService: RelatorioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.relatorioService.obterRelatorio().subscribe(
      (_listaSaldoDiario: ISaldoDiario[]) => {
        this.listaSaldoDiario = _listaSaldoDiario;
        console.log(this.listaSaldoDiario);
      }, error => {
        this.toastr.error('Não foi possível buscar os dados para o relatório');
        console.log(error);
      }
    );
  }

  obterCor(saldo: number) {
    console.log(saldo);
    return saldo < 0 ? 'red' : 'blue';
  }
}
