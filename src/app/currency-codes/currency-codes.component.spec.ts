import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCodesComponent } from './currency-codes.component';

describe('CurrencyCodesComponent', () => {
  let component: CurrencyCodesComponent;
  let fixture: ComponentFixture<CurrencyCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
