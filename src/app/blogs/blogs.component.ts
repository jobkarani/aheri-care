import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blogs } from '../Interfaces/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{

  constructor(private http:HttpClient) {}

  blogs:Blogs[] = [];

  ngOnInit(): void {
    this.http.get<Blogs[]>('http://127.0.0.1:8000/get_blogs/').subscribe(data =>{
      this.blogs = data;
      console.log(data);
    })
  }

}
