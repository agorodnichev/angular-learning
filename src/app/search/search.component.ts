import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchHandler() {
    console.log(this.inputValue)
  }

}
