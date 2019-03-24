import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doNavigate(navigationOption: number): void {
    switch (navigationOption) {
        case 0: // Shows
            this.router.navigate(['/shows']);
            break;
        case 1: // Roster
            this.router.navigate(['/wrestlers']);
            break;
        case 2: // Championships
            this.router.navigate(['/championships']);
            break;
        case 3: // Draft Mode
            // this.router.navigate(['/draft']); // TODO
            break;
        default:
          break;
    }
  }

}
