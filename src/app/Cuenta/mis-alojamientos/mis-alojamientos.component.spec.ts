import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAlojamientosComponent } from './mis-alojamientos.component';

describe('MisAlojamientosComponent', () => {
  let component: MisAlojamientosComponent;
  let fixture: ComponentFixture<MisAlojamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisAlojamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
