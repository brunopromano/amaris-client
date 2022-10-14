import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelalancamentosComponent } from './tabelalancamentos.component';

describe('TabelalancamentosComponent', () => {
  let component: TabelalancamentosComponent;
  let fixture: ComponentFixture<TabelalancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelalancamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelalancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
