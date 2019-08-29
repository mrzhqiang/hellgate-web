import { Component, OnInit } from '@angular/core';
import {Account} from '../account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  account: Account;

  constructor() { }

  ngOnInit() {
  }

  register() {

  }
}
