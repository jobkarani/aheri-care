import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse2 } from '../Interfaces/api-response2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  category:ApiResponse2[] = [];

  constructor(private http:HttpClient) {
  }

  ngOnInit(){
      this.http.get<ApiResponse2[]>("https://ahericaredbb.up.railway.app/api_categories/").subscribe(

      data => {
        this.category = data
        console.log(this.category)
      }
    )
  }

}
