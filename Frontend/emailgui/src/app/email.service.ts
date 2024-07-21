import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseURL:string="localhost:8080"


  constructor(private http:HttpClient) { }

sendEmail(data: any){

console.log("Email send successfully...")
return this.http.post('http://localhost:8080/sendEmail',data);

}



}
