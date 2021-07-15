import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorService } from '../services/color/color.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorModalComponent } from './components/color-modal/color-modal.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  private _unsubscribe$ = new Subject<any>();
  public colors = [];

  constructor(private colorService : ColorService,private ngDialog : NgbModal) { }

  ngOnInit(): void {
    this.getColors();
  }
  
  getColors()
  {
    this.colorService.getColorList().pipe( takeUntil(this._unsubscribe$) )
        .subscribe(
          (response: any) => {
            if(response.success){
              console.log(response);
              this.colors = response.data.colors;
            }
          },
          (errorResult) => {
            console.log("System Error", errorResult);
          }
    );
  }

  openColorModal(id)
  {
    const modalRef = this.ngDialog.open(ColorModalComponent, { windowClass: 'color-modal' ,centered: true, size: 'md', keyboard: false });
    modalRef.componentInstance.id = id;
  }

}
