import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Blogs } from 'src/app/Interfaces/blogs';
import { LatestblogService } from 'src/app/Services/latestblog.service';

@Component({
  selector: 'blogs-slider',
  templateUrl: './blogs-slider.component.html',
  styleUrls: ['./blogs-slider.component.css']
})
export class BlogsSliderComponent implements OnInit, OnDestroy {

  latestBlogs: Blogs[] = [];
  visibleBlogs: Blogs[] = [];
  currentSlideIndex: number = 0;
  autoSlideInterval: any;

  constructor(private latestblogService: LatestblogService, private meta: Meta) {}

  ngOnInit(): void {
    this.latestblogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
      this.updateVisibleBlogs();
      this.startAutoSlide();
    });

    this.meta.addTags([
      { name: 'description', content: 'Aheri Care' },
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' }
    ]);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  updateVisibleBlogs(): void {
    this.visibleBlogs = this.latestBlogs.slice(this.currentSlideIndex, this.currentSlideIndex + 3);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change blogs every 5 seconds
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 3) % this.latestBlogs.length;
    this.updateVisibleBlogs();
  }
}
