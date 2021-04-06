import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(public objs:UserService) { }

  ngOnInit(): void {
    this.objs.userList();
  }
fillForm(selectedUser:any)
{
  this.objs.formData=Object.assign({},selectedUser);
}
delUser(id:number)
{
  this.objs.DeleteUsers(id).subscribe(
    res=>{
      alert("Deleted!!!");
    },
    err=>{
      alert("Error msg: "+err);
    }
  )
}
}
