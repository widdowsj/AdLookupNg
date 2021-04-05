import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      searchTerm: [''],
      searchField: [''],
      domain: [''],
    });
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.router.navigate(['/search', { searchTerm: this.form.value.searchTerm, searchField: this.form.value.searchTerm, domain: this.form.value.domain }])
  }
}
