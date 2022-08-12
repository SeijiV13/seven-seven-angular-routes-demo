import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildOneComponent } from './component-child-one.component';

describe('ComponentChildOneComponent', () => {
  let component: ComponentChildOneComponent;
  let fixture: ComponentFixture<ComponentChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
