import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [AuthService, ApiService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  @ViewChild('Dialog')
  public dialogObj?: DialogComponent;
  @ViewChild('userForm') form: any;
  public width: string = '335px';
  public visible: boolean = false;
  public multiple: boolean = false;
  public showCloseIcon: Boolean = true;
  public formHeader: string = 'Success';
  public content: string = 'You have successfully registered.';
  public target: string = '#control_wrapper';
  public isModal: boolean = true;
  public animationSettings: object = {
    effect: 'Zoom',
  };
  public errorMessage: string | null = null;
  public UserDetails: UserDetails | any;
  ngOnInit() {
    this.UserDetails = {
      username: 'murli.jha@hotelogix.com',
      password: '111111',
      hotelid: '4444',
      force_login:true
    };
  }
  constructor(private router: Router, private authService: AuthService) {}
  public dlgBtnClick: EmitType<object> = () => {
    this.dialogObj?.hide();
  };
  public dlgButtons: Object[] = [
    {
      click: this.dlgBtnClick.bind(this),
      buttonModel: { content: 'Ok', isPrimary: true },
    },
  ];
  @ViewChild('formElement') element: any;
  // onSubmit(): void {
  //   if (this.UserDetails) {
  //     this.authService.login(this.UserDetails).subscribe({
  //       next: (response) => {
  //         localStorage.setItem('token', response.data.token.access_token);
  //         this.router.navigate(['/frontdesk']);
  //       },
  //       error: (err) => {
  //         this.errorMessage = 'Invalid login credentials';
  //       },
  //     });
  //   }
  // }
  onSubmit(): void {
    if (this.UserDetails) {
      this.authService.login(this.UserDetails).subscribe({
        next: (response) => {
          const token = response.data.token.access_token;
          const fingerprint = response.data.token.token_fingerprint; // Extract token_fingerprint
  
          // Store both values in localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('token_fingerprint', fingerprint);
  
          // Navigate to frontdesk
          this.router.navigate(['/frontdesk']);
        },
        error: () => {
          this.errorMessage = 'Invalid login credentials';
        },
      });
    }
  }
  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
export interface UserDetails {
  username: string;
  password: string;
  hotelid: String;
}
