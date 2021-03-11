import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaryPageComponent } from './bestiary-page.component';

describe('BestiaryPageComponent', () => {
  let component: BestiaryPageComponent;
  let fixture: ComponentFixture<BestiaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestiaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestiaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
