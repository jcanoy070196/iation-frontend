import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends ApiService{

  constructor(protected http: HttpClient) { 
    super(http);
  }

  getCarList(): Observable<any> {
    return this.get("/car/list");
  }

  getCar(id): Observable<any> {
    return this.get("/car/" + id + "/get");
  }

  createCar(data): Observable<any> {
    return this.post("/car/create",data);
  }

  updateCar(data): Observable<any> {
    return this.post("/car/update",data);
  }

  deleteCar(id): Observable<any> {
    return this.get("/car/" + id + "/delete");
  }
}
