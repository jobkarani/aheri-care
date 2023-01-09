import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/Interfaces/blogs';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit{

  constructor(private http:HttpClient) {}

  blogs:Blogs[] = [];

  ngOnInit(): void {
    this.http.get<Blogs[]>('https://ahericaredbb.up.railway.app/get_blogs/').subscribe(data =>{
      this.blogs = data;
      console.log(data);
    })
  }

}
