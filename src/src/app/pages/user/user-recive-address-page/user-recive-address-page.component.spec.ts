import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReciveAddressPageComponent } from './user-recive-address-page.component';

describe('UserReciveAddressPageComponent', () => {
  let component: UserReciveAddressPageComponent;
  let fixture: ComponentFixture<UserReciveAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReciveAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReciveAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
