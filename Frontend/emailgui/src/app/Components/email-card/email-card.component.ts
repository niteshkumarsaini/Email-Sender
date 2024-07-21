import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { EmailItemComponent } from '../email-item/email-item.component';


@Component({
  selector: 'app-email-card',
  standalone: true,
  imports: [MatCardModule,EmailItemComponent],
  templateUrl: './email-card.component.html',
  styleUrl: './email-card.component.css'
})
export class EmailCardComponent {

}
