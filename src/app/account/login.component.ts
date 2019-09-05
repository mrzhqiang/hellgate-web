import {Component, OnInit} from '@angular/core';
import {Account} from './account';
import {Location} from '@angular/common';
import {AuthenticationService} from './authentication.service';
import {LoggerService} from '../util/logger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account = new Account();
  loading = false;
  submitted = false;
  errorMessage: string;

  constructor(private location: Location,
              private router: Router,
              private logger: LoggerService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.errorMessage = null;
    this.submitted = true;
    this.loading = true;
    this.authService.login(this.account)
      .subscribe(value => {
        this.logger.log(value);
        this.router.navigate(['/hg']);
      }, error => {
        this.logger.error(JSON.stringify(error));
        this.errorMessage = error.statusText;
        this.submitted = false;
        this.loading = false;
      });
  }
}
