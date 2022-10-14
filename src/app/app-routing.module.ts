import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLancamentosComponent } from './adicionar-lancamento/adicionar-lancamento.component';
import { EditarLancamentoComponent } from './editar-lancamento/editar-lancamento.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { TabelalancamentosComponent } from './tabelalancamentos/tabelalancamentos.component';

const routes: Routes = [
    { path: 'lancamentos', component: TabelalancamentosComponent},
    { path: 'lancamentos/adicionar', component: AdicionarLancamentosComponent },
    { path: 'lancamentos/editar/:id', component: EditarLancamentoComponent },
    { path: 'relatorio', component: RelatorioComponent },
    { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
    { path: '**', redirectTo: 'lancamentos', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }