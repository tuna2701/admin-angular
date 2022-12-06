import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/lib/authentication.service';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  password: any;
  loginForm: any;
  user: any;
  error: '';

  constructor(private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loginForm = this.fb.group({
      userName: [this.user.userName],
      password: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.f.userName.value, this.f.password.value);
    console.log(this.loginForm);
    
    this.authenticationService
      .login(this.f.userName.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/signinoptions/password']);
        },
        (error) => {
          alert("Sai mật khẩu")
        }
      );
  }

}
