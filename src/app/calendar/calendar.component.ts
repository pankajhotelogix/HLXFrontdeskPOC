import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import {
  addClass,
  L10n,
  Internationalization,
  isNullOrUndefined,
  removeClass,
} from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';
import {
  ToastComponent,
  ToastModule,
} from '@syncfusion/ej2-angular-notifications';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import {
  AppBarModule,
  HeaderPosition,
  SidebarModule,
  TabAllModule,
  TabComponent,
  TreeViewComponent,
} from '@syncfusion/ej2-angular-navigations';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  TimelineViewsService,
  TimelineMonthService,
  ResizeService,
  DragAndDropService,
  EventSettingsModel,
  ScheduleComponent,
  CellClickEventArgs,
  GroupModel,
  WorkHoursModel,
  ResourceDetails,
  View,
  EventRenderedArgs,
  EventClickArgs,
  RenderCellEventArgs,
  HoverEventArgs,
  ScheduleModule,
  RecurrenceEditorModule,
} from '@syncfusion/ej2-angular-schedule';
import { QuickPopups } from '@syncfusion/ej2-schedule/src/schedule/popups/quick-popups';
import { FieldValidator } from '@syncfusion/ej2-schedule/src/schedule/popups/form-validator';
import {
  DropDownList,
  ComboBox,
  ListBoxAllModule,
  DropDownListModule,
  DropDownListComponent,
} from '@syncfusion/ej2-angular-dropdowns';
import { CalendarSettings } from '../calendar-settings';
import { DataService } from '../data.service';
import {
  DatePicker,
  DatePickerModule,
  DateRangePicker,
  DateRangePickerModule,
  TimePickerModule,
} from '@syncfusion/ej2-angular-calendars';
import { MainService } from '../main.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';
import {
  ProgressButtonModule,
  SplitButtonModule,
} from '@syncfusion/ej2-angular-splitbuttons';

import { HttpClientModule } from '@angular/common/http';
import { FirestoreService } from '../firestore.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { StayDetailsComponent } from "../stay-details/stay-details.component";
import { Router } from '@angular/router';
L10n.load({
  'en-US': {
    schedule: {
      newEvent: 'Add Quick Reservation',
      editEvent: 'Edit Reservation',
    },
  },
});
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    ScheduleModule,
    RecurrenceEditorModule,
    CheckBoxModule,
    SplitButtonModule,
    DatePickerModule,
    TimePickerModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ListBoxAllModule,
    DateRangePickerModule,
    HttpClientModule,
    AppBarModule,
    ProgressButtonModule,
    DropDownListModule,
    AngularFireDatabaseModule,
    TabAllModule,
    StayDetailsComponent
],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
    DragAndDropService,
    ApiService,
    MainService,
    FirestoreService,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  // @ViewChild("addEditPatientObj") addEditPatientObj: AddEditPatientComponent;
  // @ViewChild("addEditDoctorObj") addEditDoctorObj: AddEditDoctorComponent;
  @ViewChild('scheduleObj') scheduleObj?: ScheduleComponent;
  @ViewChild('treeObj') treeObj?: TreeViewComponent;
  @ViewChild('specialistObj') specialistObj?: DialogComponent;
  @ViewChild('dropdownObj') dropdownObj?: DropDownList;
  @ViewChild('waitingObj') waitingObj?: DialogComponent;
  @ViewChild('calendarToast') toastObj?: ToastComponent;
  @ViewChild('datepicker', { static: false }) datePicker?: DatePicker;
  @ViewChild('dateRangePicker', { static: false })
  dateRangePicker?: DateRangePicker;
  selectedDateRange: string = '';
  @ViewChild('modes')
  public dropDownObj: DropDownListComponent | undefined;
  @ViewChild('place')
  public placeObj: DropDownListComponent | undefined;
  @ViewChild('adaptiveTab')
  public tabObj: TabComponent | undefined;
  public selectedView: string = 'Month';
  public isSelected = true;
  public dayInterval = 1;
  public weekInterval = 1;
  public monthInterval = 1;
  public position: Record<string, any> = { X: 'Right', Y: 'Bottom' };
  public toastContent?: string;
  public toastWidth = '580px';
  public calendarSettings?: CalendarSettings;
  public isTreeItemDropped = false;
  public draggedItemId = '';
  public patientValue?: number;
  public roomList: any;
  public guestList: any;
  public sessionalRate: any;
  public calcualteFare: any;
  public rateList: any;
  public rateDetails: any;
  showDatePicker = false;
  public timeScale: any = { enable: true, interval: 1440, slotCount: 1 };
  public startDate!: Date;
  public endDate!: Date;
  public dropDownValue: any = '31 Day';
  selectedStartDate?: string;
  selectedEndDate?: string;
  public group: GroupModel = {
    enableCompactView: false,
    resources: ['Departments', 'Doctors'],
  };
  public hideStartDate: Date = new Date(2021, 7, 10);
  public hideEndDate: Date = new Date(2021, 7, 15);
  public field: Record<string, any> = {
    dataSource: [],
    id: 'Id',
    text: 'Name',
  };
  public requestParams = {
    rsv_type: 'f',
    room_type_id: '',
    status: 'RESERVE',
    checkin_date: '',
    checkout_date: '',
    adult: 1,
    child: 0,
    room_id: '',
    bed: 1,
    rate_id: '',
    preferences: 'hello preferences',
    message: 'hello message from guest',
    owner_details: {
      first_name: '',
      last_name: '',
      phone_number: '',
    },
  };
  public requestCalculationFare = {
    hotelid: 4444,
    roomTypeId: '',
    fromDate: '',
    toDate: '',
    adult: this.requestParams.adult,
    child: this.requestParams.child,
    bed: this.requestParams.bed,
    rateId: '',
  };
  public requestRateParams = {
    room_type_id: '',
    fromdate: '',
    todate: '',
  };
  @ViewChild('dateformat')
  public roomfare: any = 0;
  public vaccantRoomList: any;
  public finalAmount: number = 0;
  public dropFields: Record<string, any> = { text: 'Name', value: 'Id' };
  public allowDragAndDrop = true;
  public allowMultiRowSelection: boolean = true;
  public instance: Internationalization = new Internationalization();
  public initialLoad = true;
  public currentDate?: Date;
  public selectedDate: Date = new Date(2021, 7, 1);
  public blockData: object[] = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2021, 8, 1, 0, 0),
      EndTime: new Date(2021, 8, 3, 24, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
      IsBlock: true,
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 14, 12, 0),
      EndTime: new Date(2018, 1, 14, 14, 0),
    },
  ];
  public eventSettings: EventSettingsModel = {
    dataSource: this.blockData,
  };
  public specialistCategory?: Record<string, any>[];
  public activePatientData?: Record<string, any>;
  public resourceDataSource: { DepartmentId: number; [key: string]: any }[] = [];
  public filteredDoctors: { DepartmentId: number; [key: string]: any }[] = [];
  public selectedDoctorId: number | null = null;
  public firstDayOfWeek = 1;
  public startHour?: string;
  public endHour?: string;
  public selectedDated?: Date;
  public isTimelineView = false;
  public currentView?: string;
  public importBookingData?: Record<string, any>[];
  public doctorsData?: Record<string, any>[];
  public hospitalData?: Record<string, any>[];
  public patientsData?: Record<string, any>[];
  public activeDoctorData?: Record<string, any>[];
  public specialistData?: Record<string, any>[];
  public data: any = [];
  public showQuickInfo: Boolean = false;
  public eventData?: Record<string, any>[];
  public workDays: Array<number> = [0, 1, 2, 3, 4, 5, 6];
  public workHours: WorkHoursModel = { start: '08:00', end: '21:00' };
  public minDate: Date = new Date('1/15/2017');
  public maxDate: Date = new Date('12/20/2017');
  public comboBox?: ComboBox;
  public fields: Record<string, any> = { text: 'Name', value: 'Id' };
  daysInMonth: number[] = [];
  bookings: any[] = [];
  public isChecked: boolean = false;
  public allowMultiple = false;
  defaultStartDate: Date = new Date(2021, 7, 1);
  defaultEndDate: Date = new Date(2021, 8, 1);
  public scheduleView: View = 'TimelineMonth';
  public datas: string[] = [
    '1 Day',
    '3 Day',
    '15 Day',
    '31 Day',
    'TimelineWeek',
  ];
  public selectedDepartmentId?: number;
  public getDateParts(date: Date) {
    const day = date.getDate();
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dayOfWeek = dayNames[date.getDay()];
    return {
      day,
      abbreviated: dayOfWeek,
    };
  }
  getDate(date?: string) {
    let targetDate = date ? new Date(date) : new Date();
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  public onPopupOpen(args: any) {
    console.log(args);
    this.requestParams.room_type_id = args.data.DepartmentId;
    this.requestParams.room_id = args.data.DoctorId;
    this.requestParams.checkin_date = this.getDate(args.data.StartTime);
    this.requestParams.checkout_date = this.getDate(args.data.EndTime);
    this.requestRateParams.room_type_id = args.data.DepartmentId;
    this.requestRateParams.fromdate = this.getDate(args.data.StartTime);
    this.requestRateParams.todate = this.getDate(args.data.EndTime);
    this.requestCalculationFare.roomTypeId = args.data.DepartmentId;
    this.requestCalculationFare.fromDate = this.getDate(args.data.StartTime);
    this.requestCalculationFare.toDate = this.getDate(args.data.EndTime);
    if (
      args.type == 'QuickInfo' &&
      args.target.classList.contains('e-work-cells')
    ) {
      args.cancel = true;
      this.scheduleObj?.openEditor(args.data, 'Add');
      this.getSessionalRateList();
      //this.getAvailableRoomList();
      args.element.classList.add('dialog-open');
      args.element.setAttribute('id', 'srk-id');
      let bookingsData = localStorage.getItem('bookingsData');
      let locBookings = bookingsData ? JSON.parse(bookingsData) : {};
      if (args.data && args.data[0]) {
        let rec = args.data[0];
        locBookings[rec.Id] = rec;
        this.updateBookingData(Object.values(locBookings));
        localStorage.setItem('bookingsData', JSON.stringify(locBookings));
      }
    }
  }

  constructor(
    private dataService: DataService,
    private mainService: MainService,
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    (QuickPopups.prototype as any).applyFormValidation = () => {};
    (FieldValidator.prototype as any).errorPlacement =
      this.dataService.errorPlacement;
  }
  public onHover(args: HoverEventArgs): void {
    const headerCells =
      document.querySelectorAll<HTMLElement>('.e-header-cells');
    removeClass(headerCells, 'hover-bg');

    if (args.element.classList.contains('e-work-cells')) {
      const dataDate = args.element.getAttribute('data-date');
      if (dataDate) {
        const headerCell = document.querySelector<HTMLElement>(
          `.e-header-cells[data-date="${dataDate}"]`
        );
        if (headerCell) {
          addClass([headerCell], 'hover-bg');
        }
      }
    }
  }
  private getEventData(): Record<string, any> {
    if (!this.scheduleObj) {
      throw new Error('Schedule object is not initialized.');
    }

    const date: Date = this.scheduleObj.selectedDate as Date;
    const currentTime = new Date();
    return {
      Id: this.scheduleObj.getEventMaxID(),
      Subject: '',
      StartTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        currentTime.getHours(),
        0,
        0
      ),
      EndTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        currentTime.getHours() + 1,
        0,
        0
      ),
      Location: '',
      Description: '',
      IsAllDay: false,
      CalendarId: 1,
    };
  }
  public onCellSingleClick(args: CellClickEventArgs): void {
    args.cancel = true;
  }
  navigateDate(days: number) {
    const currentDate = this.selectedDate;
    this.selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + days
    );
    this.loadBookings();
  }

  updateBookingData(records: any) {
    let rec = JSON.parse(JSON.stringify(records)) as Record<string, any>[];
    this.eventSettings.dataSource = rec;
  }
  onActionBegin(event: any) {
    if (event.requestType === 'eventCreate') {
      const data: Record<string, any> =
        event.data instanceof Array ? event.data[0] : event.data;
      this.selectedDated = data['StartTime'];
    }
  }
  onChange(): void {
    if (this.datePicker?.value) {
      this.selectedDate = this.datePicker.value;
      if (this.selectedDate) {
        const endDate = new Date(this.selectedDate);
        endDate.setMonth(endDate.getMonth() + 1);

        this.selectedDateRange = `${this.formatDate(
          this.selectedDate
        )} - ${this.formatDate(endDate)}`;
      }
      this.loadBookings();
    }
  }
  openDatePicker() {
    this.datePicker?.show();
  }
  openDateRangePicker() {
    this.dateRangePicker?.show();
  }
  getRoomList(): void {
    this.mainService
      .getRoomTypeList()
      .pipe(
        catchError((err) => {
          console.error('Error retrieving room list:', err);
          alert('Error retrieving room list. Please try again later.');
          return of(null);
        })
      )
      .subscribe((res: any) => {
        if (res?.data) {
          const records = res.data;
          const list: any[] = Object.entries(records);

          this.specialistCategory = list.reduce(
            (acc: any[], [key, value]: any) => {
              acc.push({
                DepartmentId: key,
                Id: value.name,
                Text: value.name,
                Color: '#F538B2',
              });
              return acc;
            },
            []
          );

          this.resourceDataSource = list.reduce(
            (acc: any[], [key, value]: any) => {
              const roomArr = Object.keys(value.rooms || {}).map(
                (roomKey: any) => ({
                  Text: value.rooms[roomKey].name,
                  Name: value.rooms[roomKey].name,
                  Id: roomKey,
                  DepartmentId: key,
                  Color: '#bbdc00',
                  Designation: 'Clinical Research Scientist',
                })
              );
              acc = [...acc, ...roomArr];
              return acc;
            },
            []
          );
        }
      });
  }
  ngOnInit(): void {
    this.updateDays(new Date());
    this.getRoomList();
    this.loadBookings();
    
  }
  formatDateNew(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  loadBookings(): void {
    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }
    const startDate = new Date(this.selectedDate);
    const currentDate = this.selectedDate;
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 30
    );
    this.selectedStartDate = this.formatDateNew(startDate);
    this.selectedEndDate = this.formatDateNew(endDate);
    if (this.selectedStartDate && this.selectedEndDate) {
      this.firestoreService
        .getItemsByDateRange(this.selectedStartDate, this.selectedEndDate)
        .subscribe((data: any[]) => {
          //let locData1 = (data as any[]) || [];
          let locData = data;
          console.log(locData);
          locData = locData.map((booking: any, index) => ({
            Id: index + 1,
            Name: booking?.owner_details?.first_name || 'Unknown',
            StartTime: booking?.checkin_date
              ? new Date(
                  new Date(booking.checkin_date).getFullYear(),
                  new Date(booking.checkin_date).getMonth(),
                  new Date(booking.checkin_date).getDate(),
                  14,
                  0
                )
              : null,
            EndTime: booking?.checkout_date
              ? new Date(
                  new Date(booking.checkout_date).getFullYear(),
                  new Date(booking.checkout_date).getMonth(),
                  new Date(booking.checkout_date).getDate(),
                  11,
                  0
                )
              : null,
            Description: booking?.message || 'No description',
            DepartmentId: booking?.room_type_id || 'Unknown',
            Status: booking?.status || 'Unknown',
            DoctorId: booking?.room_id || 'Unknown',
          }));
          this.eventData = this.hospitalData =
            this.dataService.getHospitalData();
          let storedHospitalData = locData;
          let locBookings = storedHospitalData || this.hospitalData;
          this.calendarSettings = this.dataService.getCalendarSettings();
          this.eventSettings = {
            dataSource: locBookings,
            query: new Query(),
            resourceColorField: this.calendarSettings.bookingColor,
            fields: {
              subject: { name: 'Name' },
            },
          };
        });
      if (this.selectedDepartmentId) {
        this.onDepartmentChange(this.selectedDepartmentId);
      }
      this.calculateDaysInMonth();
      this.selectedDateRange = `${this.formatDate(
        startDate
      )} - ${this.formatDate(endDate)}`;
      this.dataService.updateActiveItem('calendar');
    }
  }
  public getResourceName(value: ResourceDetails): string {
    if (value.resourceData) {
      const resourceTextField = value.resource?.textField;
      return resourceTextField
        ? (value.resourceData[resourceTextField] as string)
        : value.resourceName ?? '';
    }
    return value.resourceName ?? '';
  }
  calculateDaysInMonth(): void {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }
  public onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.scheduleObj?.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor =
        categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  public onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == 'workCells') {
      if (args.date) {
        if (args.date.getDay() === 6) {
          (args.element as any).style.background = '#888888 ';
          (args.element as any).style.opacity = '0.1';
        }
        if (args.date.getDay() === 0) {
          (args.element as any).style.background = '#888888';
          (args.element as any).style.opacity = '0.1';
        }
      }
    }
  }
  public getEventDetails(data: Record<string, any>): string {
    return (
      this.instance.formatDate(new Date(data['StartTime']), {
        type: 'date',
        skeleton: 'long',
      }) +
      '(' +
      this.getString(new Date(data['StartTime']), 'hm') +
      '-' +
      this.getString(new Date(data['EndTime']), 'hm') +
      ')'
    );
  }

  public getEventTime(data: Record<string, any>): string {
    return (
      this.getString(new Date(data['StartTime']), 'MMMd') +
      ',' +
      this.getString(new Date(data['StartTime']), 'hm') +
      '-' +
      this.getString(new Date(data['EndTime']), 'hm')
    );
  }

  public getString(value: Date, type: string): string {
    return this.instance.formatDate(new Date(value), {
      type: 'dateTime',
      skeleton: type,
    });
  }
  public startDateParser(data: string) {
    if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.startDate)) {
      return new Date(this.startDate);
    }
    return new Date();
  }

  public endDateParser(data: string) {
    if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.endDate)) {
      return new Date(this.endDate);
    }
    return new Date();
  }
  public onDateChange(args: ChangeEventArgs): void {
    if (!isNullOrUndefined(args.event as any)) {
    }
  }

  oonViewChange(event: any): void {
    const selectedValue = event.value;
    let currentDate = new Date();
    if (selectedValue === 'Next Month') {
      currentDate.setMonth(currentDate.getMonth() + 1);
    } else if (selectedValue === 'Previous Month') {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }
    this.updateDays(currentDate);
  }
  updateDays(date: Date): void {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInThisMonth = new Date(year, month + 1, 0).getDate();

    this.daysInMonth = Array.from({ length: daysInThisMonth }, (_, i) => i + 1);
  }
  public resetDateValue(date: Date, item: Date): Date {
    return new Date(
      new Date(date).setFullYear(
        item.getFullYear(),
        item.getMonth(),
        item.getDate()
      )
    );
  }
  public updateDateRange(startDate: Date, endDate: Date): void {
    const startString = this.formatDate(startDate);
    const endString = this.formatDate(endDate);
    this.selectedDateRange = `${startString} - ${endString}`;
    console.log(this.selectedDateRange);
  }

  public formatDate(date: Date): string {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    } as const;
    return date.toLocaleDateString('en-US', options);
  }
  public getDepartmentNameById(departmentId: number): string {
    const department = this.specialistCategory?.find(
      (dep) => dep['DepartmentId'] === departmentId
    );
    return department ? department['Text'] : 'Unknown Room';
  }
  public onDepartmentChange(departmentId: number): void {
    if (departmentId) {
      this.filteredDoctors = this.resourceDataSource.filter(
        (doctor) => doctor.DepartmentId === departmentId
      );
    } else {
      this.filteredDoctors = [];
    }
    this.selectedDoctorId = null;
  }
  getGuestlist(): void {
    this.mainService.getGuestlist().subscribe({
      next: (res: any) => {
        this.guestList = res.data;
      },
      error: (err) => {
        console.error('Failed to load guest list:', err);
        alert('An error occurred while fetching the guest list.');
      },
    });
  }
  getSessionalRateList(): void {
    this.mainService.getSessionalRateList(this.requestRateParams).subscribe({
      next: (res: any) => {
        this.sessionalRate = res.data[this.requestRateParams.fromdate];
        this.rateList = res;

        if (this.sessionalRate.length > 0) {
          this.requestParams.rate_id = this.sessionalRate[0].package_id;
        }
        this.reloadBookingFare();
      },
      error: (err: any) => {
        console.error('Failed to load rate list:', err);
        alert('An error occurred while fetching the rate list.');
      },
    });
  }
  reloadBookingFare() {
    const { adult: adults, child: children, rate_id: rateId } = this.requestParams;
    const totalPersons = adults + children;
    const maxChildOccupancy = 3;
  
    if (totalPersons >= 4) {
      alert('Total Occupancy cannot be greater than Higher Occupancys');
      return;
    }
  
    if (!this.rateList?.data) {
      alert('Rate data is unavailable');
      return;
    }
  
    const totalDates = Object.keys(this.rateList.data);
    this.roomfare = 0;
    this.finalAmount = 0;
  
    for (const date of totalDates) {
      const datePrices = this.rateList.data[date];
      const selectedPackage = datePrices.find((pac: any) => pac.package_id === rateId);
  
      if (!selectedPackage) {
        alert('No package found for the selected rate');
        return;
      }
  
      const rateGrid = selectedPackage.rategrid_grid_data;
      const adultRateIndex = rateGrid.findIndex((rate: any) => rate.occupancy === adults);
  
      if (adultRateIndex < 0) {
        alert('Total Occupancy cannot be greater than Higher Occupancys');
        return;
      }
  
      const adultRate = parseFloat(rateGrid[adultRateIndex].ratehigh);
      const childRates = rateGrid.slice(adultRateIndex + 1, adultRateIndex + 1 + Math.min(maxChildOccupancy, children))
        .map((rate: any) => parseFloat(rate.extchildratehigh));
  
      const singleDateFare = adultRate + childRates.reduce((sum: any, rate: any) => sum + rate, 0);
  
      if (!this.roomfare) {
        this.roomfare = adultRate;
      }
  
      this.finalAmount += singleDateFare;
    }
  }
  
  // reloadBookingFare() {
  //   const totalPersons = this.requestParams.adult + this.requestParams.child;
  //   if (totalPersons >= 4) {
  //     alert('Total Occupancy cannot be greater than Higher Occupancys');
  //     return;
  //   }
  //   let occupancyChild = this.requestParams.child;
  //   let occupancyAdult = this.requestParams.adult;
  //   const totalDates = Object.keys(this.rateList.data);
  //   this.roomfare = 0;
  //   const maxChildOccupancy = 3;
  //   this.finalAmount = 0;
  //   for (let d of totalDates) {
  //     let singleDateFare: number = 0;
  //     let datePrices = this.rateList.data[d];
  //     const selectedPackage = datePrices.find((pac: any) => {
  //       return pac.package_id == this.requestParams.rate_id;
  //     });
  //     if (!selectedPackage) {
  //       alert('no package');
  //       return;
  //     }
  //     let rategrid_grid_data = selectedPackage.rategrid_grid_data;

  //     const rateDetailIndex = rategrid_grid_data.findIndex((rate: any) => {
  //       return rate.occupancy == occupancyAdult;
  //     });

  //     if (rateDetailIndex < 0) {
  //       alert('Total Occupancy cannot be greater than Higher Occupancys');
  //       return;
  //     }
  //     const rateDetails = rategrid_grid_data[rateDetailIndex];
  //     singleDateFare += parseFloat(rateDetails.ratehigh);
  //     if (!this.roomfare) {
  //       this.roomfare = parseFloat(rateDetails.ratehigh);
  //     }
  //     if (occupancyChild) {
  //       singleDateFare += parseFloat(rateDetails.extchildratehigh);
  //       if (occupancyChild > 1) {
  //         for (
  //           let i = 1;
  //           i < Math.min(maxChildOccupancy, occupancyChild);
  //           i++
  //         ) {
  //           singleDateFare += parseFloat(
  //             rategrid_grid_data[rateDetailIndex + i].extchildratehigh
  //           );
  //         }
  //       }
  //     }
  //     this.finalAmount += singleDateFare;
  //   }
  // }
  onCellClick(args: CellClickEventArgs): void {
    this.scheduleObj?.openEditor(args, 'Add');
  }
  onEventClick(args: EventClickArgs): void {
    if (!(args.event as any).RecurrenceRule) {
      this.scheduleObj?.openEditor(args.event, 'Save');
    } else {
      this.scheduleObj?.quickPopup.openRecurrenceAlert();
    }
  }
  resetPersonCount(): void {
    if (this.requestParams.adult >= 3) {
      this.requestParams.adult = 3;
    }
    if (this.requestParams.child > 3) {
      this.requestParams.child = 3;
    }
  }
  getAvailableRoomList(): void {
    this.mainService.getAvailableRoomList(this.requestRateParams).subscribe({
      next: (res: any) => {
        this.vaccantRoomList = res.data[this.requestRateParams.fromdate];
      },
      error: (err: any) => {
        console.error('Failed to load rate list:', err);
        alert('An error occurred while fetching the rate list.');
      },
    });
  }
  onScheduleCreated() {
    this.scheduleObj?.changeCurrentView('TimelineDay', 3);
  }
  public onViewChange(args: ChangeEventArgs): void {
    const argValue = args.value as string;
    this.dropDownValue = argValue;
    switch (argValue) {
      case '1 Day':
        this.scheduleObj?.changeCurrentView('TimelineDay', 0);
        break;

      case '3 Day':
        this.scheduleObj?.changeCurrentView('TimelineDay', 1);
        break;

      case '15 Day':
        this.scheduleObj?.changeCurrentView('TimelineDay', 2);
        break;

      case '31 Day':
        this.scheduleObj?.changeCurrentView('TimelineDay', 3);
        break;

      case 'TimelineWeek':
        this.scheduleObj?.changeCurrentView('TimelineWeek');
        break;

      case 'TimelineMonth':
        this.scheduleObj?.changeCurrentView('TimelineMonth');
        break;

      default:
        console.warn('Invalid view selected:', argValue);
        break;
    }
  }
  ngOnDestroy(): void {
    if (this.scheduleObj) {
      this.scheduleObj.destroy();
    }
  }
  addNewDocument() {
    this.firestoreService
      .addDocument('bookings', this.requestParams)
      .then((docRef: { id: any }) => {
        console.log('Booking added successfully with ID:', docRef.id);
      })
      .catch((error: any) => {
        console.error('Error adding Booking:', error);
      });
  }
  bookingReservation() {
    const { first_name, last_name, phone_number } =
      this.requestParams.owner_details;
    if (!first_name || !last_name || !phone_number) {
      alert(
        'Please fill in all required fields: First Name, Last Name, and Phone Number.'
      );
      return;
    }
    this.mainService.save(this.requestParams).subscribe({
      next: (res: any) => {
        this.addNewDocument();
        this.scheduleObj?.closeEditor();
        this.requestParams;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  importData() {
    const dataToImport = this.dataService.getBookingRequestData();
    this.firestoreService
      .importData('bookings', dataToImport)
      .then(() => {
        console.log('Data imported successfully!');
      })
      .catch((error: any) => {
        console.error('Error importing data: ', error);
      });
  }
  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/stayDetails'])
    );
    window.open(url, '_blank');
  }
  public onCellRender(args: any): void {
    alert(args);
    const cellDate: Date = args.date;
    if (cellDate >= this.hideStartDate && cellDate <= this.hideEndDate) {
      args.element.style.display = 'none';
    }
  }
  public onCloseClick(): void {
    this.scheduleObj?.quickPopup.quickPopupHide();
}

public placeValue: string = 'top';

// Mapping DropDownList value property
public value: string = 'scrollable';

// Mapping Tab items Header property
public headerText = [{ text: 'FrontDesk' }, { text: 'Single' }];

// Change event funtion for DropDownList component
public placeChange(e: Object): void {
  if (this.placeObj && this.tabObj) {
    this.tabObj.headerPlacement = this.placeObj.text as any;
  }
  this.tabObj?.dataBind();
}

// Change event funtion for DropDownList component
public onChangeTab(e: Object): void {
  if (this.dropDownObj) {
    this.value = this.dropDownObj.value?.toString() ?? '';
    //set overflowMode property to Tab Component
    if (this.dropDownObj.value === 'scrollable') {
      if (this.tabObj) {
        this.tabObj.overflowMode = 'Scrollable';
      }
    } else {
      if (this.tabObj) {
        this.tabObj.overflowMode = 'Popup';
      }
    }
    if (this.tabObj) {
      this.tabObj.dataBind();
    }
  }
}
}
export interface requestParams {
  checkin_date: string;
  checkout_date: string;
  message?: string;
  owner_details: {
    first_name: string;
    last_name?: string;
    phone_number?: string;
  };
  room_type_id: string;
  adult: number;
  child: number;
  bed: number;
  status: string;
}
interface ChangeEventArgs {
  event: any;
  value: string;
}
interface Checkbox {
  label: string;
  checked: boolean;
}

