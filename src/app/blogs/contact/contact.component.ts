import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../classes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // directives: [FormsModule]
})
export class ContactComponent {
  contactModel = new Contact('','','','','')
  contacForm: any;

constructor(private http:HttpClient){}

  onSubmit(){
    const formData = this.contacForm.value;
    this.http.post('/send-email', formData).subscribe();
    console.log(this.contactModel);
  }
}
