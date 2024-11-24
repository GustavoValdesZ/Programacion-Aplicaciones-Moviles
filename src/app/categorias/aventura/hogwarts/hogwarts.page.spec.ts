import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HogwartsPage } from './hogwarts.page';

describe('HogwartsPage', () => {
  let component: HogwartsPage;
  let fixture: ComponentFixture<HogwartsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
