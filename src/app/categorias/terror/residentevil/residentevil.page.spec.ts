import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidentevilPage } from './residentevil.page';

describe('ResidentevilPage', () => {
  let component: ResidentevilPage;
  let fixture: ComponentFixture<ResidentevilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentevilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
