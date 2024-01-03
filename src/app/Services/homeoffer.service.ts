import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Service } from '../Interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class HomeofferService {

  constructor(private http: HttpClient) {}

  getServicesToHome() {
    return this.http.get<Service[]>('https://products-be-api-production.up.railway.app/get_services/').pipe(
      map(services => services.slice(-3))
    );
  }
}
