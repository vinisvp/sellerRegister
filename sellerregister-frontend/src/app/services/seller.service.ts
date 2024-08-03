import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../interfaces/Seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  uri = "http://localhost:8080/sellers";

  constructor(private http: HttpClient) { }

  getSellers(): Observable<Seller[]>{
    return this.http.get<Seller[]>(this.uri);
  }

  getSeller(id: number): Observable<Seller>{
    return this.http.get<Seller>(`${this.uri}/${id}`);
  }

  save(seller: Seller): Observable<Seller>{
    return this.http.post<Seller>(this.uri, seller);
  }

  update(seller: Seller){
    return this.http.post<Seller>(`${this.uri}/${seller.id}`, seller);
  }

  delete(seller: Seller){
    return this.http.delete<Seller>(`${this.uri}/${seller.id}`);
  }
}
