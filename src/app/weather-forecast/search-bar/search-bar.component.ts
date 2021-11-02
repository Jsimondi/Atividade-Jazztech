import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchValueEmitter = new EventEmitter;
  searchBarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.searchBarForm = this.formBuilder.group({
      search: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  emitSearchValue() {
    this.searchValueEmitter.emit(this.searchBarForm.value);
  }

}
