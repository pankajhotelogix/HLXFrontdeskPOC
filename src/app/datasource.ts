export const viewsData: Array<string> = ["Day", "Week", "Month"];
export const doctorsData: Record<string, any>[] = [];
export const patientsData: Record<string, any>[] = [];
export const waitingList: Record<string, any>[] = [];
export let hospitalData: Record<string, any>[] = [
  {
    Id: 1,
    Name: "abc1",
    StartTime: new Date(2021, 7, 3, 9, 0),
    EndTime: new Date(2021, 7, 2, 9, 0),
    Description: "Room Booking",
    DepartmentId: 4478,
    DoctorId: 1,
    DepartmentName: "DELUX",
  },
  {
    Id: 2,
    Name: "abc2",
    StartTime: new Date(2021, 7, 4, 9, 0),
    EndTime: new Date(2021, 7, 5, 9, 0),
    Description: "Room Booking",
    DepartmentId: 4478,
    DoctorId: 1,
    DepartmentName: "DELUX",
  },
];

export const specializationData: Record<string, any>[] = [
  { DepartmentId: 1, Id: "Delux", Text: "Delux", Color: "#F538B2" },
  { DepartmentId: 2, Id: "Suite", Text: "Suite", Color: "#33C7E8" },
  { DepartmentId: 3, Id: "Luxury", Text: "Luxury", Color: "#916DE4" },
  { DepartmentId: 4, Id: "Standard", Text: "Standard", Color: "#388CF5" },
  { DepartmentId: 5, Id: "Royal Suite", Text: "Royal Suite", Color: "#60F238" },
  { DepartmentId: 6, Id: "cardiology", Text: "Cardiology", Color: "#F29438" },
];
export const experienceData: Record<string, any>[] = [
  { Id: "1+ years", Text: "1+ years" },
  { Id: "2+ years", Text: "2+ years" },
  { Id: "5+ years", Text: "5+ years" },
  { Id: "10+ years", Text: "10+ years" },
  { Id: "15+ years", Text: "15+ years" },
  { Id: "20+ years", Text: "20+ years" },
];

export const dutyTimingsData: Record<string, any>[] = [
  { Id: "Shift1", Text: "08:00 AM - 05:00 PM" },
  { Id: "Shift2", Text: "10:00 AM - 07:00 PM" },
  { Id: "Shift3", Text: "12:00 AM - 09:00 PM" },
];

export const activityData: Record<string, any>[] = [
  {
    Name: "Added New Doctor",
    Message: "Dr.Johnson James, Cardiologist",
    Time: "5 mins ago",
    Type: "doctor",
    ActivityTime: new Date(2020, 7, 8, 9, 0),
  },
  {
    Name: "Added New Appointment",
    Message:
      "Laura for General Checkup on 7th September, 2020 @ 8.30 AM with Dr.Molli Cobb",
    Time: "5 mins ago",
    Type: "appointment",
    ActivityTime: new Date(2020, 7, 8, 11, 0),
  },
  {
    Name: "Added New Patient",
    Message: "James Richard for Fever and cold",
    Time: "5 mins ago",
    Type: "patient",
    ActivityTime: new Date(2020, 7, 8, 10, 0),
  },
  {
    Name: "Added New Appointment",
    Message:
      "Joseph for consultation on 7th December, 2020 @ 11.10 AM with Dr.Molli Cobb",
    Time: "5 mins ago",
    Type: "appointment",
    ActivityTime: new Date(2020, 7, 11, 11, 0),
  },
];

// Preference module data

export const timeSlots: Record<string, any>[] = [
  { Value: 10, Text: "10 mins" },
  { Value: 20, Text: "20 mins" },
  { Value: 30, Text: "30 mins" },
  { Value: 60, Text: "60 mins" },
  { Value: 120, Text: "120 mins" },
];

export const startHours: Record<string, any>[] = [
  { Value: "08:00", Text: "8:00 AM" },
  { Value: "09:00", Text: "9:00 AM" },
  { Value: "10:00", Text: "10:00 AM" },
  { Value: "11:00", Text: "11:00 AM" },
  { Value: "12:00", Text: "12:00 AM" },
];

export const endHours: Record<string, any>[] = [
  { Value: "16:00", Text: "4:00 PM" },
  { Value: "17:00", Text: "5:00 PM" },
  { Value: "18:00", Text: "6:00 PM" },
  { Value: "19:00", Text: "7:00 PM" },
  { Value: "20:00", Text: "8:00 PM" },
  { Value: "21:00", Text: "9:00 PM" },
];

export const views: Record<string, any>[] = [
  { Value: "Day", Text: "Daily" },
  { Value: "Week", Text: "Weekly" },
  { Value: "Month", Text: "Monthly" },
];

export const colorCategory: Record<string, any>[] = [
  { Value: "Departments", Text: "Department Colors" },
  { Value: "Doctors", Text: "Doctors Colors" },
];

export const bloodGroupData: Record<string, any>[] = [
  { Value: "AB+", Text: "AB+" },
  { Value: "A+", Text: "A+" },
  { Value: "B+", Text: "B+" },
  { Value: "O+", Text: "O+" },
  { Value: "AB-", Text: "AB-" },
  { Value: "A-", Text: "A-" },
  { Value: "B-", Text: "B-" },
  { Value: "O-", Text: "O-" },
];

export const dayOfWeekList: Record<string, any>[] = [
  { Value: 0, Text: "Sunday" },
  { Value: 1, Text: "Monday" },
  { Value: 2, Text: "Tuesday" },
  { Value: 3, Text: "Wednesday" },
  { Value: 4, Text: "Thursday" },
  { Value: 5, Text: "Friday" },
  { Value: 6, Text: "Saturday" },
];

// shift wise block data
export const shift1BlockData: Object[] = [
  {
    Id: 1,
    Name: "Off Work",
    StartTime: new Date(2021, 8, 1, 1, 0),
    EndTime: new Date(2021, 8, 3, 23, 59),
    RecurrenceRule: "Audit Night",
    IsAllDay: false,
    IsBlock: true,
  },
];

export let shift2BlockData = [
  {
    Id: 51,
    Name: "Off Work",
    StartTime: new Date(2020, 7, 2, 8, 0),
    EndTime: new Date(2020, 7, 2, 10, 0),
    RecurrenceRule: "FREQ=DAILY;INTERVAL=1;",
    IsAllDay: false,
    IsBlock: true,
    DoctorId: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    Id: 52,
    Name: "Off Work",
    StartTime: new Date(2020, 7, 2, 19, 0),
    EndTime: new Date(2020, 7, 2, 21, 0),
    RecurrenceRule: "FREQ=DAILY;INTERVAL=1;",
    IsAllDay: false,
    IsBlock: true,
    DoctorId: [1, 2, 3, 4, 5, 6, 7],
  },
];

export const shift3BlockData = [
  {
    Id: 53,
    Name: "Off Work",
    StartTime: new Date(2020, 7, 2, 8, 0),
    EndTime: new Date(2020, 7, 2, 12, 0),
    RecurrenceRule: "FREQ=DAILY;INTERVAL=1;",
    IsAllDay: false,
    IsBlock: true,
    DoctorId: [1, 2, 3, 4, 5, 6, 7],
  },
];

export const dataToImport = [
  {
    rsv_type: "f",
    room_type_id: "5067",
    status: "RESERVE",
    checkin_date: "2021-08-01",
    checkout_date: "2021-08-02",
    adult: 1,
    child: 0,
    room_id: "19828",
    bed: 1,
    rate_id: "34619",
    preferences: "hello preferences",
    message: "hello message from guest",
    owner_details: {
      first_name: "Manish",
      last_name: "Singh",
      phone_number: "1234567",
    }
  },
];
export const blockData :  Object[]= [
  {
    Id: 1,
    Name: "Off Work",
    StartTime: new Date(2021, 8, 1, 1, 0),
    EndTime: new Date(2021, 8, 3, 23, 59),
    RecurrenceRule: "Audit Night",
    IsAllDay: false,
    IsBlock: true,
  },
];
export let fifaEventsData: Object[] = [
  {
      Id: 1,
      Subject: 'RUSSIA vs SAUDI ARABIA',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 14, 15, 0),
      EndTime: new Date(2018, 5, 14, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 2,
      Subject: 'EGYPT vs URUGUAY',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 15, 12, 0),
      EndTime: new Date(2018, 5, 15, 14, 0),
      StartTimezone: 'Asia/Yekaterinburg',
      EndTimezone: 'Asia/Yekaterinburg',
      City: 'Ekaterinburg',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 3,
      Subject: 'MOROCCO vs IR IRAN',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 15, 15, 0),
      EndTime: new Date(2018, 5, 15, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saint Petersburg',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 4,
      Subject: 'PORTUGAL vs SPAIN',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 15, 18, 0),
      EndTime: new Date(2018, 5, 15, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Sochi',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 5,
      Subject: 'FRANCE vs AUSTRALIA',
      Description: 'Group C',
      StartTime: new Date(2018, 5, 16, 10, 0),
      EndTime: new Date(2018, 5, 16, 12, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Kazan',
      CategoryColor: '#7fa900',
      GroupId: 3
  }, {
      Id: 6,
      Subject: 'ARGENTINA vs ICELAND',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 16, 13, 0),
      EndTime: new Date(2018, 5, 16, 15, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 7,
      Subject: 'PERU vs DENMARK',
      Description: 'Group C',
      StartTime: new Date(2018, 5, 16, 16, 0),
      EndTime: new Date(2018, 5, 16, 18, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saransk',
      CategoryColor: '#7fa900',
      GroupId: 3
  }, {
      Id: 8,
      Subject: 'CROATIA vs NIGERIA',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 16, 19, 0),
      EndTime: new Date(2018, 5, 16, 21, 0),
      StartTimezone: 'Europe/Kaliningrad',
      EndTimezone: 'Europe/Kaliningrad',
      City: 'Kaliningrad',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 9,
      Subject: 'COSTA RICA vs SERBIA',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 17, 12, 0),
      EndTime: new Date(2018, 5, 17, 14, 0),
      StartTimezone: 'Europe/Samara',
      EndTimezone: 'Europe/Samara',
      City: 'Samara',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 10,
      Subject: 'GERMANY vs MEXICO',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 17, 15, 0),
      EndTime: new Date(2018, 5, 17, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 11,
      Subject: 'BRAZIL vs SWITZERLAND',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 17, 18, 0),
      EndTime: new Date(2018, 5, 17, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Rostov-On-Don',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 12,
      Subject: 'SWEDEN vs KOREA REPUBLIC',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 18, 12, 0),
      EndTime: new Date(2018, 5, 18, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Nizhny Novgorod',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 13,
      Subject: 'BELGIUM vs PANAMA',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 18, 15, 0),
      EndTime: new Date(2018, 5, 18, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Sochi',
      CategoryColor: '#8e24aa',
      GroupId: 7
  }, {
      Id: 14,
      Subject: 'TUNISIA vs ENGLAND',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 18, 18, 0),
      EndTime: new Date(2018, 5, 18, 20, 0),
      StartTimezone: 'Europe/Volgograd',
      EndTimezone: 'Europe/Volgograd',
      City: 'Volgograd',
      CategoryColor: '#8e24aa',
      GroupId: 7
  }, {
      Id: 15,
      Subject: 'COLOMBIA vs JAPAN',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 19, 12, 0),
      EndTime: new Date(2018, 5, 19, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saransk',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 16,
      Subject: 'POLAND vs SENEGAL',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 19, 15, 0),
      EndTime: new Date(2018, 5, 19, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 17,
      Subject: 'RUSSIA vs EGYPT',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 19, 18, 0),
      EndTime: new Date(2018, 5, 19, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saint Petersburg',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 18,
      Subject: 'PORTUGAL vs MOROCCO',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 20, 12, 0),
      EndTime: new Date(2018, 5, 20, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Rostov-On-Don',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 19,
      Subject: 'URUGUAY vs SAUDI ARABIA',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 20, 15, 0),
      EndTime: new Date(2018, 5, 20, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 20,
      Subject: 'IR IRAN vs SPAIN',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 20, 18, 0),
      EndTime: new Date(2018, 5, 20, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Kazan',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 21,
      Subject: 'DENMARK vs AUSTRALIA',
      Description: 'Group C',
      StartTime: new Date(2018, 5, 21, 12, 0),
      EndTime: new Date(2018, 5, 21, 14, 0),
      StartTimezone: 'Europe/Samara',
      EndTimezone: 'Europe/Samara',
      City: 'Samara',
      CategoryColor: '#7fa900',
      GroupId: 3
  }, {
      Id: 22,
      Subject: 'FRANCE vs PERU',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 21, 15, 0),
      EndTime: new Date(2018, 5, 21, 17, 0),
      StartTimezone: 'Asia/Yekaterinburg',
      EndTimezone: 'Asia/Yekaterinburg',
      City: 'Ekaterinburg',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 23,
      Subject: 'ARGENTINA vs CROATIA',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 21, 18, 0),
      EndTime: new Date(2018, 5, 21, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Nizhny Novgorod',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 24,
      Subject: 'BRAZIL vs COSTA RICA',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 22, 12, 0),
      EndTime: new Date(2018, 5, 22, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saint Petersburg',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 25,
      Subject: 'NIGERIA vs ICELAND',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 22, 15, 0),
      EndTime: new Date(2018, 5, 22, 17, 0),
      StartTimezone: 'Europe/Volgograd',
      EndTimezone: 'Europe/Volgograd',
      City: 'Volgograd',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 26,
      Subject: 'SERBIA vs SWITZERLAND',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 22, 18, 0),
      EndTime: new Date(2018, 5, 22, 20, 0),
      StartTimezone: 'Europe/Kaliningrad',
      EndTimezone: 'Europe/Kaliningrad',
      City: 'Kaliningrad',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 27,
      Subject: 'BELGIUM vs TUNISIA',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 23, 12, 0),
      EndTime: new Date(2018, 5, 23, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#8e24aa',
      GroupId: 7
  }, {
      Id: 28,
      Subject: 'KOREA REPUBLIC vs MEXICO',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 23, 15, 0),
      EndTime: new Date(2018, 5, 23, 17, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Rostov-On-Don',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 29,
      Subject: 'GERMANY vs SWEDEN',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 23, 18, 0),
      EndTime: new Date(2018, 5, 23, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Sochi',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 30,
      Subject: 'ENGLAND vs PANAMA',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 24, 12, 0),
      EndTime: new Date(2018, 5, 24, 14, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Nizhny Novgorod',
      CategoryColor: '#8e24aa',
      GroupId: 7
  }, {
      Id: 31,
      Subject: 'JAPAN vs SENEGAL',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 24, 15, 0),
      EndTime: new Date(2018, 5, 24, 17, 0),
      StartTimezone: 'Asia/Yekaterinburg',
      EndTimezone: 'Asia/Yekaterinburg',
      City: 'Ekaterinburg',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 32,
      Subject: 'POLAND vs COLOMBIA',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 24, 18, 0),
      EndTime: new Date(2018, 5, 24, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Kazan',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 33,
      Subject: 'URUGUAY vs RUSSIA',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 25, 14, 0),
      EndTime: new Date(2018, 5, 25, 16, 0),
      StartTimezone: 'Europe/Samara',
      EndTimezone: 'Europe/Samara',
      City: 'Samara',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 34,
      Subject: 'SAUDI ARABIA vs EGYPT',
      Description: 'Group A',
      StartTime: new Date(2018, 5, 25, 14, 0),
      EndTime: new Date(2018, 5, 25, 16, 0),
      StartTimezone: 'Europe/Volgograd',
      EndTimezone: 'Europe/Volgograd',
      City: 'Volgograd',
      CategoryColor: '#1aaa55',
      GroupId: 1
  }, {
      Id: 35,
      Subject: 'IR IRAN vs PORTUGAL',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 25, 18, 0),
      EndTime: new Date(2018, 5, 25, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saransk',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 36,
      Subject: 'SPAIN vs MOROCCO',
      Description: 'Group B',
      StartTime: new Date(2018, 5, 25, 18, 0),
      EndTime: new Date(2018, 5, 25, 20, 0),
      StartTimezone: 'Europe/Kaliningrad',
      EndTimezone: 'Europe/Kaliningrad',
      City: 'Kaliningrad',
      CategoryColor: '#357cd2',
      GroupId: 2
  }, {
      Id: 37,
      Subject: 'DENMARK vs FRANCE',
      Description: 'Group C',
      StartTime: new Date(2018, 5, 26, 14, 0),
      EndTime: new Date(2018, 5, 26, 16, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#7fa900',
      GroupId: 3
  }, {
      Id: 38,
      Subject: 'AUSTRALIA vs PERU',
      Description: 'Group C',
      StartTime: new Date(2018, 5, 26, 14, 0),
      EndTime: new Date(2018, 5, 26, 16, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Sochi',
      CategoryColor: '#7fa900',
      GroupId: 3
  }, {
      Id: 39,
      Subject: 'NIGERIA vs ARGENTINA',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 26, 18, 0),
      EndTime: new Date(2018, 5, 26, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saint Petersburg',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 40,
      Subject: 'ICELAND vs CROATIA',
      Description: 'Group D',
      StartTime: new Date(2018, 5, 26, 18, 0),
      EndTime: new Date(2018, 5, 26, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Rostov-On-Don',
      CategoryColor: '#ea7a57',
      GroupId: 4
  }, {
      Id: 41,
      Subject: 'MEXICO vs SWEDEN',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 27, 14, 0),
      EndTime: new Date(2018, 5, 27, 16, 0),
      StartTimezone: 'Asia/Yekaterinburg',
      EndTimezone: 'Asia/Yekaterinburg',
      City: 'Ekaterinburg',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 42,
      Subject: 'KOREA REPUBLIC vs GERMANY',
      Description: 'Group F',
      StartTime: new Date(2018, 5, 27, 14, 0),
      EndTime: new Date(2018, 5, 27, 16, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Kazan',
      CategoryColor: '#f57f17',
      GroupId: 6
  }, {
      Id: 43,
      Subject: 'SERBIA vs BRAZIL',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 27, 18, 0),
      EndTime: new Date(2018, 5, 27, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Moscow',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 44,
      Subject: 'SWITZERLAND vs COSTA RICA',
      Description: 'Group E',
      StartTime: new Date(2018, 5, 27, 18, 0),
      EndTime: new Date(2018, 5, 27, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Nizhny Novgorod',
      CategoryColor: '#00bdae',
      GroupId: 5
  }, {
      Id: 45,
      Subject: 'JAPAN vs POLAND',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 28, 14, 0),
      EndTime: new Date(2018, 5, 28, 16, 0),
      StartTimezone: 'Europe/Volgograd',
      EndTimezone: 'Europe/Volgograd',
      City: 'Volgograd',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 46,
      Subject: 'SENEGAL vs COLOMBIA',
      Description: 'Group H',
      StartTime: new Date(2018, 5, 28, 14, 0),
      EndTime: new Date(2018, 5, 28, 16, 0),
      StartTimezone: 'Europe/Samara',
      EndTimezone: 'Europe/Samara',
      City: 'Samara',
      CategoryColor: '#7fa900',
      GroupId: 8
  }, {
      Id: 47,
      Subject: 'PANAMA vs TUNISIA',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 28, 18, 0),
      EndTime: new Date(2018, 5, 28, 20, 0),
      StartTimezone: 'Europe/Moscow',
      EndTimezone: 'Europe/Moscow',
      City: 'Saransk',
      CategoryColor: '#8e24aa',
      GroupId: 4
  }, {
      Id: 48,
      Subject: 'ENGLAND vs BELGIUM',
      Description: 'Group G',
      StartTime: new Date(2018, 5, 28, 18, 0),
      EndTime: new Date(2018, 5, 28, 20, 0),
      StartTimezone: 'Europe/Kaliningrad',
      EndTimezone: 'Europe/Kaliningrad',
      City: 'Kaliningrad',
      CategoryColor: '#8e24aa',
      GroupId: 4
  }
];

export let scheduleData: Object[] = [
  {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2018, 1, 11, 9, 30),
      EndTime: new Date(2018, 1, 11, 11, 0),
      CategoryColor: '#1aaa55'
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
      CategoryColor: '#ea7a57'
  }, {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
      CategoryColor: '#f57f17'
  }, {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2018, 1, 16, 11, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      CategoryColor: '#1aaa55'
  }, {
      Id: 8,
      Subject: 'Life on Mars',
      StartTime: new Date(2018, 1, 17, 9, 0),
      EndTime: new Date(2018, 1, 17, 10, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 9,
      Subject: 'Alien Civilization',
      StartTime: new Date(2018, 1, 19, 11, 0),
      EndTime: new Date(2018, 1, 19, 13, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 10,
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2018, 1, 21, 11, 0),
      EndTime: new Date(2018, 1, 21, 13, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 11,
      Subject: 'Best Photography 2018',
      StartTime: new Date(2018, 1, 22, 9, 30),
      EndTime: new Date(2018, 1, 22, 11, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 12,
      Subject: 'Smarter Puppies',
      StartTime: new Date(2018, 1, 9, 10, 0),
      EndTime: new Date(2018, 1, 9, 11, 30),
      CategoryColor: '#f57f17'
  }, {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      StartTime: new Date(2018, 1, 7, 10, 30),
      EndTime: new Date(2018, 1, 7, 12, 30),
      CategoryColor: '#1aaa55'
  }, {
      Id: 14,
      Subject: 'Aliens vs Humans',
      StartTime: new Date(2018, 1, 5, 10, 0),
      EndTime: new Date(2018, 1, 5, 11, 30),
      CategoryColor: '#357cd2'
  }, {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      StartTime: new Date(2018, 1, 20, 9, 30),
      EndTime: new Date(2018, 1, 20, 11, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 16,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 23, 11, 0),
      EndTime: new Date(2018, 1, 23, 13, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      StartTime: new Date(2018, 1, 12, 5, 30),
      EndTime: new Date(2018, 1, 12, 7, 30),
      CategoryColor: '#00bdae'
  }, {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      StartTime: new Date(2018, 1, 12, 17, 0),
      EndTime: new Date(2018, 1, 12, 18, 30),
      CategoryColor: '#f57f17'
  }, {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      StartTime: new Date(2018, 1, 15, 6, 0),
      EndTime: new Date(2018, 1, 15, 7, 30),
      CategoryColor: '#7fa900'
  }, {
      Id: 20,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 15, 16, 0),
      EndTime: new Date(2018, 1, 15, 18, 0),
      CategoryColor: '#ea7a57'
  }
];

export let timeZoneData: Object[] = [
  {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: "2018-02-11T14:00:00.000Z",
      EndTime: "2018-02-11T15:30:00.000Z",
      CategoryColor: "#1aaa55"
  }, {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: "2018-02-12T16:30:00.000Z",
      EndTime: "2018-02-12T18:30:00.000Z",
      CategoryColor: "#357cd2"
  }, {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: "2018-02-13T14:00:00.000Z",
      EndTime: "2018-02-13T15:30:00.000Z",
      CategoryColor: "#7fa900"
  }, {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: "2018-02-14T17:30:00.000Z",
      EndTime: "2018-02-14T19:00:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 5,
      Subject: "Milky Way as Melting pot",
      StartTime: "2018-02-15T16:30:00.000Z",
      EndTime: "2018-02-15T018:30:00.000Z",
      CategoryColor: "#00bdae"
  }, {
      Id: 6,
      Subject: "Mysteries of Bermuda Triangle",
      StartTime: "2018-02-15T14:00:00.000Z",
      EndTime: "2018-02-15T15:30:00.000Z",
      CategoryColor: "#f57f17"
  }, {
      Id: 7,
      Subject: "Glaciers and Snowflakes",
      StartTime: "2018-02-16T15:30:00.000Z",
      EndTime: "2018-02-16T017:00:00.000Z",
      CategoryColor: "#1aaa55"
  }, {
      Id: 8,
      Subject: "Life on Mars",
      StartTime: "2018-02-17T13:30:00.000Z",
      EndTime: "2018-02-17T14:30:00.000Z",
      CategoryColor: "#357cd2"
  }, {
      Id: 9,
      Subject: "Alien Civilization",
      StartTime: "2018-02-19T15:30:00.000Z",
      EndTime: "2018-02-19T17:30:00.000Z",
      CategoryColor: "#7fa900"
  }, {
      Id: 10,
      Subject: "Wildlife Galleries",
      StartTime: "2018-02-21T15:30:00.000Z",
      EndTime: "2018-02-21T17:30:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 11,
      Subject: "Best Photography 2018",
      StartTime: "2018-02-22T14:00:00.000Z",
      EndTime: "2018-02-22T15:30:00.000Z",
      CategoryColor: "#00bdae"
  }, {
      Id: 12,
      Subject: "Smarter Puppies",
      StartTime: "2018-02-09T14:30:00.000Z",
      EndTime: "2018-02-09T16:00:00.000Z",
      CategoryColor: "#f57f17"
  }, {
      Id: 13,
      Subject: "Myths of Andromeda Galaxy",
      StartTime: "2018-02-07T15:00:00.000Z",
      EndTime: "2018-02-07T17:00:00.000Z",
      CategoryColor: "#1aaa55"
  }, {
      Id: 14,
      Subject: "Aliens vs Humans",
      StartTime: "2018-02-05T14:30:00.000Z",
      EndTime: "2018-02-05T16:00:00.000Z",
      CategoryColor: "#357cd2"
  }, {
      Id: 15,
      Subject: "Facts of Humming Birds",
      StartTime: "2018-02-20T14:00:00.000Z",
      EndTime: "2018-02-20T15:30:00.000Z",
      CategoryColor: "#7fa900"
  }, {
      Id: 16,
      Subject: "Sky Gazers",
      StartTime: "2018-02-23T15:30:00.000Z",
      EndTime: "2018-02-23T17:30:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 17,
      Subject: "The Cycle of Seasons",
      StartTime: "2018-02-12T00:00:00.000Z",
      EndTime: "2018-02-12T02:00:00.000Z",
      CategoryColor: "#00bdae"
  }, {
      Id: 18,
      Subject: "Space Galaxies and Planets",
      StartTime: "2018-02-12T17:30:00.000Z",
      EndTime: "2018-02-12T18:00:00.000Z",
      CategoryColor: "#f57f17"
  }, {
      Id: 19,
      Subject: "Lifecycle of Bumblebee",
      StartTime: "2018-02-15T00:30:00.000Z",
      EndTime: "2018-02-15T02:00:00.000Z",
      CategoryColor: "#7fa900"
  }, {
      Id: 20,
      Subject: "Alien Civilization",
      StartTime: "2018-02-15T18:30:00.000Z",
      EndTime: "2018-02-15T19:30:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 21,
      Subject: "Alien Civilization",
      StartTime: "2018-02-11T18:30:00.000Z",
      EndTime: "2018-02-11T20:30:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 22,
      Subject: "The Cycle of Seasons",
      StartTime: "2018-02-13T19:00:00.000Z",
      EndTime: "2018-02-13T20:30:00.000Z",
      CategoryColor: "#00bdae"
  }, {
      Id: 23,
      Subject: "Sky Gazers",
      StartTime: "2018-02-16T19:00:00.000Z",
      EndTime: "2018-02-16T20:30:00.000Z",
      CategoryColor: "#ea7a57"
  }, {
      Id: 24,
      Subject: "Facts of Humming Birds",
      StartTime: "2018-02-17T17:00:00.000Z",
      EndTime: "2018-02-17T19:00:00.000Z",
      CategoryColor: "#7fa900"
  }
];

export let eventData: Object[] = [
  {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#1aaa55'
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#f57f17'
  }, {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#1aaa55'
  }, {
      Id: 8,
      Subject: 'Life on Mars',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 9,
      Subject: 'Alien Civilization',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 10,
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 11,
      Subject: 'Best Photography 2018',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 12,
      Subject: 'Smarter Puppies',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#f57f17'
  }, {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#1aaa55'
  }, {
      Id: 14,
      Subject: 'Aliens vs Humans',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 16,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#f57f17'
  }, {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 20,
      Subject: 'Sky Gazers',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#ea7a57'
  }
];

export let resourceData: Object[] = [
  {
      Id: 1,
      Subject: 'Workflow Analysis',
      StartTime: new Date(2018, 3, 1, 9, 30),
      EndTime: new Date(2018, 3, 1, 12, 0),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 2,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 1, 12, 30),
      EndTime: new Date(2018, 3, 1, 14, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 3,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 2, 10, 0),
      EndTime: new Date(2018, 3, 2, 12, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 4,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 2, 13, 0),
      EndTime: new Date(2018, 3, 2, 15, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 5,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 3, 9, 0),
      EndTime: new Date(2018, 3, 3, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 6,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 3, 14, 0),
      EndTime: new Date(2018, 3, 3, 16, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 7,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 4, 11, 15),
      EndTime: new Date(2018, 3, 4, 13, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 8,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 4, 9, 15),
      EndTime: new Date(2018, 3, 4, 11, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 9,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 5, 9, 30),
      EndTime: new Date(2018, 3, 5, 12, 45),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 10,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 5, 13, 45),
      EndTime: new Date(2018, 3, 5, 16, 30),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 11,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 6, 10, 0),
      EndTime: new Date(2018, 3, 6, 12, 15),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 12,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 6, 9, 0),
      EndTime: new Date(2018, 3, 6, 11, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 13,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 7, 13, 0),
      EndTime: new Date(2018, 3, 7, 15, 15),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 14,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 7, 9),
      EndTime: new Date(2018, 3, 7, 11),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 15,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 8, 9, 45),
      EndTime: new Date(2018, 3, 8, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 16,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 8, 10, 30),
      EndTime: new Date(2018, 3, 8, 13, 0),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 17,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 9, 12),
      EndTime: new Date(2018, 3, 9, 15, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 18,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 9, 9, 0),
      EndTime: new Date(2018, 3, 9, 11, 15),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 19,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 10, 10, 10),
      EndTime: new Date(2018, 3, 10, 13, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 20,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 10, 10, 30),
      EndTime: new Date(2018, 3, 10, 12, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 21,
      Subject: 'workflow Analysis',
      StartTime: new Date(2018, 3, 11, 9, 30),
      EndTime: new Date(2018, 3, 11, 11, 30),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 22,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 11, 12, 30),
      EndTime: new Date(2018, 3, 11, 14, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 23,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 12, 10),
      EndTime: new Date(2018, 3, 12, 12, 30),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 24,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 12, 13),
      EndTime: new Date(2018, 3, 12, 14, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 25,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 13, 9),
      EndTime: new Date(2018, 3, 13, 11),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 26,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 13, 14),
      EndTime: new Date(2018, 3, 13, 15, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 27,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 14, 11),
      EndTime: new Date(2018, 3, 14, 13),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 28,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 14, 9),
      EndTime: new Date(2018, 3, 14, 11, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 29,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 15, 9, 30),
      EndTime: new Date(2018, 3, 15, 11),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 30,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 15, 14),
      EndTime: new Date(2018, 3, 15, 16, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 31,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 16, 10),
      EndTime: new Date(2018, 3, 16, 11),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 32,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 16, 9),
      EndTime: new Date(2018, 3, 16, 11, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 33,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 17, 14),
      EndTime: new Date(2018, 3, 17, 15),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 34,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 17, 9),
      EndTime: new Date(2018, 3, 17, 11),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 35,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 18, 10),
      EndTime: new Date(2018, 3, 18, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 36,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 18, 10),
      EndTime: new Date(2018, 3, 18, 10, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 37,
      Subject: 'Bug fixing',
      StartTime: new Date(2018, 3, 9, 10),
      EndTime: new Date(2018, 3, 9, 10, 30),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 38,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 19, 9),
      EndTime: new Date(2018, 3, 19, 10, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 39,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 20, 10),
      EndTime: new Date(2018, 3, 20, 11),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 40,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 20, 10, 30),
      EndTime: new Date(2018, 3, 20, 12, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 41,
      Subject: 'workflow Analysis',
      StartTime: new Date(2018, 3, 21, 9, 30),
      EndTime: new Date(2018, 3, 21, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 42,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 21, 12, 30),
      EndTime: new Date(2018, 3, 21, 13, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 43,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 22, 10),
      EndTime: new Date(2018, 3, 22, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 44,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 22, 13),
      EndTime: new Date(2018, 3, 22, 14, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 45,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 23, 9),
      EndTime: new Date(2018, 3, 23, 10),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 46,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 23, 14),
      EndTime: new Date(2018, 3, 23, 15, 45),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 47,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 24, 11),
      EndTime: new Date(2018, 3, 24, 12),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 48,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 24, 9),
      EndTime: new Date(2018, 3, 24, 11, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 49,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 25, 9, 30),
      EndTime: new Date(2018, 3, 25, 11),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 50,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 25, 14),
      EndTime: new Date(2018, 3, 25, 15, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 51,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 26, 10),
      EndTime: new Date(2018, 3, 26, 11),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 52,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 26, 9),
      EndTime: new Date(2018, 3, 26, 11, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 53,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 27, 14),
      EndTime: new Date(2018, 3, 27, 15),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 54,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 27, 9),
      EndTime: new Date(2018, 3, 27, 11),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 55,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 28, 10),
      EndTime: new Date(2018, 3, 28, 11, 30),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 56,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 28, 10),
      EndTime: new Date(2018, 3, 28, 10, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 57,
      Subject: 'Bug fixing',
      StartTime: new Date(2018, 3, 29, 12),
      EndTime: new Date(2018, 3, 29, 12, 30),
      IsAllDay: false,
      OwnerId: 3,
      RoomId: 1
  }, {
      Id: 58,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 29, 9),
      EndTime: new Date(2018, 3, 29, 10, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }, {
      Id: 59,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 30, 10),
      EndTime: new Date(2018, 3, 30, 11),
      IsAllDay: false,
      OwnerId: 1,
      RoomId: 1
  }, {
      Id: 60,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 30, 10, 30),
      EndTime: new Date(2018, 3, 30, 12, 30),
      IsAllDay: false,
      OwnerId: 2,
      RoomId: 2
  }
];

export let roomData: Object[] = [
  {
      Id: 1,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2018.',
      StartTime: new Date(2018, 6, 30, 9, 0),
      EndTime: new Date(2018, 6, 30, 11, 0),
      RoomId: 1
  },
  {
      Id: 2,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2018, 6, 30, 15, 0),
      EndTime: new Date(2018, 6, 30, 17, 0),
      RoomId: 5
  },
  {
      Id: 3,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2018, 6, 30, 9, 30),
      EndTime: new Date(2018, 6, 30, 11, 0),
      RoomId: 3
  },
  {
      Id: 4,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2018, 6, 30, 11, 0),
      EndTime: new Date(2018, 6, 30, 13, 0),
      RoomId: 4
  },
  {
      Id: 5,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 6, 30, 16, 0),
      EndTime: new Date(2018, 6, 30, 17, 30),
      RoomId: 5
  },
  {
      Id: 6, Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2018, 6, 30, 10, 30),
      EndTime: new Date(2018, 6, 30, 13, 0),
      RoomId: 6
  },
  {
      Id: 7,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2018, 6, 30, 15, 0),
      EndTime: new Date(2018, 6, 30, 16, 30),
      RoomId: 7
  },
  {
      Id: 8,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 6, 30, 8, 0),
      EndTime: new Date(2018, 6, 30, 9, 0),
      RoomId: 4
  },
  {
      Id: 9,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2018, 6, 30, 10, 0),
      EndTime: new Date(2018, 6, 30, 12, 0),
      RoomId: 8
  },
  {
      Id: 10,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 6, 30, 14, 30),
      EndTime: new Date(2018, 6, 30, 17, 0),
      RoomId: 9
  },
  {
      Id: 11,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2018, 6, 30, 9, 0),
      EndTime: new Date(2018, 6, 30, 10, 30),
      RoomId: 10
  },
  {
      Id: 12,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2018, 6, 30, 11, 30),
      EndTime: new Date(2018, 6, 30, 12, 0),
      RoomId: 5
  },
  {
      Id: 13,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 6, 30, 14, 0),
      EndTime: new Date(2018, 6, 30, 16, 0),
      RoomId: 5
  },
  {
      Id: 14,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2018.',
      StartTime: new Date(2018, 6, 31, 9, 0),
      EndTime: new Date(2018, 6, 31, 11, 0),
      RoomId: 1
  },
  {
      Id: 15,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2018, 6, 31, 14, 0),
      EndTime: new Date(2018, 6, 31, 17, 0),
      RoomId: 6
  },
  {
      Id: 16,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2018, 6, 31, 9, 30),
      EndTime: new Date(2018, 6, 31, 11, 0),
      RoomId: 2
  },
  {
      Id: 17,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2018, 6, 31, 11, 0),
      EndTime: new Date(2018, 6, 31, 13, 0),
      RoomId: 7
  },
  {
      Id: 18,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 6, 31, 16, 0),
      EndTime: new Date(2018, 6, 31, 17, 30),
      RoomId: 2
  },
  {
      Id: 19,
      Subject: 'Training session on C#',
      Description: 'Training session',
      StartTime: new Date(2018, 6, 31, 14, 30),
      EndTime: new Date(2018, 6, 31, 16, 0),
      RoomId: 9
  },
  {
      Id: 20,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2018, 6, 31, 10, 30),
      EndTime: new Date(2018, 6, 31, 13, 0),
      RoomId: 3
  },
  {
      Id: 21,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2018, 6, 31, 15, 0),
      EndTime: new Date(2018, 6, 31, 16, 30),
      RoomId: 3
  },
  {
      Id: 22,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 6, 31, 8, 0),
      EndTime: new Date(2018, 6, 31, 9, 0),
      RoomId: 4
  },
  {
      Id: 23,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2018, 6, 31, 10, 0),
      EndTime: new Date(2018, 6, 31, 12, 0),
      RoomId: 4
  },
  {
      Id: 24,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 7, 1, 16, 30),
      EndTime: new Date(2018, 7, 1, 18, 0),
      RoomId: 10
  },
  {
      Id: 25,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2018, 6, 31, 9, 0),
      EndTime: new Date(2018, 6, 31, 10, 30),
      RoomId: 5
  },
  {
      Id: 26,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2018, 6, 31, 11, 30),
      EndTime: new Date(2018, 6, 31, 12, 0),
      RoomId: 5
  },
  {
      Id: 27,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 6, 31, 14, 0),
      EndTime: new Date(2018, 6, 31, 16, 0),
      RoomId: 10
  },

  {
      Id: 28,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2018.',
      StartTime: new Date(2018, 7, 1, 9, 0),
      EndTime: new Date(2018, 7, 1, 11, 0),
      RoomId: 1
  },
  {
      Id: 29,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2018, 7, 1, 17, 0),
      EndTime: new Date(2018, 7, 1, 20, 0),
      RoomId: 6
  },
  {
      Id: 30,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2018, 7, 1, 10, 30),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 2
  },
  {
      Id: 31,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2018, 7, 1, 10, 30),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 2
  },
  {
      Id: 32,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 7, 1, 10, 30),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 2
  },
  {
      Id: 33,
      Subject: 'Training session on C#',
      Description: 'Training session',
      StartTime: new Date(2018, 7, 1, 14, 30),
      EndTime: new Date(2018, 7, 1, 16, 0),
      RoomId: 2
  },
  {
      Id: 34,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2018, 7, 1, 10, 30),
      EndTime: new Date(2018, 7, 1, 13, 0),
      RoomId: 3
  },
  {
      Id: 35,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2018, 7, 1, 15, 0),
      EndTime: new Date(2018, 7, 1, 16, 30),
      RoomId: 8
  },
  {
      Id: 36,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 7, 1, 9, 30),
      EndTime: new Date(2018, 7, 1, 11, 30),
      RoomId: 4
  },
  {
      Id: 37,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2018, 7, 1, 10, 0),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 9
  },
  {
      Id: 38,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 7, 1, 15, 0),
      EndTime: new Date(2018, 7, 1, 17, 0),
      RoomId: 4
  },
  {
      Id: 39,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2018, 7, 1, 9, 0),
      EndTime: new Date(2018, 7, 1, 10, 30),
      RoomId: 5
  },
  {
      Id: 40,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2018, 7, 1, 11, 30),
      EndTime: new Date(2018, 7, 1, 12, 30),
      RoomId: 5
  },
  {
      Id: 41,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 7, 1, 14, 0),
      EndTime: new Date(2018, 7, 1, 16, 0),
      RoomId: 10
  },
  {
      Id: 43,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 7, 1, 18, 0),
      EndTime: new Date(2018, 7, 1, 20, 0),
      RoomId: 2
  },
  {
      Id: 44,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 7, 1, 17, 30),
      EndTime: new Date(2018, 7, 1, 20, 0),
      RoomId: 1
  },
  {
      Id: 45,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2018, 7, 1, 16, 30),
      EndTime: new Date(2018, 7, 1, 18, 0),
      RoomId: 3
  },
  {
      Id: 46,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 7, 1, 18, 30),
      EndTime: new Date(2018, 7, 1, 20, 0),
      RoomId: 4
  },
  {
      Id: 47,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 7, 1, 15, 30),
      EndTime: new Date(2018, 7, 1, 18, 0),
      RoomId: 5
  },
  {
      Id: 48,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 7, 1, 18, 30),
      EndTime: new Date(2018, 7, 1, 20, 0),
      RoomId: 5
  },
  {
      Id: 49,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2018, 7, 1, 14, 30),
      EndTime: new Date(2018, 7, 1, 16, 0),
      RoomId: 6
  },
  {
      Id: 50,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2018, 7, 1, 9, 30),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 6
  },
  {
      Id: 51,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2018, 7, 1, 10, 30),
      EndTime: new Date(2018, 7, 1, 12, 0),
      RoomId: 7
  },
  {
      Id: 52,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2018, 7, 1, 18, 0),
      EndTime: new Date(2018, 7, 1, 19, 30),
      RoomId: 7
  },
  {
      Id: 53,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 7, 1, 15, 30),
      EndTime: new Date(2018, 7, 1, 17, 0),
      RoomId: 9
  },
  {
      Id: 54,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 7, 1, 11, 0),
      EndTime: new Date(2018, 7, 1, 12, 30),
      RoomId: 8
  },
  {
      Id: 55,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2018, 7, 1, 11, 0),
      EndTime: new Date(2018, 7, 1, 12, 30),
      RoomId: 10
  }
];

export let schedulerData: Object[] = [
  {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2021, 7, 11, 9, 30),
      EndTime: new Date(2021, 7, 11, 11, 0),
      CategoryColor: '#1aaa55'
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2021, 7, 12, 12, 0),
      EndTime: new Date(2021, 7, 12, 14, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2021, 7, 13, 9, 30),
      EndTime: new Date(2021, 7, 13, 11, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2021, 7, 14, 13, 0),
      EndTime: new Date(2021, 7, 14, 14, 30),
      CategoryColor: '#ea7a57'
  }, {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2021, 7, 15, 12, 0),
      EndTime: new Date(2021, 7, 15, 14, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2021, 7, 15, 9, 30),
      EndTime: new Date(2021, 7, 15, 11, 0),
      CategoryColor: '#f57f17'
  }, {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2021, 7, 16, 11, 0),
      EndTime: new Date(2021, 7, 16, 12, 30),
      CategoryColor: '#1aaa55'
  }, {
      Id: 8,
      Subject: 'Life on Mars',
      StartTime: new Date(2021, 7, 17, 9, 0),
      EndTime: new Date(2021, 7, 17, 10, 0),
      CategoryColor: '#357cd2'
  }, {
      Id: 9,
      Subject: 'Alien Civilization',
      StartTime: new Date(2021, 7, 19, 11, 0),
      EndTime: new Date(2021, 7, 19, 13, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 10,
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2021, 7, 21, 11, 0),
      EndTime: new Date(2021, 7, 21, 13, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 11,
      Subject: 'Best Photography 2018',
      StartTime: new Date(2021, 7, 22, 9, 30),
      EndTime: new Date(2021, 7, 22, 11, 0),
      CategoryColor: '#00bdae'
  }, {
      Id: 12,
      Subject: 'Smarter Puppies',
      StartTime: new Date(2021, 7, 9, 10, 0),
      EndTime: new Date(2021, 7, 9, 11, 30),
      CategoryColor: '#f57f17'
  }, {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      StartTime: new Date(2021, 7, 7, 10, 30),
      EndTime: new Date(2021, 7, 7, 12, 30),
      CategoryColor: '#1aaa55'
  }, {
      Id: 14,
      Subject: 'Aliens vs Humans',
      StartTime: new Date(2021, 7, 5, 10, 0),
      EndTime: new Date(2021, 7, 5, 11, 30),
      CategoryColor: '#357cd2'
  }, {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      StartTime: new Date(2021, 7, 20, 9, 30),
      EndTime: new Date(2021, 7, 20, 11, 0),
      CategoryColor: '#7fa900'
  }, {
      Id: 16,
      Subject: 'Sky Gazers',
      StartTime: new Date(2021, 7, 23, 11, 0),
      EndTime: new Date(2021, 7, 23, 13, 0),
      CategoryColor: '#ea7a57'
  }, {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      StartTime: new Date(2021, 7, 12, 5, 30),
      EndTime: new Date(2021, 7, 12, 7, 30),
      CategoryColor: '#00bdae'
  }, {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      StartTime: new Date(2021, 7, 12, 17, 0),
      EndTime: new Date(2021, 7, 12, 18, 30),
      CategoryColor: '#f57f17'
  }, {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      StartTime: new Date(2021, 7, 15, 6, 0),
      EndTime: new Date(2021, 7, 15, 7, 30),
      CategoryColor: '#7fa900'
  }, {
      Id: 20,
      Subject: 'Sky Gazers',
      StartTime: new Date(2021, 7, 15, 16, 0),
      EndTime: new Date(2021, 7, 15, 18, 0),
      CategoryColor: '#ea7a57'
  }
];

export function generateObject() {
  var data = [];
  for (var a = 0; a < 25; a++) {
    data.push({
      Id: a + 1,
      Subject: 'Testing',
      StartTime: new Date(2021, 3, 28),
      EndTime: new Date(2021, 3, 29),
      IsAllDay: true
    });
  }
  return data;
}
export let baselineData: Object[] = [
    {
        TaskId: 1, TaskName: 'Receive vehicle and create job card', BaselineStartDate: new Date('03/05/2024 10:00:00 AM'),
        BaselineEndDate: new Date('03/05/2024 10:00:00 AM'), StartDate: new Date('03/05/2024 10:00:00 AM'),
        EndDate: new Date('03/05/2024 10:00:00 AM')
    },
    {
        TaskId: 2, TaskName: 'Allot mechanic and send vehicle to service bay', BaselineStartDate: new Date('03/05/2024 10:00:00 AM'),
        BaselineEndDate: new Date('03/05/2024 10:15:00 AM'), StartDate: new Date('03/05/2024 10:15:00 AM'),
        EndDate: new Date('03/05/2024 10:20:00 AM')
    },
    {
        TaskId: 3, TaskName: 'Change the receive vehicle and create job cardengine oil',
        BaselineStartDate: new Date('03/05/2024 10:15:00 AM'),
        BaselineEndDate: new Date('03/05/2024 10:45:00 AM'), StartDate: new Date('03/05/2024 10:20:00 AM'),
        EndDate: new Date('03/05/2024 10:35:00 AM')
    },
    {
        TaskId: 4, TaskName: 'Replace the oil filter', BaselineStartDate: new Date('03/05/2024 10:45:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:15:00 AM'), StartDate: new Date('03/05/2024 10:35:00 AM'),
        EndDate: new Date('03/05/2024 11:00:00 AM')
    },
    {
        TaskId: 5, TaskName: 'Replace the air filter', BaselineStartDate: new Date('03/05/2024 10:45:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:15:00 AM'), StartDate: new Date('03/05/2024 10:35:00 AM'),
        EndDate: new Date('03/05/2024 11:00:00 AM')
    },
    {
        TaskId: 6, TaskName: 'Replace the fuel filter', BaselineStartDate: new Date('03/05/2024 11:15:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:25:00 AM'), StartDate: new Date('03/05/2024 11:00:00 AM'),
        EndDate: new Date('03/05/2024 11:20:00 AM')
    },
    {
        TaskId: 7, TaskName: 'Replace the cabin filter', BaselineStartDate: new Date('03/05/2024 11:00:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:20:00 AM'), StartDate: new Date('03/05/2024 11:00:00 AM'),
        EndDate: new Date('03/05/2024 11:25:00 AM')
    },
    {
        TaskId: 8, TaskName: 'Replace the spark plugs', BaselineStartDate: new Date('03/05/2024 11:00:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:30:00 AM'), StartDate: new Date('03/05/2024 11:25:00 AM'),
        EndDate: new Date('03/05/2024 11:45:00 AM')
    },
    {
        TaskId: 9, TaskName: 'Check level and refill brake fluid/clutch fluid', BaselineStartDate: new Date('03/05/2024 11:20:00 AM'),
        BaselineEndDate: new Date('03/05/2024 11:40:00 AM'), StartDate: new Date('03/05/2024 11:30:00 AM'),
        EndDate: new Date('03/05/2024 11:50:00 AM')
    },
    {
        TaskId: 10, TaskName: 'Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out.',
        BaselineStartDate: new Date('03/05/2024 11:40:00 AM'),
        BaselineEndDate: new Date('03/05/2024 12:00:00 PM'), StartDate: new Date('03/05/2024 11:50:00 AM'),
        EndDate: new Date('03/05/2024 12:20:00 PM')
    },
    {
        TaskId: 11, TaskName: 'Check level and refill power steering fluid', BaselineStartDate: new Date('03/05/2024 11:40:00 AM'),
        BaselineEndDate: new Date('03/05/2024 12:00:00 PM'), StartDate: new Date('03/05/2024 11:50:00 AM'),
        EndDate: new Date('03/05/2024 12:15:00 PM')
    },
    {
        TaskId: 12, TaskName: 'Check level and refill automatic/manual transmission fluid',
        BaselineStartDate: new Date('03/05/2024 12:00:00 PM'),
        BaselineEndDate: new Date('03/05/2024 12:35:00 PM'), StartDate: new Date('03/05/2024 11:50:00 AM'),
        EndDate: new Date('03/05/2024 12:20:00 PM')
    },
    {
        TaskId: 13, TaskName: 'Grease and lubricate components', BaselineStartDate: new Date('03/05/2024 12:20:00 PM'),
        BaselineEndDate: new Date('03/05/2024 12:35:00 PM'), StartDate: new Date('03/05/2024 12:20:00 PM'),
        EndDate: new Date('03/05/2024 12:45:00 PM')
    },
    {
        TaskId: 14, TaskName: 'Inspect and replace the timing belt or timing chain if needed',
        BaselineStartDate: new Date('03/05/2024 12:35:00 PM'),
        BaselineEndDate: new Date('03/05/2024 1:00:00 PM'), StartDate: new Date('03/05/2024 12:45:00 PM'),
        EndDate: new Date('03/05/2024 1:00:00 PM')
    },
    {
        TaskId: 15, TaskName: 'Wheel balancing', BaselineStartDate: new Date('03/05/2024 1:00:00 PM'),
        BaselineEndDate: new Date('03/05/2024 1:20:00 PM'), StartDate: new Date('03/05/2024 1:00:00 PM'),
        EndDate: new Date('03/05/2024 1:45:00 PM')
    },
    {
        TaskId: 16, TaskName: 'Wheel alignment', BaselineStartDate: new Date('03/05/2024 1:20:00 PM'),
        BaselineEndDate: new Date('03/05/2024 1:45:00 PM'), StartDate: new Date('03/05/2024 1:45:00 PM'),
        EndDate: new Date('03/05/2024 2:45:00 PM')
    },
    {
        TaskId: 17, TaskName: 'Check for proper operation of all lights, wipers etc.', BaselineStartDate: new Date('03/05/2024 1:50:00 PM'),
        BaselineEndDate: new Date('03/05/2024 02:30:00 PM'), StartDate: new Date('03/05/2024 02:45:00 PM'),
        EndDate: new Date('03/05/2024 03:30:00 PM')
    },
    {
        TaskId: 18, TaskName: 'Check for any error codes in the ECU and take corrective action.',
        BaselineStartDate: new Date('03/05/2024 2:30:00 PM'),
        BaselineEndDate: new Date('03/05/2024 3:30:00 PM'), StartDate: new Date('03/05/2024 03:30:00 PM'),
        EndDate: new Date('03/05/2024 04:15:00 PM')
    },
    {
        TaskId: 19, TaskName: 'Use scan tool read trouble code', BaselineStartDate: new Date('03/05/2024 03:30:00 PM'),
        BaselineEndDate: new Date('03/05/2024 04:45:00 PM'), StartDate: new Date('03/05/2024 04:15:00 PM'),
        EndDate: new Date('03/05/2024 04:45:00 PM')
    },
    {
        TaskId: 20, TaskName: 'Exterior washing', BaselineStartDate: new Date('03/05/2024 04:45:00 PM'),
        BaselineEndDate: new Date('03/05/2024 05:15:00 PM'), StartDate: new Date('03/05/2024 04:45:00 PM'),
        EndDate: new Date('03/05/2024 05:30:00 PM')
    },
    {
        TaskId: 21, TaskName: 'Interior vacuuming', BaselineStartDate: new Date('03/05/2024 05:15:00 PM'),
        BaselineEndDate: new Date('03/05/2024 05:45:00 PM'), StartDate: new Date('03/05/2024 05:30:00 PM'),
        EndDate: new Date('03/05/2024 06:00:00 PM')
    },
    {
        TaskId: 22, TaskName: 'Final service inspection', BaselineStartDate: new Date('03/05/2024 05:45:00 PM'),
        BaselineEndDate: new Date('03/05/2024 06:00:00 PM'), StartDate: new Date('03/05/2024 06:00:00 PM'),
        EndDate: new Date('03/05/2024 06:30:00 PM')
    },
    {
        TaskId: 23, TaskName: 'Vehicle handover', BaselineStartDate: new Date('03/05/2024 06:00:00 PM'),
        BaselineEndDate: new Date('03/05/2024 06:00:00 PM'), StartDate: new Date('03/05/2024 06:30:00 PM'),
        EndDate: new Date('03/05/2024 06:30:00 PM')
    }
];
export let timelineResourceData: Record<string, any>[] = [
    {
      Id: 61,
      Subject: 'Decoding',
      StartTime: new Date(2023, 1, 1, 0, 0),
      EndTime: new Date(2023, 1, 31, 11, 59),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
    }
    // }, {
    //   Id: 62,
    //   Subject: 'Bug Automation',
    //   StartTime: new Date(2023, 0, 4, 16, 0),
    //   EndTime: new Date(2023, 0, 4, 20, 0),
    //   IsAllDay: false,
    //   ProjectId: 2,
    //   TaskId: 1
    // }, {
    //   Id: 63,
    //   Subject: 'Functionality testing',
    //   StartTime: new Date(2023, 0, 4, 9),
    //   EndTime: new Date(2023, 0, 4, 10, 30),
    //   IsAllDay: false,
    //   ProjectId: 1,
    //   TaskId: 1
    // }, {
    //   Id: 64,
    //   Subject: 'Resolution-based testing',
    //   StartTime: new Date(2023, 0, 4, 12),
    //   EndTime: new Date(2023, 0, 4, 15, 0),
    //   IsAllDay: false,
    //   ProjectId: 2,
    //   TaskId: 4
    // }, {
    //   Id: 65,
    //   Subject: 'Test report validation',
    //   StartTime: new Date(2023, 0, 4, 15),
    //   EndTime: new Date(2023, 0, 4, 18),
    //   IsAllDay: false,
    //   ProjectId: 1,
    //   TaskId: 1
    // }, {
    //   Id: 66,
    //   Subject: 'Test case correction',
    //   StartTime: new Date(2023, 0, 4, 14),
    //   EndTime: new Date(2023, 0, 4, 16),
    //   IsAllDay: false,
    //   ProjectId: 3,
    //   TaskId: 6
    // }, {
    //   Id: 67,
    //   Subject: 'Bug fixing',
    //   StartTime: new Date(2023, 0, 4, 14, 30),
    //   EndTime: new Date(2023, 0, 4, 18, 30),
    //   IsAllDay: false,
    //   ProjectId: 3,
    //   TaskId: 5
    // }, {
    //   Id: 68,
    //   Subject: 'Run test cases',
    //   StartTime: new Date(2023, 0, 4, 17, 30),
    //   EndTime: new Date(2023, 0, 4, 19, 30),
    //   IsAllDay: false,
    //   ProjectId: 2,
    //   TaskId: 4
    // }, {
    //   Id: 70,
    //   Subject: 'Bug Automation',
    //   StartTime: new Date(2023, 0, 4, 16, 0),
    //   EndTime: new Date(2023, 0, 4, 20, 0),
    //   IsAllDay: false,
    //   ProjectId: 2,
    //   TaskId: 3
    // }
  ];

export let countryData: Record<string, any>[] =[
    {
      name: "Afghanistan",
      iso2: "AF",
      dialCode: "+93",
      flag: "🇦🇫",
      phoneNumberLength: 9
    },
    {
      name: "Albania",
      iso2: "AL",
      dialCode: "+355",
      flag: "🇦🇱",
      phoneNumberLength: 9
    },
    {
      name: "Algeria",
      iso2: "DZ",
      dialCode: "+213",
      flag: "🇩🇿",
      phoneNumberLength: 9
    },
    {
      name: "Andorra",
      iso2: "AD",
      dialCode: "+376",
      flag: "🇦🇩",
      phoneNumberLength: 6
    },
    {
      name: "Angola",
      iso2: "AO",
      dialCode: "+244",
      flag: "🇦🇴",
      phoneNumberLength: 9
    },
    {
      name: "Argentina",
      iso2: "AR",
      dialCode: "+54",
      flag: "🇦🇷",
      phoneNumberLength: 10
    },
    {
      name: "Australia",
      iso2: "AU",
      dialCode: "+61",
      flag: "🇦🇺",
      phoneNumberLength: 9
    },
    {
      name: "Austria",
      iso2: "AT",
      dialCode: "+43",
      flag: "🇦🇹",
      phoneNumberLength: 10
    },
    {
      name: "Bangladesh",
      iso2: "BD",
      dialCode: "+880",
      flag: "🇧🇩",
      phoneNumberLength: 10
    },
    {
      name: "Belgium",
      iso2: "BE",
      dialCode: "+32",
      flag: "🇧🇪",
      phoneNumberLength: 9
    },
    {
      name: "Brazil",
      iso2: "BR",
      dialCode: "+55",
      flag: "🇧🇷",
      phoneNumberLength: 11
    },
    {
      name: "Canada",
      iso2: "CA",
      dialCode: "+1",
      flag: "🇨🇦",
      phoneNumberLength: 10
    },
    {
      name: "China",
      iso2: "CN",
      dialCode: "+86",
      flag: "🇨🇳",
      phoneNumberLength: 11
    },
    {
      name: "France",
      iso2: "FR",
      dialCode: "+33",
      flag: "🇫🇷",
      phoneNumberLength: 9
    },
    {
      name: "Germany",
      iso2: "DE",
      dialCode: "+49",
      flag: "🇩🇪",
      phoneNumberLength: 10
    },
    {
      name: "India",
      iso2: "IN",
      dialCode: "+91",
      flag: "🇮🇳",
      phoneNumberLength: 10
    },
    {
      name: "Italy",
      iso2: "IT",
      dialCode: "+39",
      flag: "🇮🇹",
      phoneNumberLength: 10
    },
    {
      name: "Japan",
      iso2: "JP",
      dialCode: "+81",
      flag: "🇯🇵",
      phoneNumberLength: 10
    },
    {
      name: "South Korea",
      iso2: "KR",
      dialCode: "+82",
      flag: "🇰🇷",
      phoneNumberLength: 10
    },
    {
      name: "United States",
      iso2: "US",
      dialCode: "+1",
      flag: "🇺🇸",
      phoneNumberLength: 10
    },
    {
      name: "United Kingdom",
      iso2: "GB",
      dialCode: "+44",
      flag: "🇬🇧",
      phoneNumberLength: 10
    }
  ]
  
  