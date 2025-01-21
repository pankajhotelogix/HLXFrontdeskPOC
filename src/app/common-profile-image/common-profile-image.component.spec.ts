import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProfileImageComponent } from './common-profile-image.component';

describe('CommonProfileImageComponent', () => {
  let component: CommonProfileImageComponent;
  let fixture: ComponentFixture<CommonProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonProfileImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
