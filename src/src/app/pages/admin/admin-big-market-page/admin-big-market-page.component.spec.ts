import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigMarketPageComponent } from './admin-big-market-page.component';

describe('AdminBigMarketPageComponent', () => {
  let component: AdminBigMarketPageComponent;
  let fixture: ComponentFixture<AdminBigMarketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBigMarketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
