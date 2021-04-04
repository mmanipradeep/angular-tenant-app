import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { UpdateTenantComponent } from './update-tenant/update-tenant.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    TenantListComponent,
    CreateTenantComponent,
    TenantDetailsComponent,
    UpdateTenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
