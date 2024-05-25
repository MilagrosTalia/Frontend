import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarPeluqueroComponent } from './agregar-editar-peluquero.component';

describe('AgregarEditarPeluqueroComponent', () => {
  let component: AgregarEditarPeluqueroComponent;
  let fixture: ComponentFixture<AgregarEditarPeluqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarPeluqueroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEditarPeluqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
