import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CarInfoInterface, DepartureIterface } from 'src/app/models/formGroups.inrerface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  logModal: FormGroup = new FormGroup({
    driverName: new FormControl('', Validators.required),
    driver: new FormControl('self'),
    departure: new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      pickerStart: new FormControl('', Validators.required),
      pickerEnd: new FormControl('', Validators.required),
    }),
    carInfo: new FormGroup({
      model: new FormControl('', Validators.required),
      registration: new FormControl('', Validators.required),
    })
  })

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  log(value: DepartureIterface) {
    this.logModal.patchValue({
      'departure': {
        from: value.from,
        to: value.to,
        pickerStart: value.pickerStart,
        pickerEnd: value.pickerEnd
      }
    })
  }

  toggleDriver(value: string) {
    this.logModal.patchValue({
      'driver': value
    })
  }

  onCarInfor(value: CarInfoInterface) {
    this.logModal.patchValue({
      'carInfo': {
        model: value.model,
        registration: value.registration
      }
    })
  }

  setLogModal() {
    console.log(this.logModal.value)
  }

}
