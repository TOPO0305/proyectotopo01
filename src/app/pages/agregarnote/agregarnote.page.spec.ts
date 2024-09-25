import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarnotePage } from './agregarnote.page';

describe('AgregarnotePage', () => {
  let component: AgregarnotePage;
  let fixture: ComponentFixture<AgregarnotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
