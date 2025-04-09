import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { StayDetailsComponent } from './stay-details/stay-details.component';
import { GanttDetailsComponent } from './gantt-details/gantt-details.component';
import { CommonProfileImageComponent } from './common-profile-image/common-profile-image.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GroupResDetailsComponent } from './group-res-details/group-res-details.component';
import { CountersDetailComponent } from './counters-detail/counters-detail.component';

export const routes: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'calendar', component: CalendarComponent },
        { path: 'login', component: LoginComponent },
        { path: 'stayDetails', component: StayDetailsComponent },
        { path: 'details', component: GanttDetailsComponent },
        { path: 'image', component: CommonProfileImageComponent },
        { path: 'frontdesk', component: SidebarComponent },
        { path: 'group', component: GroupResDetailsComponent },
        { path: 'confirmation', component :CountersDetailComponent },
];
