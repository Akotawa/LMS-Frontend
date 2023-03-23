import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-service-catagoue',
  templateUrl: './service-catagoue.component.html',
  styleUrls: ['./service-catagoue.component.scss']
})
export class ServiceCatagoueComponent implements OnInit {
data:any
routeSub:any

  constructor(    private _adminService: AdminService,
    private routes : ActivatedRoute
    ) { }

  ngOnInit() {
    // this.getAllList(1)
    this.routeSub = this.routes.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id

      this.getAllList(params['id']);
    });
  }

  getAllList(id:any) {
    this._adminService.serviceList(id).then((resData:any)=>{
      this.data = resData.data;
      console.log(this.data) 
    })
  }

}
