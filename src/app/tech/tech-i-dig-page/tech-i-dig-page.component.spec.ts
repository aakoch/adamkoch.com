import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIDigPageComponent } from './tech-i-dig-page.component';

describe('TechIDigPageComponent', () => {
  let component: TechIDigPageComponent;
  let fixture: ComponentFixture<TechIDigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechIDigPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechIDigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
