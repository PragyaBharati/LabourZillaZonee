import { Injectable } from '@angular/core';
import{User} from './user.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly OurUrl="https://localhost:44311/api";
formData:User=new User();
list:User[];
  constructor(private objHttp:HttpClient) { }
  userList()
  {
    this.objHttp.get(this.OurUrl+'/Users/').toPromise().then(u=>this.list=u as User[]);
  }
  DeleteUsers(id:number)
  {
    return this.objHttp.delete(this.OurUrl+'/Users/'+id)
  }
  createUser()
  {
    return this.objHttp.post(this.OurUrl+'/Users/',this.formData);
  }
  
  UpdateUser()
  {
    return this.objHttp.put(this.OurUrl+'/Users/'+this.formData.UserId,this.formData);
  }
}
