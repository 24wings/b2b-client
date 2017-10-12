import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagPageComponent } from './product-tag-page.component';

describe('ProductTagPageComponent', () => {
  let component: ProductTagPageComponent;
  let fixture: ComponentFixture<ProductTagPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTagPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
