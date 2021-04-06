import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourdisplayComponent } from './labourdisplay.component';

describe('LabourdisplayComponent', () => {
  let component: LabourdisplayComponent;
  let fixture: ComponentFixture<LabourdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
