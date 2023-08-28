import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section05Component } from './section05.component';

describe('Section05Component', () => {
  let component: Section05Component;
  let fixture: ComponentFixture<Section05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section05Component]
    });
    fixture = TestBed.createComponent(Section05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
