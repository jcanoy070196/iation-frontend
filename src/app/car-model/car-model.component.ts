import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarModelService } from '../services/car-model/car-model.service';
import { CarModelModalComponent } from './components/car-model-modal/car-model-modal.component';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {

  private _unsubscribe$ = new Subject<any>();
  public carModels = [];

  constructor(private carModelService : CarModelService,private ngDialog : NgbModal) { }

  ngOnInit(): void {
    this.getCarModels();
  }
  
  getCarModels()
  {
    this.carModelService.getCarModelList().pipe( takeUntil(this._unsubscribe$) )
        .subscribe(
          (response: any) => {
            if(response.success){
              console.log(response);
              this.carModels = response.data.car_models;
            }
          },
          (errorResult) => {
            console.log("System Error", errorResult);
          }
    );
  }

  deleteCarModel(carModel)
  {
    if(confirm("Do you want to delete " + carModel.name + "?")){
      this.carModelService.deleteCarModel(carModel.id).pipe( takeUntil(this._unsubscribe$) )
          .subscribe(
            (response: any) => {
              if(response.success){
                console.log(response);
                alert(carModel.name + " has been deleted.");
              }
            },
            (errorResult) => {
              console.log("System Error", errorResult);
            }
      );
    }
  }

  openCarModelModal(id)
  {
    const modalRef = this.ngDialog.open(CarModelModalComponent, { windowClass: 'car-model-modal' ,centered: true, size: 'md', keyboard: false,});
    modalRef.componentInstance.id = id;
  }

}
