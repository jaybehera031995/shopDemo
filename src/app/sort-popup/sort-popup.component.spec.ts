import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPopupComponent } from './sort-popup.component';

describe('SortPopupComponent', () => {
  let component: SortPopupComponent;
  let fixture: ComponentFixture<SortPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortPopupComponent]
    });
    fixture = TestBed.createComponent(SortPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
