import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILancamento } from '../_models/ILancamento';
import { LancamentoService } from '../_services/lancamento.service';

@Component({
  selector: 'app-adicionar-lancamento',
  templateUrl: './adicionar-lancamento.component.html',
  styleUrls: ['./adicionar-lancamento.component.css']
})
export class AdicionarLancamentosComponent implements OnInit {
  lancamento!: ILancamento;
  lancamentoForm!: FormGroup;

  onLancamentoCadastrado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.lancamentoForm = this.formBuilder.group({
      dataLancamento: ['', Validators.required],
      tipoLancamento: ['', Validators.required],
      valorBrl: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  postarLancamento() {
    this.lancamento = Object.assign({}, this.lancamentoForm.value);

    this.lancamentoService.cadastrarLancamento(this.lancamento)
      .subscribe(
        (_lancamento: any) => {
          this.toastr.success('Lançamento incluído com sucesso!')
          this.lancamentoForm.reset;
          this.router.navigate(['/']);
        }, error => {
          this.toastr.error(error.message, 'Não foi possível adicionar o lançamento');
        }
      );
  }
}
