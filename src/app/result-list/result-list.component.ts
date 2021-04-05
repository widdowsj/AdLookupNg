import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  params: any;

  constructor(route: ActivatedRoute) {
    const searchField = route.params['searchField'];
    this.params = route.params;
  }

  ngOnInit(): void {
  }

}
