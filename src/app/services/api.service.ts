import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBase = environment.apiBase;
  private headers:any;

  constructor(protected http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8','Accept' : 'application/json','Access-Control-Allow-Origin': '*'});
    
    if(localStorage.user_token) this.headers = this.headers.set('Authorization', 'Bearer ' + localStorage.user_token );
  }
  
  post(url, obj: any): Observable<any> {
    return this.http.post<any>(this.apiBase + url, obj,  { headers: this.headers});
  }

  get(url): Observable<any> {
    return this.http.get<any>(this.apiBase + url,  { headers: this.headers});
  }

  patch(url, obj: any): Observable<any> {
    return this.http.patch<any>(this.apiBase + url, obj,  { headers: this.headers});
  }

  delete(url): Observable<any> {
    return this.http.delete<any>(this.apiBase + url,  { headers: this.headers});
  }
}
