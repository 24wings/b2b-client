import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperHomePageComponent } from './shopkeeper-home-page.component';

describe('ShopkeeperHomePageComponent', () => {
  let component: ShopkeeperHomePageComponent;
  let fixture: ComponentFixture<ShopkeeperHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
