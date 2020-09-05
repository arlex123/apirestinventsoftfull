import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeListComponent } from './three-list.component';

describe('ThreeListComponent', () => {
  let component: ThreeListComponent;
  let fixture: ComponentFixture<ThreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
