import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiManager {

  API_KEY: string = "IDKEID9384I9FDF93";
  LOGIN_URL: string = "http://tawseel-shj.ae/TawseelWeb/index.php/api/deliveryGuy/login";
  PLATFORM: string = "1";

  constructor(public http: Http) {
    console.log('Hello ApiManager Provider');
  }

  loginRequest(username: string, password: string){

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("api_key",this.API_KEY);
    urlSearchParams.append("username",username);
    urlSearchParams.append("password",password);
    urlSearchParams.append("platform",this.PLATFORM);
    urlSearchParams.append("device_token","XXXX");
    let body = urlSearchParams.toString();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http
      .post(this.LOGIN_URL, body, {headers: headers})
      .map(response => response.json())

  }
}
