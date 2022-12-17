import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiResponse } from '../Interfaces/api-response';
import { ApiResponse2 } from '../Interfaces/api-response2';
import { PaginationService } from '../Services/pagination.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product:ApiResponse[] = [];
  category:ApiResponse2[] = [];
  prod:any;
  phonenumber: number = 254745388023;

  title = 'pagination';
  page:number = 1;
  count:number = 0;
  itemscount:number = 12;
  itemcounts: any = [4,8,12,16,20]

  constructor(private http:HttpClient) {
  }

  

  ngOnInit(){
    // categories 
      this.http.get<ApiResponse2[]>("https://ahericaredbb.up.railway.app/api_categories/").subscribe(

      data => {
        this.category = data
        console.log(this.category)
      }
    )

    // pagination 
    this.getData();
  }


  getData() {
    this.http.get<ApiResponse[]>('https://ahericaredbb.up.railway.app/api_products/').subscribe(response => {
      this.product  = response;
      console.log(this.product)
    });
  }

  onNextPageChange(event:any) {
    this.page=event;
    this.getData();
  }

  onPageSizeChange(event:any) {
    this.itemscount = event.target.value;
    this.page = 1;
    this.getData();
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20*%20%C2%A0Buy:*%20${encodeURIComponent(this.product[0].name)}*%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${encodeURIComponent(this.product[0].new_price)}%0A%20%20%20%20%20%20%20%20*URL:*%20${encodeURIComponent(this.product[0].get_url)}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}