import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductAddressPageComponent } from './return-product-address-page.component';

describe('ReturnProductAddressPageComponent', () => {
  let component: ReturnProductAddressPageComponent;
  let fixture: ComponentFixture<ReturnProductAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
