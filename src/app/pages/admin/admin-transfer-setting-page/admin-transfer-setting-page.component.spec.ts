import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransferSettingPageComponent } from './admin-transfer-setting-page.component';

describe('AdminTransferSettingPageComponent', () => {
  let component: AdminTransferSettingPageComponent;
  let fixture: ComponentFixture<AdminTransferSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransferSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransferSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
