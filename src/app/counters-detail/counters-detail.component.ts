import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-counters-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counters-detail.component.html',
  styleUrls: ['./counters-detail.component.scss']
})
export class CountersDetailComponent {
  constructor(private http: HttpClient, private router: Router) { }

  fullCounterList: any[] = [];     // All counters from backend
  counterList: any[] = [];         // Filtered list based on selectedStatus
  selectedStatus = 0;              // 0 = No, 1 = Yes
  selectedCounterId: string | null = null;

  ngOnInit() {
    const token = localStorage.getItem('token');
    const fingerprint = localStorage.getItem('token_fingerprint');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'X-Token-Fingerprint': fingerprint || '',
      'Content-Type': 'application/json'
    });

    this.http.get('http://192.168.2.11:8000/api/auth/v1/get_counter', { headers })
      .subscribe({
        next: (response: any) => {
          this.fullCounterList = response.data.data;
          this.updateCounterList(); // Now update filtered list after data is fetched
          console.log('Counter response:', response);
        },
        error: (error) => console.error('Error fetching counter:', error)
      });
  }

  updateCounterList() {
    this.counterList = this.fullCounterList.filter(
      counter => counter.counterstatus === this.selectedStatus
    );
    this.selectedCounterId = null; // reset selection when list changes
  }

  onRadioChange(status: number) {
    this.selectedStatus = status;
    this.updateCounterList();
  }

  onContinueClick() {
    if (!this.selectedCounterId) {
      alert('Please choose a counter.');
      return;
    }

    localStorage.setItem('selectedCounterId', this.selectedCounterId);
    // Proceed with selected counter logic
    this.router.navigate(['/frontdesk']);

    console.log('Selected Counter ID:', this.selectedCounterId);
    
  }
}
