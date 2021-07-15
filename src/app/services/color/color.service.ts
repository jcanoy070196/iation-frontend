import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends ApiService{

  constructor(protected http: HttpClient) { 
    super(http);
  }

  getColorList(): Observable<any> {
    return this.get("/color/list");
  }

  getColor(id): Observable<any> {
    return this.get("/color/" + id + "/get");
  }

  createColor(data): Observable<any> {
    return this.post("/color/create",data);
  }

  updateColor(data): Observable<any> {
    return this.post("/color/update",data);
  }

  deleteColor(id): Observable<any> {
    return this.get("/color/" + id + "/delete");
  }
}
