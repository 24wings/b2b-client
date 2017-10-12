import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAuthPageComponent } from './company-auth-page.component';

describe('CompanyAuthPageComponent', () => {
  let component: CompanyAuthPageComponent;
  let fixture: ComponentFixture<CompanyAuthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAuthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
