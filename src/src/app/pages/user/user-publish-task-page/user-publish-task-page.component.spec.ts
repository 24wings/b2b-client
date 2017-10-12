import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublishTaskPageComponent } from './user-publish-task-page.component';

describe('UserPublishTaskPageComponent', () => {
  let component: UserPublishTaskPageComponent;
  let fixture: ComponentFixture<UserPublishTaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPublishTaskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPublishTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
