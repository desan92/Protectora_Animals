import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:  HttpClient) { }

  enviarCorreuContacte(data: any)
  {
    return this.httpClient.post('http://localhost:8000/api/enviarCorreuContacte', data);
    // return this.httpClient.post('/index.php/api/enviarCorreuContacte', data);
  }
}
