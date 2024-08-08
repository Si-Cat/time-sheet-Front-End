import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<{ status: string, email: string }>('https://spring-timesheet.azurewebsites.net/employee/login', loginData, { headers }).subscribe(
      response => {
        if (response.status === 'success') {
          console.log('Login successful:', response.email);
          setCookie('userEmail', response.email , 1);
          this.router.navigate(['/Base/Shedule']); 
        } else {
          alert('Login failed');
        }
      },
      error => {
        console.error('Server error:', error);
        alert('Server error');
      }
    );
  }
}
