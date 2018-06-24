import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsViewComponent } from './shows-view.component';

describe('ShowsViewComponent', () => {
  let component: ShowsViewComponent;
  let fixture: ComponentFixture<ShowsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
