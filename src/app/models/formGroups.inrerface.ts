export interface DepartureIterface {
  from: string,
  to: string,
  pickerStart: Date,
  pickerEnd: Date,
}

export interface CarInfoInterface {
  registration: string,
  model: string
}
export interface LogModelInterface {
  carInfo: CarInfoInterface,
  departure: DepartureIterface,
  driver: string
}
