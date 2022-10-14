import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ILancamento } from '../_models/ILancamento';
import { LancamentoService } from '../_services/lancamento.service';

@Component({
  selector: 'app-tabelalancamentos',
  templateUrl: './tabelalancamentos.component.html',
  styleUrls: ['./tabelalancamentos.component.css']
})
export class TabelalancamentosComponent implements OnInit {

  lancamentos?: ILancamento[];

  constructor(
    private lancamentoService: LancamentoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obterTodosLancamentos();
  }

  abrirModal(template: any) {
    template.show();
  }

  obterTodosLancamentos() {
    this.lancamentoService.obterTodosLancamentos()
      .subscribe(
        (_lancamentos: ILancamento[]) => {
          this.lancamentos = _lancamentos;
        }, error => {
          this.toastr.error('API offline',
            'Erro ao se comunicar com a API de Lançamentos');
          console.log(`Erro ao tentar buscar Lançamentos: ${error}`);
        }
      );
  }

  excluirLancamento(id: any): void {
    this.lancamentoService.excluirLancamento(id)
      .subscribe(() => {
        this.toastr.success(`Lançamento ${id} excluído com Sucesso`);
        this.obterTodosLancamentos();
      }, error => {
        this.toastr.error(`Não foi possível excluir o lançamento ${id}!`);
      });
  }
}
