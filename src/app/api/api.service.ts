import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productUrl = '/api/20201005_frontend_assignment/prod_details_362950.json';

  constructor(
    private http: HttpClient
  ) { }

  getProduct(): Observable<any> {
    return this.http.get(this.productUrl);
  }
}
