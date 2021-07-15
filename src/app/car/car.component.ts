import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { CarService } from '../services/car/car.service';
import { CarModalComponent } from './components/car-modal/car-modal.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  private _unsubscribe$ = new Subject<any>();
  public cars = [];

  constructor(private carService : CarService,private ngDialog : NgbModal) { }

  ngOnInit(): void {
    this.getCars();
  }
  
  getCars()
  {
    this.carService.getCarList().pipe( takeUntil(this._unsubscribe$) )
        .subscribe(
          (response: any) => {
            if(response.success){
              console.log(response);
              this.cars = response.data.cars;
            }
          },
          (errorResult) => {
            console.log("System Error", errorResult);
          }
    );
  }

  openCarModal(id)
  {
    const modalRef = this.ngDialog.open(CarModalComponent, { windowClass: 'car-modal' ,centered: true, size: 'md', keyboard: false });
    modalRef.componentInstance.id = id;
  }

}
