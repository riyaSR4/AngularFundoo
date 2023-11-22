import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../Services/NotesService/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  @Output() refreshEvent = new EventEmitter<string>();

  title: any
  description: any
  id: any
  noteId: any

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private notesService:NotesService
  ){
    console.log("data from display",data);
    if(data.note){
      this.title = data.note?.title,
      this.description = data.note?.description,
      this.noteId = data.notes
    }
  }

   onNoClick(): void{
    this.dialogRef.close();
   }

  UpdateNote(){
    console.log(this.title,this.description);
    this.id = localStorage.getItem('Id');
    
    let reqData = {
      noteId: this.noteId,
      title: this.title,
      description: this.description,
      id: +this.id,
    }
      //api integration
      this.notesService.updateNoteService(reqData).subscribe((res:any)=>{
        console.log(res);
        this.dialogRef.close();
        this.refreshEvent.emit(res)
      })
  }
}
