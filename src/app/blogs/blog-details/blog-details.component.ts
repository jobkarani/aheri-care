import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../../Interfaces/blogs';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  singleBlog:Blogs[] = [];
  id:number = 0;

  constructor(private api:BlogService,private route:ActivatedRoute) {};

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
  }

}
