import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Blogs } from 'src/app/Interfaces/blogs';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit{

  constructor(private http:HttpClient, private meta: Meta) {}

  blogs:Blogs[] = [];

  ngOnInit(): void {
    this.http.get<Blogs[]>('https://products-be-api-production.up.railway.app/get_blogs/').subscribe(data =>{
      this.blogs = data;
      console.log(data);
    });

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

}
