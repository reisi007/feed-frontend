import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionListenerComponent } from './intersection-listener.component';

describe('IntersectionListenerComponent', () => {
  let component: IntersectionListenerComponent;
  let fixture: ComponentFixture<IntersectionListenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntersectionListenerComponent]
    });
    fixture = TestBed.createComponent(IntersectionListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
