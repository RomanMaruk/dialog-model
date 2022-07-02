import { Component, OnInit } from '@angular/core';
import { mockSDInterface } from 'src/app/models/mockDates.interface';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
