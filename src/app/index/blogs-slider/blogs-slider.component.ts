import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Blogs } from 'src/app/Interfaces/blogs';
import { LatestblogService } from 'src/app/Services/latestblog.service';

@Component({
  selector: 'blogs-slider',
  templateUrl: './blogs-slider.component.html',
  styleUrls: ['./blogs-slider.component.css']
})
export class BlogsSliderComponent implements OnInit {

  constructor(private latestblogService: LatestblogService, private meta: Meta) { }


  latestBlogs: Blogs[] = [];

  ngOnInit(): void {
    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }
 }