import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesnodialogmodalComponent } from './yesnodialogmodal.component';

describe('YesnodialogmodalComponent', () => {
  let component: YesnodialogmodalComponent;
  let fixture: ComponentFixture<YesnodialogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesnodialogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesnodialogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
