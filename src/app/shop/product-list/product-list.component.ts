import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { ApiResponse2 } from 'src/app/Interfaces/api-response2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product:ApiResponse[] = [];
  category:ApiResponse2[] = [];
  phonenumber: number = 254742964456;
  id:number = 0;

  title = 'pagination';
  page:number = 1;
  count:number = 0;
  itemscount:number = 12;
  itemcounts: any = [4,8,12,16,20]

  constructor(private http:HttpClient, public dialog: MatDialog, private meta: Meta) {}


  ngOnInit(){
    // categories 
      this.http.get<ApiResponse2[]>("https://products-be-api-production.up.railway.app/api_categories/").subscribe(

      data => {
        this.category = data
        console.log(this.category)
      }
    );

    // pagination 
    this.getData();

    this.meta.addTags([ 
      { name: 'description', content: 'Aheri Care' }, 
      { name: 'keywords', content: 'Home Nurse, Home doctor, near me nursing services, nairobi home care services, home nursing services, nairobi care givers, home care givers, nairobi care givers, home care givers, nairobi home care givers' } 
    ]);
  }

  getDiscountPercentage(index:number) {
    const discountPercentage =  ((this.product[index].old_price - this.product[index].new_price) / this.product[index].new_price) * 100;
    return parseFloat(discountPercentage.toFixed(0));
  }

  getData() {
    this.http.get<ApiResponse[]>('https://products-be-api-production.up.railway.app/api_products/').subscribe(response => {
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
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.product[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.product[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.product[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}