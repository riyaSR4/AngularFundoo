import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../Services/NotesService/notes.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  @Input() note: any;
  constructor(private noteService: NotesService,private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    //console.log("icons");
    
    console.log(this.note);
    
  }

  archive(){
    this.noteService.archiveNotesService(this.note.noteId).subscribe((result: any) => {
      console.log(result);
      this._snackBar.open('Archived Successfully!!!', '', {
        duration: 2000
      });
    })
    location.reload();
  }
  trash(){
    this.noteService.trashNotesService(this.note.noteId).subscribe((result: any) => {
      console.log(result);
      this._snackBar.open('Deleted Successfully!!!', '', {
        duration: 2000
      });
    })
    location.reload();
  }
}
