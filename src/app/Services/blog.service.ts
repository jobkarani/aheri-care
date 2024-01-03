import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../Interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  id = 0;

  constructor(private http:HttpClient) { }

  getBlogDetails(id:number): Observable<Blogs[]> {
    return this.http.get<Blogs[]>('https://products-be-api-production.up.railway.app/getBlogDetails/' + id);
  }
}

