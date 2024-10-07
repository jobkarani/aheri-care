import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Blogs } from '../Interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class LatestblogService {

  constructor(private http: HttpClient) {}

  // Fetch all blogs without limiting the number
  getLatestBlogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>('https://products-be-api-production.up.railway.app/get_blogs/');
  }
}
