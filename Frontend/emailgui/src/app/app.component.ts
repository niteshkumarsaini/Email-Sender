import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EmailCardComponent } from './Components/email-card/email-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,EmailCardComponent,HttpClientModule],
  providers:[HttpClientModule,EmailService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emailgui';
}
