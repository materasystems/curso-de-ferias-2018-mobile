import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  @Input() title: string;

}