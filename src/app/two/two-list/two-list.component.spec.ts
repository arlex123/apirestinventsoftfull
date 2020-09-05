import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoListComponent } from './two-list.component';

describe('TwoListComponent', () => {
  let component: TwoListComponent;
  let fixture: ComponentFixture<TwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
