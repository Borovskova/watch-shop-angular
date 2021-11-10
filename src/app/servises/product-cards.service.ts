import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCardsService {

  private productCardsUrl:any = "https://api.npoint.io/d36fcd2f41d44c8fb369";

  constructor(private http: HttpClient) { }

  
  getProductCardsUrl() {
    return this.http.get<any>(this.productCardsUrl);
  }
  getMoreProductCardsUrl() {
    return this.http.get<any>(this.productCardsUrl);
  }
}
