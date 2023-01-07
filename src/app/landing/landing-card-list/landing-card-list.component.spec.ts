import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCardListComponent } from './landing-card-list.component';

describe('LandingCardListComponent', () => {
  let component: LandingCardListComponent;
  let fixture: ComponentFixture<LandingCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
