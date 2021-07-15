import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CarModelService extends ApiService{

  constructor(protected http: HttpClient) { 
    super(http);
  }

  getCarModelList(): Observable<any> {
    return this.get("/car-model/list");
  }

  getCarModel(id): Observable<any> {
    return this.get("/car-model/" + id + "/get");
  }

  createCarModel(data): Observable<any> {
    return this.post("/car-model/create",data);
  }

  updateCarModel(data): Observable<any> {
    return this.post("/car-model/update",data);
  }

  deleteCarModel(id): Observable<any> {
    return this.get("/car-model/" + id + "/delete");
  }
}
