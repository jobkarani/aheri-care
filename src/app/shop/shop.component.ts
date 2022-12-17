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

    // whatsapp 
    this.fetchProduct();
    
  }

  fetchProduct(){
    this.http.get<ApiResponse[]>('https://ahericaredbb.up.railway.app/api_products/').subscribe(response => {
    this.prod = response;
    console.log(this.prod)
  });
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
    window.open(`https://api.whatsapp.com/send?phone=254745388023&text=I%20would%20like%20to%20purchase%20the%20${encodeURIComponent(this.prod.name)}%20/`, '_blank');
    this.fetchProduct();
  }

}