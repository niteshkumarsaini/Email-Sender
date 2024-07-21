import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { EmailService } from '../../email.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,NgIf],
  templateUrl: './email-item.component.html',
  styleUrl: './email-item.component.css'
})
export class EmailItemComponent {
  constructor(private email:EmailService){

  }
  flag:boolean=false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 data={
  to:"",
  subject:"",
  cc:"",
  message:""
 }



  matcher = new MyErrorStateMatcher();
  onSubmit(){
    console.log("Form Submitted Successfully..")
    console.log(this.data)
  if(this.data.to===''){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please write sender email before sending!",

    });
    return;

  }
  if(this.data.subject===''){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please write subject before sending!",

    });
    return;
  }
  if(this.data.message===''){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please write message before sending!",

    });

  }
    this.flag=true;

    this.email.sendEmail(this.data).subscribe(

      response=>{
        this.flag=false;
        console.log(response);
        Swal.fire({
          title: "Sent",
          text: "Your Email has been send successfully.",
          icon: "success"
        });
        return;
      },
      error=>{
        this.flag=false;
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Please try again after sometime.</a>'
        });
      }
    );
  }




}
