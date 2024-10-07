import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Service } from '../Interfaces/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeofferService {

  constructor(private http: HttpClient) {}

  // Fetch all services without limiting to a specific number
  getServicesToHome(): Observable<Service[]> {
    return this.http.get<Service[]>('https://products-be-api-production.up.railway.app/get_services/');
  }
}
