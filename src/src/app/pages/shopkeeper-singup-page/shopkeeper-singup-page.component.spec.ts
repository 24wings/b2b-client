import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperSingupPageComponent } from './shopkeeper-singup-page.component';

describe('ShopkeeperSingupPageComponent', () => {
  let component: ShopkeeperSingupPageComponent;
  let fixture: ComponentFixture<ShopkeeperSingupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperSingupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperSingupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
