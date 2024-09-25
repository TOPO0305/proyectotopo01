import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detallenote1adminPage } from './detallenote1admin.page';

describe('Detallenote1adminPage', () => {
  let component: Detallenote1adminPage;
  let fixture: ComponentFixture<Detallenote1adminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Detallenote1adminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
