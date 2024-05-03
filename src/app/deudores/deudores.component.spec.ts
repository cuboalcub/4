import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudoresComponent } from './deudores.component';

describe('DeudoresComponent', () => {
  let component: DeudoresComponent;
  let fixture: ComponentFixture<DeudoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeudoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeudoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
