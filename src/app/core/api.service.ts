import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GitHubUserList {
  id: number,
  login: String,
  avatar_url: String
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = 'https://api.github.com/users?accept=application/vnd.github.v3+json&username=sarojpoonam30@gmail.com&password=Pika@1298';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET GITHUB USERS from the server */
  getList(): Observable<GitHubUserList[]> {
    return this.http.get<GitHubUserList[]>(this.url)
  }

}
