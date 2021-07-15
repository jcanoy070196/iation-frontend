import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _unsubscribe$ = new Subject<any>();
  public loginForm : FormGroup;

  constructor(private authService : AuthenticationService, private formBuilder : FormBuilder, public storageService : StorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });

    console.log(this.storageService.token());
  }

  login()
  {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).pipe( takeUntil(this._unsubscribe$) )
          .subscribe(
            (response: any) => {
              if(response.success){
                  alert('Logged in Successfully')
                  localStorage.setItem('user_token',response.data.token);
              }
            },
            (errorResult) => {
              console.log("System Error", errorResult);
            }
      );
    }
    
  }

  logout()
  {
    this.authService.logout().pipe( takeUntil(this._unsubscribe$) )
        .subscribe(
          (response: any) => {
            console.log(response);
            if(response.success){
                alert('Logged out Successfully')
                localStorage.removeItem('user_token');
            }
          },
          (errorResult) => {
            console.log("System Error", errorResult);
          }
    );
    
    
  }

}
