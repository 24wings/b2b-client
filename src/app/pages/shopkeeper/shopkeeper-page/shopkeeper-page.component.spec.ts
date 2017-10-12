import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperPageComponent } from './shopkeeper-page.component';

describe('ShopkeeperPageComponent', () => {
  let component: ShopkeeperPageComponent;
  let fixture: ComponentFixture<ShopkeeperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
