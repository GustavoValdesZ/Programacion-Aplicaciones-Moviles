import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WukongPage } from './wukong.page';

describe('WukongPage', () => {
  let component: WukongPage;
  let fixture: ComponentFixture<WukongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WukongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
