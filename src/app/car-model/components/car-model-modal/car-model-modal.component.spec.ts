import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelModalComponent } from './car-model-modal.component';

describe('CarModelModalComponent', () => {
  let component: CarModelModalComponent;
  let fixture: ComponentFixture<CarModelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarModelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
