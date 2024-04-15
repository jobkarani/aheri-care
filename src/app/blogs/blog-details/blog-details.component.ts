import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../../Interfaces/blogs';
import { BlogService } from '../../Services/blog.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  singleBlog:Blogs[] = [];
  id:number = 0;

  constructor(private api:BlogService,private route:ActivatedRoute, private meta: Meta) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getBlogDetails(this.id).subscribe(
          datax =>{
            this.singleBlog = datax;
            console.log(datax)
          }
        )
      }
    );

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

}
