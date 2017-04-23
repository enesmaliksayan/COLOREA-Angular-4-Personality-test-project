import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private _http: Http) {
    console.log('Service ready');
   }

   getTest(){
     return this._http.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1').map(
       res => res.json()
     );
   }

}
