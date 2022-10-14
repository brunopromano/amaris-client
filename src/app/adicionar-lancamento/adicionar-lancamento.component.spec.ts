import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLancamentosComponent } from './adicionar-lancamento.component';

describe('AdicionarLancamentosComponent', () => {
  let component: AdicionarLancamentosComponent;
  let fixture: ComponentFixture<AdicionarLancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarLancamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
