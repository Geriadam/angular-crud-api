import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BukuService } from '../../service/buku.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bukutambah',
  templateUrl: './bukutambah.component.html',
  styleUrls: ['./bukutambah.component.css']
})
export class BukutambahComponent implements OnInit {

	constructor(private router: Router, private bukuService: BukuService, private toastr: ToastrService) { }

	goBuku()
	{
		this.router.navigate(['buku']);
	}

	initialize(form?: NgForm)
	{
		this.bukuService.selectBuku = {
			id_buku: null,
			judul_buku: '',
			penerbit_buku: '',
			pengarang_buku: '',
		};
	}

	onSubmit(form: NgForm){
		this.bukuService.createBuku(form.value)
		.subscribe(data => {
			this.goBuku();
			this.toastr.success('Data berhasil di tambahkan', 'Sukses', {
				timeOut: 5000,
				closeButton: true,
				progressBar: true
			});
		})
	}

	ngOnInit() {
	}

}
