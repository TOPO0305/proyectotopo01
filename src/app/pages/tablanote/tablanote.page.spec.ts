import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablanotePage } from './tablanote.page';

describe('TablanotePage', () => {
  let component: TablanotePage;
  let fixture: ComponentFixture<TablanotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablanotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
