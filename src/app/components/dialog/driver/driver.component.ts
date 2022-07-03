import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  @Output() driver = new EventEmitter<string>();
  toggle = true

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(value: any) {
    this.toggle = !this.toggle
    this.driver.emit(value.value)
  }

}
