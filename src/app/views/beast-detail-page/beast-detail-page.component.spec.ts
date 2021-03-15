import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastDetailPageComponent } from './beast-detail-page.component';

describe('BeastDetailPageComponent', () => {
  let component: BeastDetailPageComponent;
  let fixture: ComponentFixture<BeastDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeastDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
