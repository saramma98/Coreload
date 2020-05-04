import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  CRM_Number :string = "LE9E70002";
  Agent_Registered : string ="Yes";
  Agent_Quarantine  :string =" Yes";
  Agent_CRM_Verified :string ="No";
  Model_Number :string="123456";
  Serial_Number :string="E70002";
  System_Type :string="Eagle"



  constructor() { }
}
 