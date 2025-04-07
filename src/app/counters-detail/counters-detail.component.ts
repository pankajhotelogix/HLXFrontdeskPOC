import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { HttpClient, HttpHeaders } from '@angular/common/http'; // ✅ Import this

@Component({
  selector: 'app-counters-detail',
  standalone: true,
  imports: [CommonModule], // ✅ Include here
  templateUrl: './counters-detail.component.html',
  styleUrls: ['./counters-detail.component.scss']
})
export class CountersDetailComponent {
  constructor(private http: HttpClient) { } // ✅ Inject HttpClient
  counterList: any[] = [];
  selectedStatus = 0; // 0 = No, 1 = Yes

  allCounters = {
    data: {
      data: [
        { counterstatus: 0, id: 1481, name: 'sss', status: 'A' },
        { counterstatus: 0, id: 1724, name: 'sad', status: 'A' },
        { counterstatus: 0, id: 1014, name: 'ddddd', status: 'A' },
        { counterstatus: 0, id: 1478, name: 'Test C', status: 'A' },
        { counterstatus: 1, id: 509, name: 'Default Counter', status: 'A' },
        { counterstatus: 1, id: 543, name: 'hello', status: 'A' },
        { counterstatus: 0, id: 544, name: 'Am', status: 'A' }
      ]
    }
  };

  ngOnInit() {
    this.updateCounterList();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer your-token-here', // 🔁 Replace with actual token
      'Content-Type': 'application/json'
    });
  
    this.http.get('http://192.168.2.11:8000/api/auth/v1/get_counter', { headers })
      .subscribe({
        next: (response) => console.log('Counter response:', response),
        error: (error) => console.error('Error fetching counter:', error)
      });
  }

  updateCounterList() {
    this.counterList = this.allCounters.data.data.filter(c => c.counterstatus === this.selectedStatus);
  }

  onRadioChange(status: number) {
    this.selectedStatus = status;
    this.updateCounterList();
  }
}
