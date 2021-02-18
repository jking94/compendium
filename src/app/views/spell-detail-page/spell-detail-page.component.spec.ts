import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDetailPageComponent } from './spell-detail-page.component';

describe('SpellDetailPageComponent', () => {
  let component: SpellDetailPageComponent;
  let fixture: ComponentFixture<SpellDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
