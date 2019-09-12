import { Injectable } from '@angular/core';
import { Message } from '../models/message.model'
import { Observable, from, Subject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { webSocket } from "rxjs/webSocket";
const subject = webSocket("ws://localhost:8081");

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public URL = 'http://localhost:3000/messages';

  constructor(
    private http: HttpClient,
  ) { }

  public getMessages(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  public postMessage = (msg: any): Observable<any> => {

    return this.http.post<any>(this.URL, msg);

  };
}
