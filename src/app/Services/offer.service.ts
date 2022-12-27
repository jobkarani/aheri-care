import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Service } from '../Interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  id = 0;

  constructor(private http:HttpClient) { }

  getServiceDetails(id:number): Observable<Service[]> {
    return this.http.get<Service[]>('https://ahericaredbb.up.railway.app/getServiceDetails/' + id);
  }
}
