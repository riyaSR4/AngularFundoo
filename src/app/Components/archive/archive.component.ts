import { Component } from '@angular/core';
import { NotesService } from '../Services/NotesService/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {

  noteList?: any = [];
  noteListarray?: any = [];

  constructor(private noteService: NotesService) {

  }
  // read about component life cycle hook
  ngOnInit(): void {
    this.archiveNotes()
  }

  archiveNotes() {
    //Call API
    console.log("Archive is calling");
    this.noteService.getAllArchiveNotesService().subscribe((result: any) => {
      console.log(result);
      this.noteList = result;
      this.noteListarray = this.noteList.data;
      console.log("Only array ", this.noteList.data);
    })
    
  }
}
