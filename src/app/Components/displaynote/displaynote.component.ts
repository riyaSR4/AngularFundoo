import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  
  @Input() note:any;
  constructor(public dialog: MatDialog) {

  
  }
  ngOnInit(): void {
   
  }

  openDialog(note:any,noteId:any){
    console.log(note);

    const dialogRef = this.dialog.open(UpdateComponent,{
      width:'600px',
      height:'200px',
      data: { 
        note: note,
        notes: noteId }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
