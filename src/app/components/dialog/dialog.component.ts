import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { DriverComponent } from './driver/driver.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDriver() {
    this.dialog.open(DriverComponent,)
  }

  onCarInfo() {
    this.dialog.open(CarInfoComponent)
  }

  onInformation() {
    this.dialog.open(AdditionalInfoComponent)
  }

}
