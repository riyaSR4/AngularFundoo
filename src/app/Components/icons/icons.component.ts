import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../Services/NotesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  @Input() noteId: any;
  constructor(private noteService: NotesService,private _snackBar: MatSnackBar) {

  }

  archive(){
    this.noteService.archiveNotesService(this.noteId).subscribe((result: any) => {
      console.log(result);
      this._snackBar.open('Archived Successfully!!!', '', {
        duration: 2000
      });
    })
  }
}
