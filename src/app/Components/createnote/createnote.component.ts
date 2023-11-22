import { Component, EventEmitter, Output } from '@angular/core';
import { NotesService } from '../Services/NotesService/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  @Output() refreshEvent = new EventEmitter<string>();

  fullView=false

  title: any;
  description: any;
  id: any;

  constructor(private notesService:NotesService){

  }

  openFullView(){
    this.fullView = true;
  }

  CreateNote(){
    console.log(this.title,this.description);
    this.id = localStorage.getItem('Id');
    let reqData = {
      title: this.title,
      description: this.description,
      id: +this.id
    }
    if(this.title !== '' || this.description !== ''){
      //api integration
      this.notesService.createNoteService(reqData).subscribe((res:any)=>{
        console.log(res);
        this.refreshEvent.emit(res);
        this.fullView=false
      })
    }
  }
}
