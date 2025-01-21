import { AfterViewInit, Component , ViewChild} from '@angular/core';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Browser } from "@syncfusion/ej2-base";
import {
  AppBarModule,
  SidebarComponent,
  SidebarModule,
  TreeViewComponent,
  TreeViewModule,
} from "@syncfusion/ej2-angular-navigations";
import { Router } from "@angular/router";
import { AnimationSettingsModel } from "@syncfusion/ej2-angular-popups";
import { NgClass, NgStyle } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonModule,   TreeViewModule, SidebarModule ,AppBarModule,
    RadioButtonModule, RouterOutlet,
    TreeViewModule, NgStyle],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  @ViewChild("sideBar")
  public sideBar?: SidebarComponent;
  public showBackdrop = false;
  public closeOnDocumentClick = false;

  @ViewChild("sidebarTreeviewInstance")
  public sidebarTreeviewInstance?: SidebarComponent;
  @ViewChild("treeviewInstance")
  public treeviewInstance?: TreeViewComponent;
  public width: string = "290px";
 // public toggleBtn: ButtonComponent;
  public enableDock: boolean = true;
  public dockSize: string = "44px";
  public mediaQuery: string = "(min-width: 600px)";
  public target: string = ".main-content";
  public isDarkTheme = false;
  public slideLeft: AnimationSettingsModel = { effect: "SlideLeft" };
 // public spinRight: SpinSettingsModel = { position: "Right" };
  @ViewChild("contractBtn")
 // public contractBtn: ProgressButton;
  public data: Object[] = [
    {
      nodeId: "01",
      nodeText: "Installation",
      iconCss: "icon-microchip icon",
    },
    {
      nodeId: "02",
      nodeText: "Deployment",
      iconCss: "icon-thumbs-up-alt icon",
    },
    {
      nodeId: "03",
      nodeText: "Quick Start",
      iconCss: "icon-docs icon",
    },
    {
      nodeId: "04",
      nodeText: "Components",
      iconCss: "icon-th icon",
    },
    {
      nodeId: "05",
      nodeText: "API Reference",
      iconCss: "icon-code icon",
    },
    {
      nodeId: "06",
      nodeText: "Browser Compatibility",
      iconCss: "icon-chrome icon",
    },
    {
      nodeId: "07",
      nodeText: "Upgrade Packages",
      iconCss: "icon-up-hand icon",
    },
    {
      nodeId: "08",
      nodeText: "Release Notes",
      iconCss: "icon-bookmark-empty icon",
    },
    {
      nodeId: "09",
      nodeText: "FAQ",
      iconCss: "icon-help-circled icon",
    },
    {
      nodeId: "10",
      nodeText: "License",
      iconCss: "icon-doc-text icon",
    },
  ];
  public field: Object = {
    dataSource: this.data,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
    iconCss: "iconCss",
  };
  spinCenter: any;
 // isToggled: true;

  constructor(private router: Router) {
  //  document.body.classList.add("main-page");
    if (Browser.isDevice) {
      this.showBackdrop = true;
      this.closeOnDocumentClick = true;
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    const themeLink = document.getElementById('theme') as HTMLLinkElement;
    const sidebarSection = document.getElementById('sidebar-section');
    const titleContainerSection = document.getElementsByClassName('title-container');

    if (this.isDarkTheme) {
  
      if (themeLink) {
        themeLink.href = 'https://cdn.syncfusion.com/ej2/bootstrap-dark.css';
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
        themeLink.href = 'https://cdn.syncfusion.com/ej2/bootstrap.css';
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

  public ngAfterViewInit(): void {
    if (Browser.isDevice) {
     // document.querySelector(".planner-header").classList.add("device-header");
    }
  }
  public onCreated(args: any) {
    (
      this.sidebarTreeviewInstance as SidebarComponent
    ).element.style.visibility = "";
  }
  public onClose(args: any) {
    (this.treeviewInstance as TreeViewComponent).collapseAll();
  }
  openClick() {
    if ((this.sidebarTreeviewInstance as SidebarComponent).isOpen) {
      (this.sidebarTreeviewInstance as SidebarComponent).hide();
      (this.treeviewInstance as TreeViewComponent).collapseAll();
    } else {
      (this.sidebarTreeviewInstance as SidebarComponent).show();
      (this.treeviewInstance as TreeViewComponent).expandAll();
    }
  }

  public btnClick(): void {
    this.sideBar?.show();
  }

  public onItemClick(args: any): void {
    if (Browser.isDevice) {
      this.sideBar?.hide();
    }
    const elements: HTMLElement[] =
      args.currentTarget.parentElement.querySelectorAll(".active-item");
    elements.forEach((element) => {
      if (element.classList.contains("active-item")) {
        element.classList.remove("active-item");
      }
    });
    args.currentTarget.classList.add("active-item");
  }
  toggleSidebar() {
    this.sideBar?.toggle();
  }

  onItemClick2(event: any) {
    console.log("Sidebar item clicked:", event);
    this.sideBar?.hide();
  }
  logout() {
    localStorage.removeItem("authToken");
    this.router.navigate(["/login"]);
  }
}
