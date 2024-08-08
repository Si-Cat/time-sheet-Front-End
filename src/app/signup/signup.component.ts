import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(signUpForm: any) {
    if (signUpForm.value.password !== signUpForm.value.verifyPassword) {
      alert('Passwords do not match');
      return;
    }

    const employee = {
      firstName: signUpForm.value.firstName,
      lastName: signUpForm.value.lastName,
      email: signUpForm.value.email,
      password: signUpForm.value.password,
      permission: false
    };


    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('https://spring-timesheet.azurewebsites.net/employee/signup', employee, { headers }).subscribe(
      (response) => {
        console.log('Employee registered successfully');
        // Redirect to another route after successful signup
        this.router.navigate(['/LogIn']); // Replace '/login' with your target route
      },
      (error) => {
        console.error('Error registering employee', error);
        alert('Error registering employee');
      }
    );
  }
}
