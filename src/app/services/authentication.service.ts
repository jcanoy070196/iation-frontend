import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService{

  constructor(protected http: HttpClient) { 
    super(http);
  }

  login(credentials): Observable<any> {
    return this.post("/login",credentials);
  }

  logout(): Observable<any> {
    return this.get("/logout");
  }

}
