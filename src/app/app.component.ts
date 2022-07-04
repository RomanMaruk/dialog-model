import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { LogModelInterface } from './models/formGroups.inrerface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  driverData: LogModelInterface[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logModal() {
    const dialogRef = this.dialog.open(DialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.driverData.push(result)
    })
  }
}
