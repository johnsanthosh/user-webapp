import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/user-service/users');
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete('http://localhost:8080/user-service/users/' + id);
  }

  addUser(user: { firstName: string, lastName: string, age: string, phoneNumber: string }): Observable<any> {
    return this.http.put('http://localhost:8080/user-service/users', user);
  }

}
