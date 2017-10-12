import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperTransferSettingPageComponent } from './shopkeeper-transfer-setting-page.component';

describe('ShopkeeperTransferSettingPageComponent', () => {
  let component: ShopkeeperTransferSettingPageComponent;
  let fixture: ComponentFixture<ShopkeeperTransferSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperTransferSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperTransferSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
