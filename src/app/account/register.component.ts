import {Component, OnInit} from '@angular/core';
import {Account} from './account';
import {Router} from '@angular/router';
import {LoggerService} from '../util/logger.service';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  account = new Account();
  loading = false;
  submitted = false;
  errorMessage: string;
  timestamp = new Date();

  constructor(private router: Router,
              private logger: LoggerService,
              private authServer: AuthenticationService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.errorMessage = null;
    this.submitted = true;
    this.loading = true;
    this.authServer.register(this.account)
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
