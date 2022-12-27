import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiResponse } from '../Interfaces/api-response';
import { ApiResponse2 } from '../Interfaces/api-response2';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product:ApiResponse[] = [];
  category:ApiResponse2[] = [];
  phonenumber: number = 254742964456;
  id:number = 0;

  title = 'pagination';
  page:number = 1;
  count:number = 0;
  itemscount:number = 12;
  itemcounts: any = [4,8,12,16,20]

  constructor(private http:HttpClient) {}

  ngOnInit(){
    // categories 
      this.http.get<ApiResponse2[]>("https://ahericaredbb.up.railway.app/api_categories/").subscribe(

      data => {
        this.category = data
        console.log(this.category)
      }
    );

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

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.product[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.product[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://40163de3.ahericareng.pages.dev/product-details/${this.product[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}