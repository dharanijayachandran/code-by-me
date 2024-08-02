import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code_by_me';
  searchTerm: string = '';
  items: Array<{ name: string }> = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Cherry' },
    { name: 'Date' },
    { name: 'Elderberry' }
  ];
}
