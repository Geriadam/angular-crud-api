import { Component, OnInit } from '@angular/core';
import { BukuService } from '../../service/buku.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs/Subject';
declare var $: any;

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

	databuku: any = [];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();

	constructor(private bukuService: BukuService, private router: Router, private toastr: ToastrService) { }

	ngOnInit() {
		this.dtOptions = {
	      pagingType: 'full_numbers',
	      pageLength: 5
	    };
		this.bukuService.getBuku().subscribe(result => {
			this.databuku = result;
			this.dtTrigger.next();
		});
	}
	goBukuTambah()
	{
		this.router.navigate(['tambah']);
	}

	editBuku(id: number){
		this.router.navigate(['edit', id]);
	}

	deleteBuku(id: number){
		if(confirm('Apakah ingin menghapus data') == true){
			this.bukuService.deleteBuku(id)
			.subscribe(x => {
				this.bukuService.getBuku();
				this.toastr.success('Data berhasil di hapus', 'Sukses', {
					timeOut: 5000,
					closeButton: true,
					progressBar: true
				});
			})
		}
	}

}
