import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    const {email, password} = this.registerForm.value;
    const a = this.authService.login(email, password);
    this.router.navigateByUrl('/login');

    
  }


  ngOnInit(): void {
  }

}
