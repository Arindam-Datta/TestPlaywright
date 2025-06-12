import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule} from '@angular/router';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,RouterModule, CommonModule]
})
export class AppComponent {
}