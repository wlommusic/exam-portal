import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {APIURL} from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  public categories(){
    return this._http.get(`${APIURL}/category/`)
  }
  public addCategory(category:any){
    return this._http.post(`${APIURL}/category/`,category)
  }
}
