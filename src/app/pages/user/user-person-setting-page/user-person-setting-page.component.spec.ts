import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonSettingPageComponent } from './user-person-setting-page.component';

describe('UserPersonSettingPageComponent', () => {
  let component: UserPersonSettingPageComponent;
  let fixture: ComponentFixture<UserPersonSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPersonSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
