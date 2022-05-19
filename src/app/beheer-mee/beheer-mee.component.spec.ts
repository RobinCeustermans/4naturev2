import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerMeeComponent } from './beheer-mee.component';

describe('BeheerMeeComponent', () => {
  let component: BeheerMeeComponent;
  let fixture: ComponentFixture<BeheerMeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeheerMeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerMeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
