import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StillwakesPage } from './stillwakes.page';

describe('StillwakesPage', () => {
  let component: StillwakesPage;
  let fixture: ComponentFixture<StillwakesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StillwakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
