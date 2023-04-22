import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserAPIList } from '../user.interfaces';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}

  loading = true;
  userList: User[] = [];
  subscription: Subscription | undefined;

  usernameSortType: 'asc' | 'desc' = 'asc';
  firstnameSortType: 'asc' | 'desc' = 'asc';
  lastnameSortType: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting "findAll" API call');
    this.userService.findAll().subscribe({
      next: (apiData: UserAPIList) => {
        const { status, data } = apiData;
        console.log(status, data);
        this.userList = data;
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('"findAll" API call completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case 'username':
        this.usernameSortType =
          this.usernameSortType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.usernameSortType]);
        break;
      case 'name':
        this.firstnameSortType =
          this.firstnameSortType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.firstnameSortType]);
        break;
      case 'surname':
        this.lastnameSortType =
          this.lastnameSortType === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.lastnameSortType]);
        break;
      default:
        break;
    }
  }
}
