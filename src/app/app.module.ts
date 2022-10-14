import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from 'ngx-currency';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdicionarLancamentosComponent } from './adicionar-lancamento/adicionar-lancamento.component';
import { TabelalancamentosComponent } from './tabelalancamentos/tabelalancamentos.component';
import { LancamentoService } from './_services/lancamento.service';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { EditarLancamentoComponent } from './editar-lancamento/editar-lancamento.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdicionarLancamentosComponent,
    TabelalancamentosComponent,
    RelatorioComponent,
    EditarLancamentoComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    LancamentoService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
