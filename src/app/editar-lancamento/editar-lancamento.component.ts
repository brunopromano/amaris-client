import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILancamento } from '../_models/ILancamento';
import { LancamentoService } from '../_services/lancamento.service';

@Component({
  selector: 'app-editar-lancamento',
  templateUrl: './editar-lancamento.component.html',
  styleUrls: ['./editar-lancamento.component.css']
})
export class EditarLancamentoComponent implements OnInit {
  lancamento!: ILancamento;
  lancamentoForm!: FormGroup;

  constructor(
    private lancamentoService: LancamentoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.inicializaForm();

    this.lancamentoService.obterLancamentoPorId(id).subscribe(
      (_lancamento: ILancamento) => {
        this.lancamento = _lancamento;
        console.log(this.lancamento);
        this.atualizarForm(this.lancamento);
      }, error => {
        console.log(error);
      }
    );
  }

  inicializaForm() {
    this.lancamentoForm = this.formBuilder.group({
      id: [null, Validators.required],
      dataHoraInsercao: [null, Validators.required],
      dataLancamento: [null, Validators.required],
      tipoLancamento: [null, Validators.required],
      valorBrl: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  atualizarForm(lancamento: ILancamento) {
    this.lancamentoForm.patchValue({
      id: lancamento.id,
      dataHoraInsercao: lancamento.dataHoraInsercao,
      dataLancamento: lancamento.dataLancamento,
      tipoLancamento: lancamento.tipoLancamento,
      valorBrl: lancamento.valorBrl
    });

    console.log(this.lancamentoForm.value)
  }

  atualizarLancamento() {
    let lancamentoEditado: ILancamento = Object.assign({}, this.lancamentoForm.value);

    this.lancamentoService.atualizarLancamento(lancamentoEditado).subscribe(
      () => {
        this.toastr.success('Lançamento atualizado com sucesso!');
        this.router.navigate(['/']);
      }, error => {
        this.toastr.error(`Não foi possível atualizar o lançamento (id=${lancamentoEditado.id}). Erro: ${error}`);
      }
    );
  }
}
