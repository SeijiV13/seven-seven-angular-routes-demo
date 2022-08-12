import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildTwoComponent } from './component-child-two.component';

describe('ComponentChildTwoComponent', () => {
  let component: ComponentChildTwoComponent;
  let fixture: ComponentFixture<ComponentChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
