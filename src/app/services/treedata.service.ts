import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TreedataService {

  patientId:string="100";
  firstName:string="sara";
  lastName:string="varghese";
  height:number=0;
  weight:number=0;
  dateOfBirth:string="06/01/1998";
  age:number=0;
  gender:string="F";
  patientAccessionNumber:number=1;

  

  constructor() { }
}

