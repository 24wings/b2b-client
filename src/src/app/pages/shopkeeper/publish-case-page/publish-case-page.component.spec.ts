import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCasePageComponent } from './publish-case-page.component';

describe('PublishCasePageComponent', () => {
  let component: PublishCasePageComponent;
  let fixture: ComponentFixture<PublishCasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishCasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
