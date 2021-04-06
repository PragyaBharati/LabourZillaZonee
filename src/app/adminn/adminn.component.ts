import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-adminn',
  templateUrl: './adminn.component.html',
  styleUrls: ['./adminn.component.css']
})
export class AdminnComponent implements OnInit {

  constructor(public objs:AdminService) { }

  ngOnInit(): void {
    this.objs.adminList();
  }
fillForm(selectedAdmin:any)
{
  this.objs.formData=Object.assign({},selectedAdmin);
}
delUser(id:number)
{
  this.objs.DeleteAdmin(id).subscribe(
    res=>{
      alert("Deleted!!!");
    },
    err=>{
      alert("Error msg: "+err);
    }
  )
}
}
