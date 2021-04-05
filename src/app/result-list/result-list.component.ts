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

    // http://ldapjs.org/client.html
    // https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/
    const ldap = require('ldapjs');

    const client = ldap.createClient({
      url: 'ldap.forumsys.com:389'
    })
    client.bind('cn=read-only-admin,dc=example,dc=com', 'password', (err) => console.log('Error: ', err));
  }

  ngOnInit(): void {
  }

  search(): void {
    // https://stackoverflow.com/questions/42403986/angular2-ldap-authentication
  }
}
