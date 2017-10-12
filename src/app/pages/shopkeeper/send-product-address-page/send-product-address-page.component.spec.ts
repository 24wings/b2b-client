import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProductAddressPageComponent } from './send-product-address-page.component';

describe('SendProductAddressPageComponent', () => {
  let component: SendProductAddressPageComponent;
  let fixture: ComponentFixture<SendProductAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProductAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProductAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
