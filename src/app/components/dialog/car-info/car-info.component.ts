import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarInfoInterface } from 'src/app/models/formGroups.inrerface';
import { mockSDInterface } from 'src/app/models/mockDates.interface';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  @Output() carData = new EventEmitter<CarInfoInterface>()

  mockSelectDates: mockSDInterface[] = [
    {
      src: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/ru_UA/all-models/x-series/X3/2019/bmw-x3-inspire/jcr:content/par/highlight_7770/highlightitems/highlightitem_45f3/image/mobile.transform/highlight/image.1584431957305.jpg',
      registration: 'AT 1503 BM',
      model: 'BMW X3'

    },
    {
      src: null,
      registration: 'KA 2545 XA',
      model: 'Toyouta Prius'

    },
  ]

  carInfo: FormGroup = new FormGroup({
    model: new FormControl('', Validators.required),
    registration: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  emitData() {
    this.carData.emit(this.carInfo.value)
  }

}
