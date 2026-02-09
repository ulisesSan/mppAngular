import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly API_URL = "http://localhost:8080";

  constructor(private http:HttpClient){}

  uploadFile(file:File):Observable<any[]>{
    const formData = new FormData();

    formData.append('file', file,file.name)
    return this.http.post<any[]>(this.API_URL+'/upload',formData)
  }
}
