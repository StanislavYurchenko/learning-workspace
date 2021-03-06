import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../../core/services';

import { User } from '@learning-workspace/api-interfaces';

@Component({
  selector: 'learning-workspace-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnDestroy {
  public user: User | null | undefined;

  private subscription = new Subscription();

  constructor(private readonly apiService: ApiService) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public register(): void {
    this.userRegisterSubscription();
  }

  public login(): void {
    this.userLoginSubscription();
  }

  public logout(): void {
    this.userLogoutSubscription();
  }

  private userRegisterSubscription(): void {
    this.subscription.add(
      this.apiService
        .register({
          email: 'yurchenko.stanislav@ukr.net',
          password: '284767Abc',
          name: 'stas',
        })
        .subscribe((user) => {
          console.log('user', user);
          this.user = user;
        })
    );
  }

  private userLoginSubscription(): void {
    this.subscription.add(
      this.apiService
        .login({
          email: 'yurchenko.stanislav@ukr.net',
          password: '284767Abc',
        })
        .subscribe((user) => {
          console.log('user', user);
          this.user = user;
        })
    );
  }

  private userLogoutSubscription(): void {
    if (!this.user) return;
    this.subscription.add(
      this.apiService.logout({ id: this.user?.id }).subscribe((user) => {
        console.log('user', user);
        this.user = null;
      })
    );
  }
}
