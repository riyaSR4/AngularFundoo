import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Components/Services/NotesService/notes.service'
import { DataService } from '../Services/DataService/data.service';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  searchText:any
  //@Input() NotesArrayList:any
  noteList?: any = [];
  noteListarray?: any = [];
  constructor(private noteService: NotesService,private dataService: DataService) {

  }
  // read about component life cycle hook
  ngOnInit(): void {
    this.getAllNotes()

    this.dataService.receivedData.subscribe((res:any)=>{
      console.log(res);
      this.searchText = res
    });
  }

  getAllNotes() {
    //Call API
    console.log("Get all is calling");
    this.noteService.getAllNotesService().subscribe((result: any) => {
      console.log(result);
      this.noteList = result;
      this.noteListarray = this.noteList.data;
      console.log("Only array ", this.noteList.data);
    })
  }
  dataFromChild(data: any) {
    console.log("data from child create note", data);
    this.getAllNotes()
  }
  
}
