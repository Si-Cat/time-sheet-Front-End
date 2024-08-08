import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from '../cookie.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActiveHome: boolean = true;
  isActiveStat: boolean = false;
  isActiveAdmin: boolean = false;
  userEmail: string = '';
  isAdmin: boolean = false;

  constructor(
    private http: HttpClient, 
    private cookieService: CookieService, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const email = this.cookieService.getCookie('userEmail');
      console.log('Cookie email:', email); // Debugging statement
      if (email) {
        this.userEmail = email;
        this.checkAdminPermission(email);
      } else {
        console.log('No email found in cookie.');
      }
    }
  }

  handleLinkClick(route: string): void {
    this.isActiveHome = route === 'Shedule';
    this.isActiveStat = route === 'Stats';
    this.isActiveAdmin = route === 'Admin';

    if (route === 'LogOut') {
      // Implement logout logic here
      console.log('Logged out');
      this.router.navigate([`/Home`])
    } else {
      this.router.navigate([`/Base/${route}`]);
    }
  }

  checkAdminPermission(email: string): void {
    console.log('Checking admin permission for email:', email); // Debugging statement
    const params = new HttpParams().set('email', email);
    this.http.get<{ permission: boolean | null }>('https://spring-timesheet.azurewebsites.net/employee/permission', { params })
      .subscribe(response => {
        console.log('Received response:', response); // Debugging statement
        if (response.permission !== null) {
          this.isAdmin = response.permission;
        } else {
          console.log('Permission data is null.');
        }
      }, error => {
        console.error('Error fetching permission:', error);
      });
  }
}
