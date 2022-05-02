import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslaComponent } from './isla.component';

describe('IslaComponent', () => {
  let component: IslaComponent;
  let fixture: ComponentFixture<IslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
