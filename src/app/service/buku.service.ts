import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Buku } from '../model/buku.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BukuService {

	selectBuku: Buku;
	databuku: Buku[];
	constructor(private http: Http) { }

	createBuku(emp : Buku){
		var body = JSON.stringify(emp);
		var headerOptions  = new Headers({'Content-Type':'application/json'});
		var requestOptions = new RequestOptions({method: RequestMethod.Post,headers: headerOptions});
		return this.http.post("http://localhost/belajarangular/perpustakaanapi/index.php/buku", body, requestOptions)
		.map(res => res.json());
	}

	editBuku(emp, id){
		var body = JSON.stringify(emp);
		var headerOptions = new Headers({'Content-Type':'application/json'});
		var requestOptions = new RequestOptions({method: RequestMethod.Put,headers: headerOptions});
		return this.http.put("http://localhost/belajarangular/perpustakaanapi/index.php/buku", body, requestOptions)
		.map(res => res.json());
	}

	getBuku(){
		return this.http.get("http://localhost/belajarangular/perpustakaanapi/index.php/buku")
		.map(res => res.json());
	}

	getBukuId(id: number){
		return this.http.get("http://localhost/belajarangular/perpustakaanapi/index.php/buku?id_buku="+id)
		.map(res => res.json())
	}

	deleteBuku(id: number){
		return this.http.get("http://localhost/belajarangular/perpustakaanapi/index.php/bukudelete?id="+id)
		.map(res => res.json());
	}

}
