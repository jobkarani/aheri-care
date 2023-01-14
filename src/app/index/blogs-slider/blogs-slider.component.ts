import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/Interfaces/blogs';
import { LatestblogService } from 'src/app/Services/latestblog.service';

@Component({
  selector: 'blogs-slider',
  templateUrl: './blogs-slider.component.html',
  styleUrls: ['./blogs-slider.component.css']
})
export class BlogsSliderComponent implements OnInit {

  constructor(private latestblogService: LatestblogService) { }


  latestBlogs: Blogs[] = [];

  ngOnInit(): void {
    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });
  }
 }