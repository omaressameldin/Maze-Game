import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarControllerComponent } from './avatar-controller.component';

describe('AvatarControllerComponent', () => {
  let component: AvatarControllerComponent;
  let fixture: ComponentFixture<AvatarControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
