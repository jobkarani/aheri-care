import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }

  getTotalPages() {
    return this.http.get('/api/pagination/total-pages');
  }

  // getData(page, pageSize) {
  //   return this.http.get(`/api/pagination/data?page=${page}&pageSize=${pageSize}`);
  // }
}
