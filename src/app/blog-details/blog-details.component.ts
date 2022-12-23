import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blogs } from '../Interfaces/blogs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  singleBlog:Blogs[] = [];
  id = 0;

  constructor(private http:HttpClient) {};

  ngOnInit(): void {
      
  }

}
