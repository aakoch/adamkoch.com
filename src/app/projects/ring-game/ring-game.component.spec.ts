import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingGameComponent } from './ring-game.component';

describe('RingGameComponent', () => {
  let component: RingGameComponent;
  let fixture: ComponentFixture<RingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
