import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('toggler') toggler!: ElementRef;

  breakpoints = Breakpoints;
  isSmallScreen!: boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  isSmallerScreen!: boolean;

  ngAfterViewInit() {
    this.checkScreenSize();

    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Handset])
      .subscribe(() => {
        this.checkScreenSize();
      });
    this.changeDetectorRef.detectChanges();
  }

  private checkScreenSize() {
    if (
      this.breakpointObserver.isMatched([
        Breakpoints.Small,
        Breakpoints.Handset,
      ])
    ) {
      this.isSmallScreen = true;
      this.drawer.mode = 'over';
      this.drawer.close();
    } else {
      this.isSmallScreen = false;
      this.drawer.mode = 'side';
      this.drawer.open();
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}
