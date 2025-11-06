// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Contact } from '../models/contact';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {
//   private apiUrl = 'http://localhost:8080/api/contacts';

//   constructor(private http: HttpClient) { }

//   getAllContacts(): Observable<Contact[]> {
//     return this.http.get<Contact[]>(this.apiUrl);
//   }

//   getContactById(id: number): Observable<Contact> {
//     return this.http.get<Contact>(`${this.apiUrl}/${id}`);
//   }

//   getUnreadContacts(): Observable<Contact[]> {
//     return this.http.get<Contact[]>(`${this.apiUrl}/unread`);
//   }

//   createContact(contact: Contact): Observable<Contact> {
//     return this.http.post<Contact>(this.apiUrl, contact);
//   }

//   markAsRead(id: number): Observable<Contact> {
//     return this.http.patch<Contact>(`${this.apiUrl}/${id}/read`, {});
//   }

//   deleteContact(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contacts`;

  constructor(private http: HttpClient) {}

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }
}