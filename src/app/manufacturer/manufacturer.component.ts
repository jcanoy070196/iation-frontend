import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { ManufacturerService } from '../services/manufacturer/manufacturer.service';
import { ManufacturerModalComponent } from './components/manufacturer-modal/manufacturer-modal.component';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {

  private _unsubscribe$ = new Subject<any>();
  public manufacturers = [];

  constructor(private manufacturerService : ManufacturerService,private ngDialog : NgbModal) { }

  ngOnInit(): void {
    this.getManufacturers();
  }

  getManufacturers()
  {
    this.manufacturerService.getManufacturerList().pipe( takeUntil(this._unsubscribe$) )
        .subscribe(
          (response: any) => {
            if(response.success){
              console.log(response);
              this.manufacturers = response.data.manufacturers;
            }
          },
          (errorResult) => {
            console.log("System Error", errorResult);
          }
    );
  }

  openManufacturerModal(id)
  {
    const modalRef = this.ngDialog.open(ManufacturerModalComponent, { windowClass: 'manufacturer-modal' ,centered: true, size: 'md', keyboard: false,});
    modalRef.componentInstance.id = id;
  }

}
