import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent{

 constructor(private meta: Meta){}

 ngOnInit(){
  this.meta.addTags([ 
    { name: 'description', content: 'Aheri Care' }, 
    { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
  ]);
 }

}
