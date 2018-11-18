import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth/auth.service';
import {LoginDTO} from '../shared/models/loginDTO.model';
import {Subscription} from 'rxjs/Subscription';
import {AuthUser} from '../shared/models/auth/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private authUser: AuthUser;

  constructor(public fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
      this.loginForm = fb.group({
          email: [null, Validators.compose([Validators.required])],
          password: [null, Validators.compose([Validators.required])]
      });
  }

  ngOnInit() {
  }

  public doLogin(): void {
      const loginDTO: LoginDTO = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
      };
      // console.log(loginDTO);
      this.servicePostLogin(loginDTO);
  }

  private servicePostLogin(loginDTO: LoginDTO): Subscription {
      return this.authService.postLogin(loginDTO.email, loginDTO.password).subscribe((authUser) => {
          // console.log('successful login');
          this.authUser = authUser;
          // console.log('success ', this.authUser);
          this.router.navigate(['/']);
      }, (error) => {
          console.log('error ', error);
      }, () => {
          // console.log('Someting else has happened');
      });
  }

}
