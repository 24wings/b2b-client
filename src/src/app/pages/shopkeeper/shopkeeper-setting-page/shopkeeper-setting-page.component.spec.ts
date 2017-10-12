import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperSettingPageComponent } from './shopkeeper-setting-page.component';

describe('ShopkeeperSettingPageComponent', () => {
  let component: ShopkeeperSettingPageComponent;
  let fixture: ComponentFixture<ShopkeeperSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
