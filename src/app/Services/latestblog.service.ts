import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Blogs } from '../Interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class LatestblogService {

  constructor(private http: HttpClient) {}

  getLatestBlogs() {
    return this.http.get<Blogs[]>('http://127.0.0.1:8000/get_blogs/').pipe(
      map(blogs => blogs.slice(-3))
    );
  }
}
