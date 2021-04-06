import { Injectable } from '@angular/core';
import{Admin} from './admin.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly OurUrl="https://localhost:44363/api";
formData:Admin=new Admin();
alist:Admin[];
  constructor(private objHttp:HttpClient) { }
  adminList()
  {
    this.objHttp.get(this.OurUrl+'/Admins/').toPromise().then(u=>this.alist=u as Admin[]);
  }
  DeleteAdmin(id:number)
  {
    return this.objHttp.delete(this.OurUrl+'/Admins/'+id)
  }
  createAdmin()
  {
    return this.objHttp.post(this.OurUrl+'/Admins/',this.formData);
  }
  
  UpdateAdmin()
  {
    return this.objHttp.put(this.OurUrl+'/Admins/'+this.formData.LoginId,this.formData);
  }
}
