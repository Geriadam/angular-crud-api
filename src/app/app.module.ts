import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { BukuService } from './service/buku.service';
import { BukuComponent } from './componnent/buku/buku.component';
import { BukutambahComponent } from './componnent/buku/bukutambah.component';
import { BukueditComponent } from './componnent/buku/bukuedit.component';


const appRoot: Routes = [
	{ path: "buku", component: BukuComponent },
	{ path: "tambah", component: BukutambahComponent },
	{ path: "edit/:id", component: BukueditComponent },
	{ path: "", redirectTo: 'buku', pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukutambahComponent,
    BukueditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoot)
  ],
  providers: [BukuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
