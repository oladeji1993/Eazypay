import { Component } from '@angular/core';
import { MessengerService } from 'src/app/@core/services/messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routePath!: string | null;
  constructor(
    private messenger: MessengerService
  ) {}

  ngOnInit(): void {
    this.routePath = localStorage.getItem('routePath');
    this.messenger.emitValue.subscribe((res: any) => {
      if(res !== null){
        this.routePath = res;
      }
    });
  }

}
