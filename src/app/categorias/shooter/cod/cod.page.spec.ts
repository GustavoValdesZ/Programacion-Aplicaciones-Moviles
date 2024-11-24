import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodPage } from './cod.page';

describe('CodPage', () => {
  let component: CodPage;
  let fixture: ComponentFixture<CodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
