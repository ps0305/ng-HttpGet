import { Injectable } from '@angular/core';
//importing Http class to connect to server
import {Http,Response} from '@angular/http';
//both map() and catch() function avaible in rxjs/Rx
import "rxjs/Rx";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CountriesService {

  constructor(private _http:Http) { }

  public getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all")
    //.map for capturing positive response
    .map((response:Response)=>{
      return response.json();
    })
    //.catch =>to catch the error
    .catch(this._handleError);
  }
  //handleError=>user defined function to catch the error
  public _handleError(err){
    console.log("Error raised...."+err);

  //Observables open up a continuous channel of communication in which multiple values of data can be emitted over time.
    return Observable.throw(err || "Internal server error")
  }
}
