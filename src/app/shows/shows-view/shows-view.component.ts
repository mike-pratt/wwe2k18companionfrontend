import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-view',
  templateUrl: './shows-view.component.html',
  styleUrls: ['./shows-view.component.css']
})
export class ShowsViewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
