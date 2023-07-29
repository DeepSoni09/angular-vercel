import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevstempelateurlComponent } from './templatevstempelateurl.component';

describe('TemplatevstempelateurlComponent', () => {
  let component: TemplatevstempelateurlComponent;
  let fixture: ComponentFixture<TemplatevstempelateurlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatevstempelateurlComponent]
    });
    fixture = TestBed.createComponent(TemplatevstempelateurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
