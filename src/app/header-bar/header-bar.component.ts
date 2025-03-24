import { CommonModule, NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppBarModule, ItemModel, MenuEventArgs, MenuItemModel, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, AppBarModule, ButtonModule, DropDownButtonModule, MenuModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {
  public isDarkTheme = false;
  public productDropDownButtonItems: ItemModel[] = [
    { text: 'Developer' },
    { text: 'Analytics' },
    { text: 'Reporting' },
    { text: 'E-Signature' },
    { text: 'Help Desk' }
  ];

  public companyDropDownButtonItems: ItemModel[] = [
    { text: 'About Us' },
    { text: 'Customers' },
    { text: 'Blog' },
    { text: 'Careers' }
  ];

  public verticalMenuItems: MenuItemModel[] = [
    {
      iconCss: 'e-icons e-more-vertical-1',
      items: [
        { text: 'Home' },
        {
          text: 'Products',
          items: [
            { text: 'Developer' },
            { text: 'Analytics' },
            { text: 'Reporting' },
            { text: 'E-Signature' },
            { text: 'Help Desk' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About Us' },
            { text: 'Customers' },
            { text: 'Blog' },
            { text: 'Careers' }
          ]
        },
        { text: 'Login' }
      ]
    }
  ];
  public appBarColors: Object = [
    { colorMode: 'Light', colorClass: 'e-light', isPrimary: 'true', loginClass: 'login' }, { colorMode: 'Dark', colorClass: 'e-dark', isPrimary: 'false', loginClass: 'e-inherit login' },
    { colorMode: 'Primary', colorClass: 'e-primary', isPrimary: 'false', loginClass: 'e-inherit login' }, { colorMode: 'Inherit', colorClass: 'e-inherit', isPrimary: 'true', loginClass: 'login' }
  ];
  public focusIn(target: HTMLElement): void {
    if (target.parentElement) {
      target.parentElement.classList.add('e-input-focus');
    }
  }
  public focusOut(target: HTMLElement): void {
    if (target.parentElement) {
      target.parentElement.classList.remove('e-input-focus');
    }
  }
  public onBeforeItemRender(args: MenuEventArgs): void {
    if (args.element.children.length > 0 && args.element.children[0].classList.contains("e-more-vertical-1")) {
      args.element.setAttribute('aria-label', 'more vertical');
    }
  }
  public onCreate(): void {
    const menuButtonElement = document.querySelectorAll('.color-appbar-section .e-inherit.menu');
    for (let i = 0; i < menuButtonElement.length; i++) {
      if(!(menuButtonElement[i].hasAttribute("aria-label"))) {
        menuButtonElement[i].setAttribute('aria-label','menu');
      }
    }
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeLink = document.getElementById('theme') as HTMLLinkElement;
    const sidebarSection = document.getElementById('sidebar-section');
    const titleContainerSection = document.getElementsByClassName('title-container');

    if (this.isDarkTheme) {
  
      if (themeLink) {
        themeLink.href = 'https://cdn.syncfusion.com/ej2/27.2.3/bootstrap-dark.css';
      }
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');

      if (sidebarSection) {
        sidebarSection.classList.add('dark-theme');
      }

      if (titleContainerSection) {
        Array.from(titleContainerSection).forEach((element: Element) => {
          element.classList.add('dark-theme');
        });
      }
    } else {
      if (themeLink) {
        themeLink.href = 'https://cdn.syncfusion.com/ej2/27.2.3/bootstrap.css';
      }
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');

      if (sidebarSection) {
        sidebarSection.classList.remove('dark-theme');
      }

      if (titleContainerSection) {
        Array.from(titleContainerSection).forEach((element: Element) => {
          element.classList.remove('dark-theme');
        });
      }
    }
  }
}
