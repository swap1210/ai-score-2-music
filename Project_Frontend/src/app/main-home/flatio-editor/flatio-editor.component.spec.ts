import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatioEditorComponent } from './flatio-editor.component';

describe('FlatioEditorComponent', () => {
  let component: FlatioEditorComponent;
  let fixture: ComponentFixture<FlatioEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatioEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
