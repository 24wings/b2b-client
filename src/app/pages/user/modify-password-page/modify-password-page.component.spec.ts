import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPasswordPageComponent } from './modify-password-page.component';

describe('ModifyPasswordPageComponent', () => {
  let component: ModifyPasswordPageComponent;
  let fixture: ComponentFixture<ModifyPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPasswordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
