import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detallenote1Page } from './detallenote1.page';

describe('Detallenote1Page', () => {
  let component: Detallenote1Page;
  let fixture: ComponentFixture<Detallenote1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Detallenote1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
