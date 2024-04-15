import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../Interfaces/service';
import { OfferService } from '../../Services/offer.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  singleService:Service[] = [];
  id:number = 0;

  constructor(private api:OfferService,private route:ActivatedRoute, private meta: Meta) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getServiceDetails(this.id).subscribe(
          datax =>{
            this.singleService = datax;
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
