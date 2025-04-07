import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersDetailComponent } from './counters-detail.component';

describe('CountersDetailComponent', () => {
  let component: CountersDetailComponent;
  let fixture: ComponentFixture<CountersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
