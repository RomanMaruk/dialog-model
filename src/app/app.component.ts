import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionalInfoComponent } from './components/dialog/additional-info/additional-info.component';
import { CarInfoComponent } from './components/dialog/car-info/car-info.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DriverComponent } from './components/dialog/driver/driver.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  constructor(public dialog: MatDialog) { }

  onDriver() {
    this.dialog.open(DriverComponent)
  }

  onCarInfo() {
    this.dialog.open(CarInfoComponent)
  }

  onInformation() {
    this.dialog.open(AdditionalInfoComponent)
  }

  logModal() {
    this.dialog.open(DialogComponent)
  }
}
