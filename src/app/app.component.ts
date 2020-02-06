import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'to-do-list';
  search: boolean = false;
  cart: number = 0;
  toggleSearch() {
    if(this.search) {
      this.search = false;
    } else {
      this.search = true;
    }
  }
  addItems() {
    this.cart = this.cart + 1;
  }
}