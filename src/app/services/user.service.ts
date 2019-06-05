import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.api.url}/users`);
    // }

    // getById(id: number) {
    //     return this.http.get(`${environment.api.url}/users/` + id);
    // }

    // register(user: User) {
    //     return this.http.post(`${environment.api.url}/users/register`, user);
    // }

    // update(user: User) {
    //     return this.http.put(`${environment.api.url}/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${environment.api.url}/users/` + id);
    // }
}