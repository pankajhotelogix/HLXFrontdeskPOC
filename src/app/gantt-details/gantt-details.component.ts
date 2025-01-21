import { Component, Inject, ViewEncapsulation, ViewChild, ElementRef, VERSION } from '@angular/core';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import { WeekService, EventSettingsModel,TimelineViewsService, ResizeService, WorkHoursModel, DragAndDropService, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ItemModel, MenuEventArgs, DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { CheckBoxComponent, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
import { DateRangePicker, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common'
import { CommonModule } from '@angular/common';
import { Country, State, City, IState, ICity }  from 'country-state-city';
@Component({
  selector: 'app-gantt-details',
  standalone: true,
  providers: [WeekService, ResizeService, DragAndDropService, TimelineViewsService, DatePipe],
  encapsulation: ViewEncapsulation.None,
  imports: [ScheduleModule,DropDownButtonModule, CheckBoxModule, FormsModule, DateRangePickerModule, SwitchModule, CommonModule],
  templateUrl: './gantt-details.component.html',
  styleUrl: './gantt-details.component.scss'
})
export class GanttDetailsComponent {
  @ViewChild('country') country: ElementRef | undefined
  @ViewChild('city') city: ElementRef | undefined
  @ViewChild('state') state: ElementRef | undefined
  name = 'Angular ' + VERSION.major;
  countries = Country.getAllCountries();
  states: IState[] = [];
  cities: ICity[] | null = null;

  selectedCountry: any;
  selectedState : any;
  selectedCity : any;
  

  onCountryChange($event: any): void {
    if (this.country && this.country.nativeElement && this.country.nativeElement.value) {
      this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
    }
    this.selectedCountry = this.country?.nativeElement?.value ? JSON.parse(this.country.nativeElement.value) : null;
    this.cities = this.selectedState = this.selectedCity = null;
  }
  
  onStateChange($event: any): void {
    if (this.country && this.country.nativeElement && this.state && this.state.nativeElement && this.country.nativeElement.value && this.state.nativeElement.value) {
      this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode);
    }
    this.selectedState = this.state?.nativeElement?.value ? JSON.parse(this.state.nativeElement.value) : null;
    this.selectedCity = null;
  }
  
  onCityChange($event: any): void {
    this.selectedCity = this.city?.nativeElement?.value ? JSON.parse(this.city.nativeElement.value) : null;
  }

  clear(type: string): void {
    switch(type) {
      case 'country':
        if (this.country && this.country.nativeElement) {
          this.selectedCountry = this.country.nativeElement.value = this.states = this.cities = this.selectedState = this.selectedCity = [];
        }
        break;
      case 'state':
        if (this.state && this.state.nativeElement) {
          this.state.nativeElement.value = null;
        }
        this.selectedState = this.cities = this.selectedCity = null;
        break;
      case 'city':
        this.selectedCity = this.city?.nativeElement?.value ?? null;
        break;
    }
  }
}