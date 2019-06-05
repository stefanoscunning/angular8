import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { topnavComponent } from './topnav.component';

describe('topnavComponent', () => {
  let component: topnavComponent;
  let fixture: ComponentFixture<topnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ topnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(topnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
