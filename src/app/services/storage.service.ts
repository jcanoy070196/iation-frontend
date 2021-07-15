import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  token(){
    return localStorage.user_token ? localStorage.user_token : null;
  }
}
