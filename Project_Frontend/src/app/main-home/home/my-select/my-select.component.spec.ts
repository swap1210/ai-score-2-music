import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectComponent } from './my-select.component';

describe('MySelectComponent', () => {
  let component: MySelectComponent;
  let fixture: ComponentFixture<MySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
