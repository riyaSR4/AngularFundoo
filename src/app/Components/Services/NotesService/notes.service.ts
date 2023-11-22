import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any
  constructor(private httpService: HttpService) { }

  createNoteService(body:any){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PostService('Notes/AddNote' ,body, true, httpAuthOptions)
  }

  getAllNotesService() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.GetService('Notes/GetAllNotes?userId='+localStorage.getItem('Id') , true, httpAuthOptions)
  }

  updateNoteService(body:any){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PutService('Notes/EditNote' ,body, true, httpAuthOptions)
  }

  getAllArchiveNotesService(){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.GetService('Notes/GetAllArchievedNotes?userId='+localStorage.getItem('Id') , true, httpAuthOptions)
  }

  archiveNotesService(noteId:any){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PutService('Notes/ArchieveNote?noteId='+noteId+'&userId='+localStorage.getItem('Id'),{}, false, httpAuthOptions)
  }
  getAllTrashNotesService(){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.GetService('Notes/GetAllTrashNotes?userId='+localStorage.getItem('Id') , true, httpAuthOptions)
  }
  trashNotesService(noteId:any){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PutService('Notes/DeleteNote?noteId='+noteId+'&userId='+localStorage.getItem('Id'),{}, false, httpAuthOptions)
  }

}
