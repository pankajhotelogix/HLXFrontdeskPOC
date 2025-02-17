import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupResDetailsComponent } from './group-res-details.component';

describe('GroupResDetailsComponent', () => {
  let component: GroupResDetailsComponent;
  let fixture: ComponentFixture<GroupResDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupResDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupResDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
