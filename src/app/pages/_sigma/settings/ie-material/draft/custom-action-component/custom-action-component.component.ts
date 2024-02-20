import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <button (click)="onEdit()">Edit</button>
    <button (click)="onApprove()">Approve</button>
  `,
})
export class CustomActionsComponent implements ViewCell {
  @Input() value: any;
  @Input() rowData: any;

  @Output() edit = new EventEmitter();
  @Output() approve = new EventEmitter();

  onEdit() {
    this.edit.emit(this.rowData);
  }

  onApprove() {
    this.approve.emit(this.rowData);
  }
}
