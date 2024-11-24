import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GodOfWarPage } from './god-of-war.page';

describe('GodOfWarPage', () => {
  let component: GodOfWarPage;
  let fixture: ComponentFixture<GodOfWarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GodOfWarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
