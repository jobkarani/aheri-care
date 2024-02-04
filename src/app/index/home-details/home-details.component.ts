import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/Interfaces/blogs';
import { Service } from 'src/app/Interfaces/service';
import { HomeofferService } from 'src/app/Services/homeoffer.service';
import { LatestblogService } from 'src/app/Services/latestblog.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  
  countTo:any;
  
  constructor( private latestblogService: LatestblogService){}

  latestBlogs: Blogs[] = [];
  homeServices: Service[] = [];

  ngOnInit(): void {

    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });

  }
}