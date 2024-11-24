import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShooterPage } from './shooter.page';

describe('ShooterPage', () => {
  let component: ShooterPage;
  let fixture: ComponentFixture<ShooterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
