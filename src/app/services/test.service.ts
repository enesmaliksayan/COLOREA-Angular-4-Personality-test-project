import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions,RequestMethod,Request } from '@angular/http';
import { TestComponent } from '../test/test.component';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  cevaplar={
    'kirmiziSayisi':0,
    'maviSayisi':0,
    'sariSayisi':0,
    'yesilSayisi':0
  }

  constructor(private _http: Http) {
    console.log('Service ready');
   }
   
  getTest(id:number){
    let headers :Headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Basic '+btoa('enesmaliksayan@gmail.com:1aa685a2-42b1-4e14-90cd-3c38a875d4f5'));
    headers.append('Access-Control-Allow-Origin','*');
    
    return this._http.get('http://surveyor20170424045916.azurewebsites.net/api/Question/'+id,{headers : headers}).map(
        res => res.json()
      );
    }

  sonuc(any){
    this.cevaplar=any;
  }

  sonucGetir(){
    return this.cevaplar;
  }

}
