import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss']
})
export class MySelectComponent {
  @Input() label: string;
  @Input() options: any[];
  @Input() disabled: boolean;
  @Input() control: any;
  @Input() controlName: string;
  @Output() selectionChanged = new EventEmitter<any>();
}
