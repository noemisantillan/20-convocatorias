import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraileComponent } from './braile.component';

describe('BraileComponent', () => {
  let component: BraileComponent;
  let fixture: ComponentFixture<BraileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BraileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
