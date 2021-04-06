import { Component, OnInit } from '@angular/core';
import { LabourService } from '../shared/labour.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-labour',
  templateUrl: './labour.component.html',
  styleUrls: ['./labour.component.css']
})
export class LabourComponent implements OnInit {

  constructor(public objs:LabourService) { }

  ngOnInit(): void {
    this.objs.LabourList();
  }
fillForm(selectedUser:any)
{
  this.objs.formData=Object.assign({},selectedUser);
}
delUser(id:number)
{
  this.objs.DeleteLabour(id).subscribe(
    res=>{
      alert("Deleted!!!");
    },
    err=>{
      alert("Error msg: "+err);
    }
  )
}
}
