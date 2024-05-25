import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeluqueroComponent } from './list-peluquero.component';

describe('ListPeluqueroComponent', () => {
  let component: ListPeluqueroComponent;
  let fixture: ComponentFixture<ListPeluqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPeluqueroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPeluqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
