import {Component, OnInit} from '@angular/core';
import {Account} from './account';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account;

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  login() {

  }
}
