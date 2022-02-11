import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  selectedRegion: string;
  regions: string[] = ['Asia', 'Africa', 'America', 'Europe', 'Oceania'];

  @Output() regionChange: EventEmitter<string> = new EventEmitter();
}
