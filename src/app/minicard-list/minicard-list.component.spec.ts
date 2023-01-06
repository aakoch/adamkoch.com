import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicardListComponent } from './minicard-list.component';

describe('MinicardListComponent', () => {
  let component: MinicardListComponent;
  let fixture: ComponentFixture<MinicardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinicardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
