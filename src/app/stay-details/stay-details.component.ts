import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  PLATFORM_ID,
  Inject,
  SimpleChanges,
  Input,
  OnChanges,
} from '@angular/core';
import {
  DayService,
  EventSettingsModel,
  GroupModel,
  ScheduleComponent,
  ScheduleModule,
  TimelineViewsService,
  TimelineMonthService,
  HoverEventArgs,
  PopupOpenEventArgs,
  TimeScaleModel,
  RenderCellEventArgs,
  PopupCloseEventArgs,
} from '@syncfusion/ej2-angular-schedule';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { NgFor } from '@angular/common';
import {
  DatePicker,
  DatePickerModule,
  DateRangePicker,
  DateRangePickerModule,
  TimePickerModule,
} from '@syncfusion/ej2-angular-calendars';
import {
  ButtonModule,
  CheckBoxModule,
  SpeedDialModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DropDownButtonModule,
  ItemModel,
  MenuEventArgs,
} from '@syncfusion/ej2-angular-splitbuttons';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { MainService } from '../main.service';
import { catchError, of } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DropDownListComponent, DropDownListModule, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { CommonProfileImageComponent } from "../common-profile-image/common-profile-image.component";
import { Query } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';
import { AccordionModule, SelectEventArgs, TabAllModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-stay-details',
  providers: [TimelineViewsService, TimelineMonthService, DayService, MainService, ApiService],
  standalone: true,
  imports: [
    ScheduleModule,
    CommonModule,
    DatePickerModule,
    CheckBoxModule,
    SwitchAllModule,
    ButtonModule,
    DateRangePickerModule,
    FormsModule,
    DropDownButtonModule,
    SpeedDialModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownListModule,
    CommonProfileImageComponent,
    AccordionModule,
    TabAllModule,
    TimePickerModule
],
  templateUrl: './stay-details.component.html',
  styleUrl: './stay-details.component.scss',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StayDetailsComponent  implements OnChanges{
  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent | undefined;
  @ViewChild('scheduleObj2') public scheduleObj2: ScheduleComponent | undefined;
  @ViewChild('scheduleObj3') public scheduleObj3: ScheduleComponent | undefined;
  @ViewChild('datepicker', { static: false }) datePicker?: DatePicker;
  @ViewChild('enddatepicker', { static: false }) endDatePicker?: DatePicker;
  @ViewChild('roomTypeObj', { static: false }) roomTypeObj!: DropDownListComponent;
  @ViewChild('roomsObj', { static: false }) roomsObj!: DropDownListComponent;
  @ViewChild('roomObj', { static: false }) roomObj!: DropDownListComponent;
  @ViewChild('scheduleObj1', { static: false }) scheduleObj1!: ElementRef;
  @ViewChildren('hr') hrs!: QueryList<ElementRef>;
  @ViewChild('dateRangePicker', { static: false })
  dateRangePicker?: DateRangePicker;
  @ViewChildren(ScheduleComponent)
  public schedulers!: QueryList<ScheduleComponent>;
  @ViewChild('iconRef', { static: false }) iconRef: ElementRef | undefined;
  @Input() tab: any;
  @Input() requestData: any;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public hoveredDate: string | null = null;
  public tooltipStyle: { [key: string]: string } = {};
  public readonly = true;
  public scheduleHeight: string = '220px';
  public selectedText: string = '1';
  public isPopupVisible: boolean = false;
  public isAddOnPopupVisible: boolean = false;
  public isTaxEsPopupVisible: boolean = false;
  public isDiscountPopupVisible: boolean = false;
  public isOtherDiscountPopupVisible: boolean = false;
  public isCardPopupVisible: boolean = false;
  public formattedDate: string = '';
  public bookingDate: string = 'Jan 22 - Jan 30';
  public isTooltipVisible: boolean = false;
  public tooltipText: string = '';
  public isEditing: boolean = false;
  public originalData: any = {};
  public vaccantRoomList: any;
  public sessionalRate: any;
  public calcualteFare: any;
  public rateList: any;
  public roomfare: any = 0;
  public maskWidth: string = '100px';
  public width: string = '70px';
  public popupWidth: string = '200px';
  public dynamicMask: string = '000-000-0000';
  public finalAmount: number = 0;
  public rateDetails: any;
  public specialistCategory?: Record<string, any>[];
  public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 9 };
  public get viewInterval(): number {
    return this.calculateDays(this.startDate, this.endDate);
  }
  public eventSettings: EventSettingsModel = {
    dataSource: [],
};

public eventSettings1: EventSettingsModel = {
    dataSource: [],
};
public eventSetting: EventSettingsModel = {
  dataSource: [],
};
  roomTypeData = [
    { id: 1, type: 'Single' },
    { id: 2, type: 'Double' },
    { id: 3, type: 'Suite' }
  ];
  
  roomsData = [
    { id: 101, name: 'Room 101' },
    { id: 102, name: 'Room 102' },
    { id: 103, name: 'Room 103' }
  ];
  genderData = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Other' }
  ];
  titleData = [
    { id: 1, name: 'Dr.' },
    { id: 2, name: 'Mr.' },
    { id: 3, name: 'Mrs.' },
    { id: 4, name: 'Prof.' }
  ];
  genderFields = { text: 'name', value: 'id' };
  roomTypeFields = { text: 'type', value: 'id' };
  roomsFields = { text: 'name', value: 'id' };
   public fields: any[] = [];
  public nationalityFields: Object = { text: 'nationality', value: 'CountryId' };
  public identificationFields: Object = { text: 'name', value: 'identificationId' };
  public requestRateParams = {
    room_type_id: '',
    fromdate: '',
    todate: '',
  };
  public identification: { [key: string]: Object }[] = [
    { name: 'Passport', identificationId: '1'},
    { name: 'Pan Number', identificationId: '2' },
    { name: 'Driving License ', identificationId: '3' },
    { name: 'Voter Id', identificationId: '4' },
    { name: 'Aadhaar Number ', identificationId: '5'},
  ];
  public country: { [key: string]: Object }[] = [
    {
      CountryName: "Afghanistan",
      CountryId: "1",
      iso2: "AF",
      dialCode: "+93",
      flag: "🇦🇫",
      nationality: "Afghan",
      phoneLength: 9
    },
    {
      CountryName: "Albania",
      CountryId: "2",
      iso2: "AL",
      dialCode: "+355",
      flag: "🇦🇱",
      nationality: "Albanian",
      phoneLength: 9
    },
    {
      CountryName: "Algeria",
      CountryId: "3",
      iso2: "DZ",
      dialCode: "+213",
      flag: "🇩🇿",
      nationality: "Algerian",
      phoneLength: 9
    },
    {
      CountryName: "Australia",
      CountryId: "4",
      iso2: "AU",
      dialCode: "+61",
      flag: "🇦🇺",
      nationality: "Australian",
      phoneLength: 9
    },
    {
      CountryName: "Bangladesh",
      CountryId: "5",
      iso2: "BD",
      dialCode: "+880",
      flag: "🇧🇩",
      nationality: "Bangladeshi",
      phoneLength: 10
    },
    {
      CountryName: "Canada",
      CountryId: "6",
      iso2: "CA",
      dialCode: "+1",
      flag: "🇨🇦",
      nationality: "Canadian",
      phoneLength: 10
    },
    {
      CountryName: "China",
      CountryId: "7",
      iso2: "CN",
      dialCode: "+86",
      flag: "🇨🇳",
      nationality: "Chinese",
      phoneLength: 11
    },
    {
      CountryName: "France",
      CountryId: "8",
      iso2: "FR",
      dialCode: "+33",
      flag: "🇫🇷",
      nationality: "French",
      phoneLength: 9
    },
    {
      CountryName: "Germany",
      CountryId: "9",
      iso2: "DE",
      dialCode: "+49",
      flag: "🇩🇪",
      nationality: "German",
      phoneLength: 10
    },
    {
      CountryName: "India",
      CountryId: "10",
      iso2: "IN",
      dialCode: "+91",
      flag: "🇮🇳",
      nationality: "Indian",
      phoneLength: 10
    },
    {
      CountryName: "Italy",
      CountryId: "11",
      iso2: "IT",
      dialCode: "+39",
      flag: "🇮🇹",
      nationality: "Italian",
      phoneLength: 10
    },
    {
      CountryName: "Japan",
      CountryId: "12",
      iso2: "JP",
      dialCode: "+81",
      flag: "🇯🇵",
      nationality: "Japanese",
      phoneLength: 10
    },
    {
      CountryName: "South Korea",
      CountryId: "13",
      iso2: "KR",
      dialCode: "+82",
      flag: "🇰🇷",
      nationality: "Korean",
      phoneLength: 10
    },
    {
      CountryName: "United Kingdom",
      CountryId: "14",
      iso2: "GB",
      dialCode: "+44",
      flag: "🇬🇧",
      nationality: "British",
      phoneLength: 10
    },
    {
      CountryName: "United States",
      CountryId: "15",
      iso2: "US",
      dialCode: "+1",
      flag: "🇺🇸",
      nationality: "American",
      phoneLength: 10
    }
  ];  
// define the state DropDownList data
public state: { [key: string]: Object }[] = [
    { StateName: 'New York', CountryId: '1', StateId: '101' },
    { StateName: 'Queensland', CountryId: '2', StateId: '104' },
    { StateName: 'Tasmania ', CountryId: '2', StateId: '105' },
    { StateName: 'Victoria', CountryId: '2', StateId: '106' },
    { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
    { StateName: 'Washington', CountryId: '1', StateId: '103' }
];
// define the city DropDownList data
public cities: { [key: string]: Object }[] = [
    { CityName: 'Aberdeen', StateId: '103', CityId: 207 },
    { CityName: 'Alexandria', StateId: '102', CityId: 204 },
    { CityName: 'Albany', StateId: '101', CityId: 201 },
    { CityName: 'Beacon ', StateId: '101', CityId: 202 },
    { CityName: 'Brisbane ', StateId: '104', CityId: 211 },
    { CityName: 'Cairns', StateId: '104', CityId: 212 },
    { CityName: 'Colville ', StateId: '103', CityId: 208 },
    { CityName: 'Devonport', StateId: '105', CityId: 215 },
    { CityName: 'Emporia', StateId: '102', CityId: 206 },
    { CityName: 'Geelong', StateId: '106', CityId: 218 },
    { CityName: 'Hampton ', StateId: '102', CityId: 205 },
    { CityName: 'Healesville ', StateId: '106', CityId: 217 },
    { CityName: 'Hobart', StateId: '105', CityId: 213 },
    { CityName: 'Launceston ', StateId: '105', CityId: 214 },
    { CityName: 'Lockport', StateId: '101', CityId: 203 },
    { CityName: 'Melbourne', StateId: '106', CityId: 216 },
    { CityName: 'Pasco', StateId: '103', CityId: 209 },
    { CityName: 'Townsville', StateId: '104', CityId: 210 }
];
  public items: ItemModel[] = [
    {
      text: 'Male',
      iconCss: 'e-ddb-icons e-profile',
    },
    {
      text: 'Female',
      iconCss: 'e-ddb-icons e-profile',
    },
    {
      text: 'Other',
      iconCss: 'e-ddb-icons e-profile',
    },
  ];
  public tooltItem: ItemModel[] = [
    {
      text: 'Edit',
      iconCss: 'speeddial-icons speeddial-icon-edit',
    },
    {
      text: 'Delete',
      iconCss: 'speeddial-icons speeddial-icon-delete',
    },
    {
      text: 'Save',
      iconCss: 'speeddial-icons speeddial-icon-save',
    },
  ];
  public totalUser: ItemModel[] = [
    {
      text: '1',
      id: '0',
      //iconCss: 'e-ddb-icons e-profile icon-red',
    },
    {
      text: '2',
      id: '1',
      //iconCss: 'e-ddb-icons e-profile icon-green',
    },
    {
      text: '3',
      id: '2',
      //iconCss: 'e-ddb-icons e-profile icon-blue',
    },
  ];
  public totalChild: ItemModel[] = [
    {
      text: '0',
      //iconCss: 'e-ddb-icons e-profile icon-red',
    },
    {
      text: '1',
      //iconCss: 'e-ddb-icons e-profile icon-green',
    },
    {
      text: '2',
      //iconCss: 'e-ddb-icons e-profile icon-blue',
    },
  ];
  public guestDetails: any[] = [
    {
      title: 'Mr.',
      firstName: 'Deepak',
      lastName: 'Sharma',
      phoneNumber: '+91-9827205727',
      isEditing: false,
      gender: 1,
      flagId: 1,
      startDate1: '2024-11-10',
      endDate1: '2024-11-15',
    },
  ];
  addGuest() {
    this.guestDetails.push({
      title: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      isEditing: true,
      gender: 1,
      flagId: 1,
      startDate1: '2024-11-10',
      endDate1: '2024-11-15',
    });
    this.updateScheduleHeight();
  }
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
  updateScheduleHeight() {
    const baseHeight = 100;
    const guestHeight = 100;
    const newHeight = baseHeight + this.guestDetails.length * guestHeight;
    this.scheduleHeight = `${newHeight}px`;
  }
  private formatDateRange(): void {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
    };
    const formattedStart = this.startDate.toLocaleDateString('en-US', options);
    const formattedEnd = this.endDate.toLocaleDateString('en-US', options);
    this.formattedDate = `${formattedStart} → ${formattedEnd}`;
  }
  public onDateChange(args: DateChangeEventArgs): void {
    if (args.startDate && args.endDate) {
      this.startDate = args.startDate;
      this.endDate = args.endDate;
      this.formatDateRange();
    }
  }
  separateDialCode = true;
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
  toggleEdit(index: number) {
    this.guestDetails[index].isEditing = !this.guestDetails[index].isEditing;
  }
  public setWidth(Id: any) {
    const appointmentElement = this.scheduleObj2?.element.querySelector(
      `[data-id="Appointment_${Id}"]`
    );
    return appointmentElement
      ? appointmentElement.getBoundingClientRect().width
      : 0;
  }
  onItemSelect(args: MenuEventArgs, index: number): void {
    const selectedText = args.item.text;
    //console.log(`Selected action: ${selectedText} for guest index ${index}`);

    if (selectedText === 'Edit') {
      this.toggleEdit(index);
    } else if (selectedText === 'Delete') {
      this.toggleDelete(index);
    } else if (selectedText === 'Save') {
      this.toggleSave(index);
    }
  }
  public productDropDownButtonItems: ItemModel[] = [
    { text: 'Developer' },
    { text: 'Analytics' },
    { text: 'Reporting' },
    { text: 'E-Signature' },
    { text: 'Help Desk' }
  ];
  toggleDelete(index: number): void {
    console.log(`Delete action for guest at index ${index}`);
    alert(`Delete action triggered for ${this.guestDetails[index].name}`);
  }

  toggleSave(index: number): void {
    console.log(`Save action for guest at index ${index}`);
    alert(`Save action triggered for ${this.guestDetails[index].name}`);
  }
  public views = [
    {
      option: 'TimelineDay',
      interval: this.calculateDays(this.startDate, this.endDate),
    },
  ];
  updateEventSettings() {
    const checkinDate = this.requestData?.checkin_date ?? '2024-11-10';
    const checkoutDate = this.requestData?.checkout_date ?? '2024-11-15';
    const checkinTime = this.requestData?.checkin_time ?? '11:00:00';
    const checkoutTime = this.requestData?.checkout_time ?? '16:00:00';
  
    const startDate = new Date(
      parseInt(checkinDate.split('-')[0]), 
      parseInt(checkinDate.split('-')[1]) - 1, 
      parseInt(checkinDate.split('-')[2]), 
      parseInt(checkinTime.split(':')[0]), 
      parseInt(checkinTime.split(':')[1]), 
      parseInt(checkinTime.split(':')[2])
    );
  
    const endDate = new Date(
      parseInt(checkoutDate.split('-')[0]), 
      parseInt(checkoutDate.split('-')[1]) -1, 
      parseInt(checkoutDate.split('-')[2]), 
      parseInt(checkoutTime.split(':')[0]), 
      parseInt(checkoutTime.split(':')[1]), 
      parseInt(checkoutTime.split(':')[2])
    );
  
    this.eventSettings1 = {
      dataSource: [
        {
          Id: 1,
          Subject: 'DELUXE',
          StartTime: startDate,
          EndTime: endDate,
          Room: 'DLX-345',
          Guest: this.requestData?.adult || 3,
          Child: this.requestData?.child || 0,
          PrimaryColor: '#1aaa55',
          SecondaryColor: '#7fa900',
          Rates: 300,
          Package: 'Seasonal',
        },
      ],
    };
    this.eventSettings = {
      dataSource: [
        {
          Id: 1,
          Subject: 'DELUXE',
          StartTime: startDate,
          EndTime: endDate,
          Room: 'DLX-345',
          Guest: this.requestData?.adult || 3,
          Child: this.requestData?.child || 0,
          PrimaryColor: '#1aaa55',
          SecondaryColor: '#7fa900',
          Rates: 300,
          Package: 'Seasonal',
        },
      ],
    };
    this.eventSettings  = {
        dataSource: [
          {
            Id: 1,
            Subject: 'Event 1',
            StartTime: startDate,
            EndTime: endDate,
          },
        ]
      }
  }
  updateDates() {
    if (this.requestData?.checkin_date && this.requestData?.checkout_date) {
      const checkinDateTime = `${this.requestData.checkin_date}T${this.requestData.checkin_time || '11:00:00'}`;
      this.startDate = new Date(checkinDateTime);
      const checkoutDateTime = `${this.requestData.checkout_date}T${this.requestData.checkout_time || '14:00:00'}`;
      this.endDate = new Date(checkoutDateTime);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['requestData'] && this.requestData) {
      this.updateDates();
      this.updateEventSettings();
    }
  }
  // public eventSettings: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Id: 1,
  //       Subject: 'DELUXE',
  //       Room: 'DLX-345',
  //       Guest: 3,
  //       Child: 0,
  //       StartTime: new Date(2024, 10, 10, 16, 0),
  //       EndTime: new Date(2024, 10, 12, 11, 0),
  //       PrimaryColor: '#1aaa55',
  //       SecondaryColor: '#7fa900',
  //       Rates: 300,
  //       Package: 'Seasonal',
  //     },
  //   ],
  // };
  // public eventSettings1: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Id: 1,
  //       Subject: 'DELUXE',
  //       Room: 'DLX-345',
  //       Guest: 3,
  //       Child: 0,
  //       StartTime: new Date(2024, 10, 10, 16, 0),
  //       EndTime: new Date(2024, 10, 15, 11, 0),
  //       PrimaryColor: '#1aaa55',
  //       SecondaryColor: '#7fa900',
  //       Rates: 300,
  //       Package: 'Seasonal',
  //     },
  //   ],
  // };

  // public eventSetting: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Id: 1,
  //       Subject: 'Event 1',
  //       StartTime: new Date(2024, 10, 10, 16, 0),
  //       EndTime: new Date(2024, 10, 11, 11, 0),
  //     },
  //     {
  //       Id: 2,
  //       Subject: 'Event 2',
  //       StartTime: new Date(2024, 10, 11, 16, 0),
  //       EndTime: new Date(2024, 10, 12, 11, 0),
  //     },
  //     {
  //       Id: 3,
  //       Subject: 'Event 3',
  //       StartTime: new Date(2024, 10, 13, 16, 0),
  //       EndTime: new Date(2024, 10, 15, 11, 0),
  //     },
  //   ],
  // };
  public workDays: number[] = [0, 1, 2, 3, 4, 5];
  public allowInline = true;
  public groupSettings: GroupModel = {
    resources: ['MeetingRoom'],
    enableCompactView: true,
  };
  public resourceDataSource: Record<string, any>[] = [
    { text: 'Conference Room A', id: 1, color: '#ea7a57' },
    { text: 'Conference Room B', id: 2, color: '#7fa900' },
  ];
  calculateDays(start: Date, end: Date): number {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }
  timelineStyle: { top: string; left: string; width: string } = { top: '0px', left: '0px', width: '0px' };
  workCellWidth = 0; // Width of a single work cell

  // ngOnInit(): void {
  //   // Initialize the timeline to the current hour
  //   const currentHour = new Date().getHours();
  //   this.moveToHour(currentHour);
  // }

  // moveToHour(hour: number): void {
  //   const workCells = document.querySelectorAll('.e-work-cells');
  //   if (workCells.length === 0) {
  //     console.warn('No work cells found.');
  //     return;
  //   }

  //   // Calculate the width of a single work cell
  //   const firstCell = workCells[0] as HTMLElement;
  //   this.workCellWidth = firstCell.offsetWidth;

  //   // Calculate the position based on the hour
  //   const leftPosition = this.workCellWidth * hour;

  //   // Update the timeline marker style
  //   this.timelineStyle = {
  //     top: '0px', // Adjust as needed
  //     left: `${leftPosition}px`,
  //     width: `${this.workCellWidth}px`, // Optional: Matches cell width
  //   };
  // }

  // moveToNextHour(): void {
  //   const currentLeft = parseInt(this.timelineStyle?.left || '0', 10);
  //   const nextLeft = currentLeft + this.workCellWidth;
  //   this.timelineStyle = {
  //     ...this.timelineStyle,
  //     left: `${nextLeft}px`,
  //   };
  // }
  // public onHover(args: HoverEventArgs): void {
  //   const workCells = document.querySelectorAll('.e-work-cells');
  //   const tooltip = document.querySelector('.date-tooltip') as HTMLElement;
  //   workCells.forEach((cell) => cell.classList.remove('vertical-highlight'));
  //   if (args.element && args.element.classList.contains('e-work-cells')) {
  //     const hoveredCell = args.element as HTMLTableCellElement;
  //     const columnIndex = hoveredCell.cellIndex;
  //     const tableRows = document.querySelectorAll('.e-content-table tr');
  //     tableRows.forEach((row) => {
  //       const cell = row.querySelectorAll('.e-work-cells')[columnIndex];
  //       if (cell) {
  //         cell.classList.add('vertical-highlight');
  //       }
  //     });
  //     const rect = hoveredCell.getBoundingClientRect();
  //     this.tooltipStyle = {
  //       top: `${rect.top - 10}px`,
  //       left: `${rect.left + rect.width / 2}px`,
  //     };
  //     const value = hoveredCell.getAttribute('aria-label');
  //     if (value) {
  //       const dateString = value.split(' at ')[0];
  //       const date = new Date(dateString);
  //       const options: Intl.DateTimeFormatOptions = {
  //         day: '2-digit',
  //         month: 'short',
  //       };
  //       this.hoveredDate = date.toLocaleDateString('en-GB', options);
  //     }
  //   } else {
  //     this.hoveredDate = null;
  //   }
  // }
  private previousCells: HTMLElement[] = [];

  private addDottedLineToCell(cell: HTMLElement): void {
    let dottedLine = cell.querySelector('.dotted-line') as HTMLElement;
    if (!dottedLine) {
      dottedLine = document.createElement('div');
      dottedLine.classList.add('dotted-line');
      dottedLine.style.position = 'absolute';
      dottedLine.style.height = '100%';
      dottedLine.style.top = '0';
      dottedLine.style.borderRight = '1px dashed black';
      dottedLine.style.pointerEvents = 'none';
      dottedLine.style.zIndex = '99';
      cell.style.position = 'relative';
      cell.appendChild(dottedLine);
    }
    const cellWidth = cell.offsetWidth;
    dottedLine.style.left = `${cellWidth / 2}px`;
  }

  public onHover(args: HoverEventArgs): void {
    this.clearPreviousLines();
    if (args.element && args.element.classList.contains('e-work-cells')) {
      const hoveredCell = args.element as HTMLTableCellElement;
      const columnIndex = hoveredCell.cellIndex;
      const tableRows = document.querySelectorAll('.e-content-table tr');

      let topMostCell: HTMLElement | null = hoveredCell;
      tableRows.forEach((row, index) => {
        const cell = row.querySelectorAll('.e-work-cells')[columnIndex] as HTMLElement;
        if (cell) {
          cell.classList.add('vertical-highlight');
          this.addDottedLineToCell(cell);
          cell.addEventListener('mousemove', this.handleMouseMove);
          if (index === 0) {
            topMostCell = cell;
          }
        }
      });
      if (topMostCell) {
        const rect = topMostCell.getBoundingClientRect();
        this.setupTooltip(hoveredCell, rect);
      }

      this.previousCells = Array.from(document.querySelectorAll('.vertical-highlight'));
    } else {
      this.clearPreviousLines();
      this.hoveredDate = null;
    }
  }

  private setupTooltip(hoveredCell: HTMLTableCellElement, rect: DOMRect): void {
    const value = hoveredCell.getAttribute('aria-label');
    if (value) {
      const dateString = value.split(' at ')[0];
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
      this.hoveredDate = date.toLocaleDateString('en-GB', options);
    }

    let tooltip = document.getElementById('date-tooltip') as HTMLElement;
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'date-tooltip';
      tooltip.classList.add('date-tooltip');
      document.body.appendChild(tooltip);
    }

    tooltip.textContent = this.hoveredDate;
    this.updateTooltipPosition(rect.left + rect.width / 2, rect.top);
    tooltip.style.display = 'block';
  }

  private updateTooltipPosition(x: number, y: number): void {
    const tooltip = document.getElementById('date-tooltip');
    if (tooltip) {
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y - 40}px`;
      tooltip.style.transform = 'translateX(-50%)';
    }
  }

  private handleMouseMove = (event: MouseEvent): void => {
    const cell = event.target as HTMLElement;
    const rect = cell.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    this.previousCells.forEach((highlightedCell) => {
      const dottedLine = highlightedCell.querySelector('.dotted-line') as HTMLElement;
      if (dottedLine) {
        dottedLine.style.left = `${offsetX}px`;
      }
    });
    if (this.previousCells.length > 0) {
      const topMostCell = this.previousCells[0];
      const topRect = topMostCell.getBoundingClientRect();
      this.updateTooltipPosition(event.clientX, topRect.top);
    }
  };

  private clearPreviousLines(): void {
    if (this.previousCells) {
      this.previousCells.forEach((cell) => {
        cell.classList.remove('vertical-highlight');
        const dottedLine = cell.querySelector('.dotted-line');
        if (dottedLine) {
          dottedLine.remove();
        }
        cell.removeEventListener('mousemove', this.handleMouseMove);
      });
      this.previousCells = [];
    }

    const tooltip = document.getElementById('date-tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }
  
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.clearPreviousLines();
      const tooltip = document.getElementById('date-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    }
    if (!this.isDestroyed) {
      this.isDestroyed = true;
      this.scheduleObj?.destroy();
  }
  }
  onPopupCloseSessionalRate(args: PopupCloseEventArgs | any) {
    if (args.type === 'Editor') {
      args.data.StartTime  = args.element.querySelector(".e-daterangepicker").ej2_instances[0].startDate;
      args.data.EndTime = args.element.querySelector(".e-daterangepicker").ej2_instances[0].endDate;
    }
  }
  adjustWorkCellWidths() {
    const workCells = document.querySelectorAll('.remove-table-header');
    if (workCells.length > 0) {
      for (let i = 0; i < workCells.length; i++) {
        const firstChild = workCells[i].querySelector(
          '.e-work-cells:first-child'
        );
        const lastChild = workCells[i].querySelector(
          '.e-work-cells:last-child'
        );
        const totalCellWidth = (firstChild as HTMLElement).offsetWidth;
        const firstCellWidth = ((24 - 16) / 24) * totalCellWidth;
        (firstChild as HTMLElement).style.width = `${firstCellWidth}px`;
        const lastCellWidth = (12 / 24) * totalCellWidth;
        (lastChild as HTMLElement).style.width = `${lastCellWidth}px`;
      }
    }
  }
  constructor(
    private mainService: MainService,
    private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: object

  ){}
  getRoomList(): void {
    this.mainService
      .getRoomTypeList()
      .pipe(
        catchError((err) => {
          console.error('Error retrieving room list:', err);
         // alert('Error retrieving room list. Please try again later.');
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
  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'QuickInfo') {
      args.cancel = true;
    }
  }
  openStartDatePicker(): void {
    this.datePicker?.show();
  }
  openEndDatePicker(): void {
    this.endDatePicker?.show();
  }
  onStartChange(): void {
    if (this.datePicker?.value) {
      this.startDate = this.datePicker.value;
      this.updateScheduler();
    }
  }

  onEndChange(): void {
    if (this.endDatePicker?.value) {
      this.endDate = this.endDatePicker.value;
      this.updateScheduler();
    }
  }
  updateScheduler(): void {
    const updatedDays = this.calculateDays(this.startDate, this.endDate);
    this.views = [
      {
        option: 'TimelineDay',
        interval: updatedDays,
      },
    ];
    this.schedulers.forEach((scheduler) => {
      scheduler.setProperties({
        selectedDate: this.startDate,
        views: this.views,
      });
      scheduler.refresh();
    });
  }
  adjustSchedulerView(): void {
    const startHour = `${this.startDate.getHours()}:00`;
    const endHour = `${
      this.endDate.getHours() + (this.endDate.getMinutes() > 0 ? 1 : 0)
    }:00`;

    if (this.scheduleObj2) {
      this.scheduleObj2.setProperties({
        views: [
          {
            option: 'TimelineDay',
            interval: this.calculateDays(this.startDate, this.endDate),
          },
        ],
        selectedDate: this.startDate,
        timeScale: { enable: true, interval: 60 },
        workHours: {
          start: startHour,
          end: endHour,
        },
      });
      this.scheduleObj2.refresh();
    }
  }
  openPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isPopupVisible = true;
  }
  openAddOOnPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isAddOnPopupVisible = true;
  }
  openTaxEsPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isTaxEsPopupVisible = true;
  }
  openDiscountPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isDiscountPopupVisible = true;
  }
  openOtherDiscountPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isOtherDiscountPopupVisible = true;
  }
  popupStyles: { [key: string]: string } = {};
  openCardPopup(event: MouseEvent): void {
    this.openPopupPosition(event);
    this.isCardPopupVisible = true;
  }
  openPopupPosition(event: MouseEvent): void {
    console.log(event);
    const clickX = event.clientX;
    const clickY = event.clientY;
    const popupWidth = 600;
    const popupHeight = 400;
    const padding = 20;
  
    const maxLeft = window.innerWidth - popupWidth - padding;
    const maxTop = window.innerHeight - popupHeight - padding;
  
    let top = clickY + window.scrollY;
  
    // If clicking in the lower part of the screen, reduce top margin
    if (clickY > window.innerHeight / 2) {
      top -= popupHeight / 2; // Adjust top position based on click area
    }
  
    // Ensure the popup doesn't overflow the bottom
    if (top + popupHeight > window.innerHeight) {
      top = window.innerHeight - popupHeight - padding;
    }
  
    // Ensure the popup doesn't overflow the top
    if (top < padding) {
      top = padding;
    }
  
    const left = Math.min(clickX + window.scrollX, maxLeft);
  
    this.popupStyles = {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      zIndex: '1000',
      width: '600px',
    };
  }
  
  
  
  
  closePopup(): void {
    this.isPopupVisible = false;
  }
  closeAddOOnPopup(): void {
    this.isAddOnPopupVisible = false;
  }
  closeTaxeesPopup(): void {
    this.isTaxEsPopupVisible = false;
  }
  closeDiscountPopup(): void {
    this.isDiscountPopupVisible = false;
  }
  closeOtherDiscountPopup(): void {
    this.isOtherDiscountPopupVisible = false;
  }
  closeCardPopup(): void {
    this.isCardPopupVisible = false;
  }
  public onPopupOpenSplitRooms(args: any) {
    if (
      args.type == 'QuickInfo' &&
      args.target.classList.contains('e-work-cells')
    ) {
      args.cancel = true;
     // console.log(args.data);
      this.scheduleObj?.openEditor(args.data, 'Add');
      args.element.classList.add('dialog-open');
      args.element.setAttribute('id', 'srk-id');
    //   let bookingsData = localStorage.getItem('bookingsData');
    //   let locBookings = bookingsData ? JSON.parse(bookingsData) : {};
    //   if (args.data && args.data[0]) {
    //     let rec = args.data[0];
    //     locBookings[rec.Id] = rec;
    //     localStorage.setItem('bookingsData', JSON.stringify(locBookings));
    //   }
     }
  }

  showTooltip(event: MouseEvent, date: string): void {
    this.tooltipText = date;
    this.isTooltipVisible = true;
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.tooltipStyle = {
      top: `${rect.top - 30}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translateX(-50%)',
    };
  }
  hideTooltip(): void {
    this.isTooltipVisible = false;
  }

  ngOnInit() {
    this.adjustSchedulerView();
    this.formatDateRange();
    this.getRoomList();

  }

  onSelect(event: any): void {
    const selectedGuestCount = parseInt(event.item.text.split(' ')[0], 10);
    this.selectedText = event.item.text;

    this.guestDetails = [
      {
        title: 'Mr.',
        firstName: 'Deepak',
        lastName: 'Sharma',
        phoneNumber: '+91-9827205727',
        isEditing: false,
        gender: 1,
        flagId: 1,
        startDate1: '2024-11-10',
        endDate1: '2024-11-15',
      },
    ];
    for (let i = 1; i < selectedGuestCount; i++) {
      this.addGuest();
    }
  }
  onSelectGender(event: any): void {
  //  const selectedGuestCount = parseInt(event.item.text.split(' ')[0], 10);
    this.selectedText = event.item.text;
  }
  enableEdit(index: number) {
    this.guestDetails[index].isEditing = true;
    this.originalData = { ...this.guestDetails[index] };
  }
  saveEdit(index: number) {
    this.guestDetails[index].isEditing = false;
  }
  cancelEdit(index: number) {
    this.guestDetails[index] = { ...this.originalData };
    this.guestDetails[index].isEditing = false;
  }
  save() {
    this.isEditing = false;
  }
  openDateRangePicker() {
    this.dateRangePicker?.show();
  }
  // onDateRangeChange(event: any, i: any): void {
  //   const selectedDates = event.value;
  //   // console.log(i,"srk babu")
  // //  console.log(selectedDates.length);
  //   if (selectedDates && selectedDates.length === 2) {
  //     const [startDate, endDate] = selectedDates;
  //     // this.guestDetails.forEach((guest) => {
  //     //   guest.startDate1 = startDate;
  //     //   guest.endDate1 = endDate;
  //     // });
  //     this.guestDetails[i]  = {
  //       startDate1: startDate,
  //       endDate1: endDate,
  //     };
  //     this.guestDetails[i].isEditing = !this.guestDetails[i].isEditing;
  //   }
  // }
  public onDateRangeChange(event: any, index: number): void {
    if (event.startDate && event.endDate) {
      this.guestDetails[index].startDate1 = event.startDate;
      this.guestDetails[index].endDate1 = event.endDate;
     // this.guestDetails[index].isEditing = !this.guestDetails[index].isEditing;
      
    }
  }
  
    selectImage(event: any): void {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
      const profileImage = document.getElementById('profileImage') as HTMLImageElement;
      profileImage.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
    setHeight(idIndex: number, details: any): [number, number] {
      const hr = document.getElementById(`hr-${idIndex}`);
      const guestDetail = this.guestDetails[0];
  
      const totalCell = this.calculateDays(
          new Date(guestDetail.startDate1),
          new Date(guestDetail.endDate1)
      );
  
      const perCellWidth = 100 / totalCell;
      const currentDiff = this.calculateDays(
          new Date(details.startDate1),
          new Date(details.endDate1)
      );
  
      const bothStartDateDiff = 
      this.calculateDays(new Date(guestDetail.startDate1), new Date(details.startDate1)) - 1;
      const workCells = document.querySelectorAll('.e-work-cells');
      const firstWidth = workCells[0]?.getBoundingClientRect().width || 0;
      const secondWidth = workCells[1]?.getBoundingClientRect().width || firstWidth;
      const lastWidth = workCells[workCells.length - 1]?.getBoundingClientRect().width || firstWidth;
      const left = firstWidth + (bothStartDateDiff - 2) * secondWidth + secondWidth / 2;
      const width = firstWidth + (currentDiff - 2) * secondWidth + lastWidth;
  
      if (hr) {
          hr.style.left = `${Math.max(left, 0)}px`;
          hr.style.width = `${width}px`;
      }
  
      return [Math.max(left, 0), width];
  }
  
  public onPopupOpenSplitRooms1(args: any) {
    if ( args.type == 'QuickInfo' && args.target.classList.contains('e-work-cells')
    ) {
      args.cancel = true;
     // console.log(args.data)
      this.scheduleObj?.openEditor(args.data, 'Add');
      args.element.classList.add('dialog-open');
      args.element.setAttribute('id', 'srk-id');
     // let bookingsData = localStorage.getItem('bookingsData');
      //let locBookings = bookingsData ? JSON.parse(bookingsData) : {};
      // if (args.data && args.data[0]) {
      //   let rec = args.data[0];
      //   locBookings[rec.Id] = rec;
      //   localStorage.setItem('bookingsData', JSON.stringify(locBookings));
      // }
    }
  }
  getDate(date?: string) {
    let targetDate = date ? new Date(date) : new Date();
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  public onPopupOpenRoom(args: any) {
   // console.log(args);
    this.requestParams.room_type_id = args.data.DepartmentId;
    this.requestParams.room_id = args.data.DoctorId;
    this.requestParams.checkin_date = this.getDate(args.data.StartTime);
    this.requestParams.checkout_date = args.data.endDate;
    if (
      args.type == 'QuickInfo' &&
      args.target.classList.contains('e-work-cells')
    ) {
      args.cancel = true;
      this.scheduleObj2?.openEditor(args.data, 'Add');
     // this.getSessionalRateList();
      //this.getAvailableRoomList();
      args.element.classList.add('dialog-open');
      args.element.setAttribute('id', 'srk-id');
      // let bookingsData = localStorage.getItem('bookingsData');
      // let locBookings = bookingsData ? JSON.parse(bookingsData) : {};
      // if (args.data && args.data[0]) {
      //   let rec = args.data[0];
      //   locBookings[rec.Id] = rec;
      //   this.updateBookingData(Object.values(locBookings));
      //   localStorage.setItem('bookingsData', JSON.stringify(locBookings));
      // }
    }
  }
  public onPopupOpenSessionalRate(args: any) {
  //  console.log(args);
    this.requestParams.room_type_id = args.data.DepartmentId;
    this.requestParams.room_id = args.data.DoctorId;
    this.requestParams.checkin_date = this.getDate(args.data.StartTime);
    this.requestParams.checkout_date = this.getDate(args.data.endDate);
    this.requestRateParams.room_type_id = args.data.DepartmentId;
    this.requestRateParams.fromdate = this.getDate(args.data.StartTime);
    this.requestRateParams.todate = this.getDate(args.data.endDate);
    if (
      args.type === 'QuickInfo' &&
      args.target.classList.contains('e-work-cells')
    ) {
      args.cancel = true;
      this.scheduleObj3?.openEditor(args.data, 'Add');
      this.getSessionalRateList();
      args.element.classList.add('dialog-open');
      args.element.setAttribute('id', 'srk-id');
      // let bookingsData = localStorage.getItem('bookingsData');
      // let locBookings = bookingsData ? JSON.parse(bookingsData) : {};
      // if (args.data && args.data[0]) {
      //   let rec = args.data[0];
      //   locBookings[rec.Id] = rec;
      // }
    }
  }
  onActionBegin(event: any) {
    if (event.requestType === 'eventCreate') {
      const data: Record<string, any> =
        event.data instanceof Array ? event.data[0] : event.data;
      //this.startDate = data['StartTime'];
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
  onSave(): void {
    const newEvent = {
      Id: (Array.isArray(this.eventSettings1.dataSource) ? this.eventSettings1.dataSource.length : 0) + 1,
      Subject: 'New Appointment',
      Room: 'New Room',
      Guest: 2,
      Child: 0, 
      StartTime: new Date(), 
      EndTime: new Date(new Date().setHours(new Date().getHours() + 1)),
      PrimaryColor: '#1aaa55',
      SecondaryColor: '#7fa900',
      Rates: 300,
      Package: 'Default Package',
    };
    if (this.eventSettings1.dataSource instanceof Array) {
      this.eventSettings1.dataSource.push(newEvent);
    }
    if (this.scheduleObj2) {
      this.scheduleObj2.refresh();
    }
    if (this.scheduleObj2) {
      this.scheduleObj2.closeQuickInfoPopup();
    }
  }
  onCancel(): void {
    console.log('Action canceled');
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
   // Array to hold the dynamic tab data

   public countryFields: Object = { value: 'CountryId', text: 'CountryName' };
    public stateFields: Object = { value: 'StateId', text: 'StateName' };
    public cityFields: Object = { text: 'CityName', value: 'CityId' };
    public countryWaterMark: string = 'Select country';
    public stateWaterMark: string = 'Select state';
    public cityWaterMark: string = 'Select city';
    @ViewChild('countryList')
    public countryObj: DropDownListComponent | undefined;
    @ViewChild('stateList')
    public stateObj: DropDownListComponent | undefined;
    @ViewChild('cityList')
    public cityObj: DropDownListComponent | undefined;
    public onChange1(): void {
      if (!this.stateObj || !this.countryObj) return;
      this.stateObj.enabled = true;
      const tempQuery: Query = new Query().where('CountryId', 'equal', this.countryObj.value as string);
      this.stateObj.query = tempQuery;
      this.stateObj.text = null;
      this.stateObj.dataBind();
      if (this.cityObj) {
        this.cityObj.text = null;
        this.cityObj.enabled = false;
        this.cityObj.dataBind();
      }
    }
  
    public onChange2(): void {
      if (!this.cityObj || !this.stateObj) return;
      this.cityObj.enabled = true;
      const tempQuery1: Query = new Query().where('StateId', 'equal', this.stateObj.value as string);
      this.cityObj.query = tempQuery1;
      this.cityObj.text = null;
      this.cityObj.dataBind();
    }
    public isScheduleRender = false;
    public headerText = [{ text: 'Arrival' }, { text: 'Departure' }];
  
    public onSelected(args: SelectEventArgs): void {
      if (args.selectedIndex === 0) {
        if (this.headerText[args.selectedIndex].text === 'Front Desk') {
          this.isScheduleRender = true;
        }
      }
    }
  
    public onScheduleCreate(): void {
      if (this.isScheduleRender) {
        this.scheduleObj?.refreshLayout();
        this.isScheduleRender = false;
      }
    }
    
    // public addField(): void {
    //   this.fields.push({ text: '', value: '' });
    // }
    public removeField(index: number): void {
      this.fields.splice(index, 1);
    }
    addField(): void {
      this.fields.push({
        id: this.fields.length,
        selectedId: null,
        availableData: [...this.identification]
      });
    }
  
    onSelectionChange(selectedId: number, fieldId: number): void {
      const field = this.fields.find((f) => f.id === fieldId);
      if (field) {
        field.selectedId = selectedId;
      }
      this.updateAvailableData();
    }
    fields2= [{ id: 0, selectedId: null, availableData: [...this.identification] }];
    updateAvailableData(): void {
      const selectedIds = this.fields
        .filter((field) => field.selectedId !== null)
        .map((field) => field.selectedId);
  
      this.fields.forEach((field) => {
        field.availableData = this.identification.filter(
          (item) => !selectedIds.includes(item['identificationId']) || field.selectedId === item['identificationId']
        );
      });
    }
    private setWidthbookings(sourceId: string, targetSelector: string): void {
      if (!isPlatformBrowser(this.platformId)) return;
  
      const sourceDiv = document.getElementById(sourceId);
      if (!sourceDiv) {
          console.warn(`Source div "${sourceId}" not found. Retrying...`);
          return;
      }
  
      const targetDivs = document.querySelectorAll(targetSelector) as NodeListOf<HTMLElement>;
      const width = sourceDiv.offsetWidth;
  
      targetDivs.forEach(targetDiv => {
          if (targetDiv) {
              this.renderer.setStyle(targetDiv, 'width', `${width}px`);
          }
      });
  }
  

  public setWidth1(): void {
      this.setWidthbookings(
          'scheduleObj2',
          '.custom-scheduler2.e-schedule .e-timeline-view .e-appointment, .e-schedule .e-timeline-month-view'
      );
  }

  public setWidth2(): void {
      this.setWidthbookings(
          'scheduleObj1',
          '.custom-scheduler1.e-schedule .e-timeline-view .e-appointment, .e-schedule .e-timeline-month-view .e-appointment'
      );
  }

  ngAfterViewChecked(): void {
      if (isPlatformBrowser(this.platformId)) {
          this.setWidth1();
          this.setWidth2();
      }
      setTimeout(() => {
        this.setWidthbookings("scheduleObj2", ".target-class"); 
      }, 100);
  }
  private isDestroyed = false;

  }  

interface DateChangeEventArgs {
  startDate: Date;
  endDate: Date;
}
