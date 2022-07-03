import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartureIterface } from 'src/app/models/formGroups.inrerface';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  @Output() departure = new EventEmitter<DepartureIterface>();

  departureInfo: FormGroup = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    pickerStart: new FormControl('', Validators.required),
    pickerEnd: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSend() {
    this.departure.emit(this.departureInfo.value)
  }
}
