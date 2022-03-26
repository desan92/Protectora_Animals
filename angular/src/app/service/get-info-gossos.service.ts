import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetInfoGossosService {

  constructor(private httpClient:  HttpClient) { }

  infogossos(estat: string, offset: number)
  {

    let params = new HttpParams();
    params = params.append("estat", estat);
    params = params.append("offset", offset)

    return this.httpClient.get('http://localhost:8000/api/Animals', 
      {
        params: params
      }
    );
    // return this.httpClient.get('http://localhost:8000/api/Animals/' + data);
    // return this.httpClient.post('/index.php/api/enviarCorreuContacte', data);
  }

  infogos(id: number)
  {

    let params = new HttpParams();
    params = params.append("id", id);

    return this.httpClient.get('http://localhost:8000/api/Animals/gos', 
      {
        params: params
      }
    );
    // return this.httpClient.get('http://localhost:8000/api/Animals/' + data);
    // return this.httpClient.post('/index.php/api/enviarCorreuContacte', data);
  }

  infoLastIDgos(data: any)
  {

    return this.httpClient.get('http://localhost:8000/api/Animals/' + data);
    // return this.httpClient.post('/index.php/api/enviarCorreuContacte', data);
  }

  infoCountgos(data: any)
  {

    return this.httpClient.get('http://localhost:8000/api/Animals/Count/' + data);
    // return this.httpClient.post('/index.php/api/enviarCorreuContacte', data);
  }

}
