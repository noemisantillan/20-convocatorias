import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaunoComponent } from './convocatoriauno.component';

describe('ConvocatoriaunoComponent', () => {
  let component: ConvocatoriaunoComponent;
  let fixture: ComponentFixture<ConvocatoriaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriaunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
