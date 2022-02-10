import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  selected = '';
  //TODO: fix the slow reposnse getting from here
  @Input() regions: string[];
  @Input() region?: string;
  @Output() regionChange: EventEmitter<string> = new EventEmitter();
}
