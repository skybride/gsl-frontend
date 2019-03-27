import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../list-items/list-items.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(){
    return this.http.get<Item[]>('http://localhost:8080/products');
  }
}
