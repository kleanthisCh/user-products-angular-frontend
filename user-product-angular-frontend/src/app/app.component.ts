import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users-products-frontend';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list' },
    { text: 'Insert a User', link: 'user/insert' },
    { text: 'Delete a User', link: 'Not iplemented yet' },
    { text: 'Update a User', link: 'Not iplemented yet' },
  ];
  productsMenu: MenuItem[] = [
    { text: 'List all Products', link: 'product/list' },
    { text: 'Insert a Product', link: 'product/insert' },
    { text: 'Delete a Product', link: 'Not iplemented yet' },
    { text: 'Update a Product', link: 'Not iplemented yet' },
  ];
}
