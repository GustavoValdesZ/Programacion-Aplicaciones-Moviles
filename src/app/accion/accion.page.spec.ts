import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccionPage } from './accion.page';

describe('AccionPage', () => {
  let component: AccionPage;
  let fixture: ComponentFixture<AccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
