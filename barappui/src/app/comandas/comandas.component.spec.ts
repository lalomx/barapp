import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasComponent } from './comandas.component';

describe('ComandasComponent', () => {
  let component: ComandasComponent;
  let fixture: ComponentFixture<ComandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
