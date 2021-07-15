import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService extends ApiService{

  constructor(protected http: HttpClient) { 
    super(http);
  }

  getManufacturerList(): Observable<any> {
    return this.get("/manufacturer/list");
  }

  getManufacturer(id): Observable<any> {
    return this.get("/manufacturer/" + id + "/get");
  }

  createManufacturer(data): Observable<any> {
    return this.post("/manufacturer/create",data);
  }

  updateManufacturer(data): Observable<any> {
    return this.post("/manufacturer/update",data);
  }

  deleteManufacturer(id): Observable<any> {
    return this.get("/manufacturer/" + id + "/delete");
  }
}

