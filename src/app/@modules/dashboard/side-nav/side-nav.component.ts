import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MessengerService } from '../../../@core/services/messenger.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  path!: String | any;
  @ViewChild('drawer') drawer!: MatDrawer;

  breakpoints = Breakpoints;

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver,
    private messenger: MessengerService
  ) {}

  ngOnInit(): void {
    this.path = this.router.url;
    if (this.path === '/dashboard/overview') {
      localStorage.setItem('routePath', 'Overview');
    }
  }

  isActive(route: string) {
    return this.router.url.includes(route);
  }

    setRoutePath(item: string) {
      localStorage.setItem('routePath', item);
      this.messenger.emitValue.next(item);
      if (
        this.breakpointObserver.isMatched([
          Breakpoints.Small,
          Breakpoints.Handset,
        ])
      ) {
        this.messenger.sideBarMessenger.next(true);
      } else {
        this.messenger.sideBarMessenger.next(null);
      }
    }

}
