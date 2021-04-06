import { Injectable } from '@angular/core';
import{Labour} from './labour.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LabourService {
  readonly OurUrl="https://localhost:44363/api";
formData:Labour=new Labour();
llist:Labour[];
  constructor(private objHttp:HttpClient) { }
  LabourList()
  {
    this.objHttp.get(this.OurUrl+'/Labours/').toPromise().then(u=>this.llist=u as Labour[]);
  }
  DeleteLabour(id:number)
  {
    return this.objHttp.delete(this.OurUrl+'/Labours/'+id)
  }
  createLabour()
  {
    return this.objHttp.post(this.OurUrl+'/Labours/',this.formData);
  }
  
  UpdateLabour()
  {
    return this.objHttp.put(this.OurUrl+'/Labours/'+this.formData.Id,this.formData);
  }
}