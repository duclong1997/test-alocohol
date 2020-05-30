import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchTitle } from './entity/searchTitle';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {

  @Output() public eventSearch = new EventEmitter();
  private titleModel = new SearchTitle();
  
  constructor() { }

  ngOnInit() {
  }

  // click button search
  searchTitle():void{
    // send data event from child to parent
    this.eventSearch.emit(this.titleModel.title || '');
  }

}
