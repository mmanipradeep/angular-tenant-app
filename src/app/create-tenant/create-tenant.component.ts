import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})

export class CreateTenantComponent implements OnInit {

  tenant: Tenant = new Tenant();
  constructor(private _location: Location,private tenantService: TenantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTenant(){
    this.tenantService.createTenant(this.tenant).subscribe( data =>{
      console.log(data);
      this.goToTenantList();
    },
    error => console.log(error));
  }

  goToTenantList(){
    this.router.navigate(['/tenants']);
  }

  onSubmit(){
    console.log(this.tenant);
    this.saveTenant();
  }

   goBack() {
  this._location.back();
  console.log( 'goBack()...' );
     }

}
