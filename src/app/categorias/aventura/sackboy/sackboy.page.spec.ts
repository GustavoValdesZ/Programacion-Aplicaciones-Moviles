import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SackboyPage } from './sackboy.page';

describe('SackboyPage', () => {
  let component: SackboyPage;
  let fixture: ComponentFixture<SackboyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SackboyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
