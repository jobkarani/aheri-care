import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../Interfaces/service';
import { OfferService } from '../Services/offer.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {

  singleService:Service[] = [];
  id:number = 0;

  constructor(private api:OfferService,private route:ActivatedRoute) {};

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
  }
}
