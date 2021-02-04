import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsPageComponent } from './spells-page.component';

describe('SpellsPageComponent', () => {
  let component: SpellsPageComponent;
  let fixture: ComponentFixture<SpellsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
