import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoridosComponent } from './convocatoridos.component';

describe('ConvocatoridosComponent', () => {
  let component: ConvocatoridosComponent;
  let fixture: ComponentFixture<ConvocatoridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoridosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
