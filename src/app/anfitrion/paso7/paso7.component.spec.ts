import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso7Component } from './paso7.component';

describe('Paso7Component', () => {
  let component: Paso7Component;
  let fixture: ComponentFixture<Paso7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paso7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
