import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output() searchForm = new EventEmitter<string>();
  searchText:string = '';

  onSubmit(){
    this.searchForm.emit(this.searchText);
  };
}
