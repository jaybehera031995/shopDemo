import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-sort-popup',
  templateUrl: './sort-popup.component.html',
  styleUrls: ['./sort-popup.component.css']
})
export class SortPopupComponent {
  constructor(private dialogRef: MatDialogRef<SortPopupComponent>) {}

  sort(order: string) {
    this.dialogRef.close(order);
  }
  
}
