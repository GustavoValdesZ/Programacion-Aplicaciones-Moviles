import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nba2k25Page } from './nba2k25.page';

describe('Nba2k25Page', () => {
  let component: Nba2k25Page;
  let fixture: ComponentFixture<Nba2k25Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Nba2k25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
