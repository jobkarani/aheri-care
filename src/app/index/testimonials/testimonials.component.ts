import { Component, OnDestroy, OnInit } from '@angular/core';

interface Testimonial {
  name: string;
  content: string;
} 

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [
    {
      name: 'Eugene Sudi',
      content: 'Aheri Care exceeded my expectations in every way. They were diligent, professional, kind, understanding and gave me the utmost home care. They exceeded my expectations and as a result of their professionalism I got healed in record time surpassing the initial healing time prognosis I was given by doctors by over 2 months. They were not only professional and diligent but also very affordable. I got 5 star home care treatment on a very decent budget.',
    },
    {
      name: 'Jane Njeri',
      content: 'The best home nursing care I’ve experienced. Highly recommended for their commitment.',
    },
    {
      name: 'Michael Opar',
      content: 'Excellent service, very friendly staff, and always on time. Will use again!',
    }
  ];

  visibleTestimonials: Testimonial[] = [];
  currentSlideIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.updateVisibleTestimonials();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  updateVisibleTestimonials(): void {
    this.visibleTestimonials = this.testimonials.slice(this.currentSlideIndex, this.currentSlideIndex + 1);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }
}