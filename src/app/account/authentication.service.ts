import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Account} from './account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient
  ) {
  }

  login(account: Account) {
    return this.http.post('/api/login', account)
      .pipe(
        map(value => JSON.stringify(value))
      );
  }

  register(account: Account) {
    return this.http.post('/api/register', account)
      .pipe(
        map(value => JSON.stringify(value))
      );
  }
}
