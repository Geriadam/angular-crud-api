import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BukuService } from '../../service/buku.service';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-bukuedit',
  templateUrl: './bukuedit.component.html',
  styleUrls: ['./bukuedit.component.css']
})
export class BukueditComponent implements OnInit {

	id: number;
	selectBuku = [];
	data:object = {};
	exist = false;
	constructor(
		private router: Router, 
		private route: ActivatedRoute, 
		private http: Http, 
		private bukuService: BukuService,
		private toastr: ToastrService
	) { }

	goBuku()
	{
		this.router.navigate(['buku']);
	}

	initialize()
	{
		this.route.params.subscribe(params => {
			this.id = +params['id'];
		});

		this.bukuService.getBukuId(this.id).subscribe(data => {
		  	this.selectBuku = data;
		});
	}

	onSubmit(form: NgForm){
		console.log(form.value.id_buku);
		this.bukuService.editBuku(form.value, form.value.id_buku)
		.subscribe(data => {
			this.goBuku();
			form.reset();
			this.toastr.success('Data berhasil di edit', 'Sukses', {
				timeOut: 5000,
				closeButton: true,
				progressBar: true
			});
		})
	}

	ngOnInit() {
		this.initialize();
	}

}
