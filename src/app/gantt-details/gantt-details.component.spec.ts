import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttDetailsComponent } from './gantt-details.component';

describe('GanttDetailsComponent', () => {
  let component: GanttDetailsComponent;
  let fixture: ComponentFixture<GanttDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanttDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GanttDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
