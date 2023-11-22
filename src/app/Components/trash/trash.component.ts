import { Component } from '@angular/core';
import { NotesService } from '../Services/NotesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {

  noteList?: any = [];
  noteListarray?: any = [];

  constructor(private noteService: NotesService) {

  }
  // read about component life cycle hook
  ngOnInit(): void {
    this.getAllTrashNotes()
  }

  getAllTrashNotes() {
    //Call API
    console.log("Trash is calling");
    this.noteService.getAllTrashNotesService().subscribe((result: any) => {
      console.log(result);
      this.noteList = result;
      this.noteListarray = this.noteList.data;
      console.log("Only array ", this.noteList.data);
    })
    
  }
}
