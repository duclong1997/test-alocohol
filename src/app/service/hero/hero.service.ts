import { Injectable } from '@angular/core';
import { EmployeeModel } from './entity/model/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getEmployee(): EmployeeModel[]{
    return [
      {id: 1, name:"long1"},
      {id: 2, name:"long2"},
      {id: 3, name:"long3"},
      {id: 4, name:"long4"},
      {id: 5, name:"long5"}
    ]
  }
}
