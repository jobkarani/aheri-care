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
    return this.http.get<Blogs[]>('https://ahericaredbb.up.railway.app/get_blogs/').pipe(
      map(blogs => blogs.slice(-3))
    );
  }
}
