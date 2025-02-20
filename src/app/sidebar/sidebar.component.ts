import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClickEventArgs, MenuItemModel, MenuModule, SidebarModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
import { CalendarComponent } from "../calendar/calendar.component";
import { HeaderBarComponent } from "../header-bar/header-bar.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ToolbarModule, SidebarModule, MenuModule, CommonModule, CalendarComponent, HeaderBarComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance!: SidebarComponent;
  public menuItems: MenuItemModel[] = [
    {
      text: 'Room Operations',
      iconCss: 'icon-user icon',
      items: [
        { text: 'Check in list' },
        { text: 'Check out list' },
        { text: 'Reservation list' },
      ],
    },
    {
      text: 'Management Dashboard',
      iconCss: 'icon-bell-alt icon',
      items: [
        { text: 'Change Profile' },
        { text: 'Add Name' },
        { text: 'Add Details' },
      ],
    },
    {
      text: 'Guest look-up',
      iconCss: 'icon-tag icon',
      items: [{ text: 'Message' }, { text: 'Facebook' }, { text: 'Twitter' }],
    },
    {
      text: 'House Status',
      iconCss: 'icon-comment-inv-alt2 icon',
      items: [
        { text: 'Category1' },
        { text: 'Category2' },
        { text: 'Category3' },
      ],
    },
    {
      text: 'Tariff Chart',
      iconCss: 'icon-bookmark icon',
      items: [
        { text: 'All Comments' },
        { text: 'Add Comments' },
        { text: 'Delete Comments' },
      ],
    },
    {
      text: 'Accounts',
      iconCss: 'icon-picture icon',
      items: [{ text: 'Add Name' }, { text: 'Add Mobile Number' }],
    },
    {
      text: 'Users ',
      iconCss: 'icon-user icon',
      items: [
        { text: 'Mobile User' },
        { text: 'Laptop User' },
        { text: 'Desktop User' },
      ],
    },
  ];
  public enableDock: boolean = true;
  public dockSize: string = '40px';
  public width: string = '220px';
  public target: string = '.main-menu-content';
  isOpen: any;
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.sidebarMenuInstance.hide();
  }
  hide() {
    throw new Error('Method not implemented.');
  }
  // toolbarCliked(args: ClickEventArgs) {
  //   if (args.item.tooltipText == 'Menu') {
  //     this.sidebarMenuInstance.toggle();
  //   }
  // }
  // toggle() {
  //   throw new Error('Method not implemented.');
  // }
  menuIcon: string = 'e-icons e-menu';
  toolbarClicked(args: ClickEventArgs) {
    if (args.item.tooltipText === 'Menu') {
      if (this.sidebarMenuInstance.isOpen) {
        this.sidebarMenuInstance.hide(); // Close if open
        this.menuIcon = 'e-icons e-menu'; // Change to menu icon
      } else {
        this.sidebarMenuInstance.show(); // Open if closed
        this.menuIcon = 'e-icons e-close'; // Change to close icon
      }
    }
  }
  show() {
    throw new Error('Method not implemented.');
  }
}
