import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../products/products.component";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get<Product[]>('https://ishmausttest.s3.eu-central-1.amazonaws.com/data.json')
  }
}
