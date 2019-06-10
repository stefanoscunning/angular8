import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Choice } from '../models';
import { Observable } from 'rxjs/Rx';
//import { Observable } from 'rxjs';


const CHOICES: Choice[] = [
    { id: 1, label : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus libero non lacus placerat, in dapibus eros vestibulum. Morbi felis nulla, euismod eget massa ut, pellentesque elementum lorem." },
    { id: 2, label: "Quisque quis nunc sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus faucibus in purus a viverra. Aliquam et pellentesque velit, placerat mollis ex. Pellentesque at blandit ligula. Nam dictum metus non nisl dictum dictum eget in velit." },
    { id: 3, label: "In tincidunt urna quam, in volutpat turpis maximus ut. In ullamcorper libero euismod, consectetur lectus sed, aliquet mauris. Ut nibh nibh, elementum a nunc sed, ultricies semper urna. Proin sodales lorem sit amet lacinia volutpat. Integer auctor, leo vitae auctor dapibus, odio lectus scelerisque erat, vitae dictum sem leo id neque. Praesent gravida egestas metus, et iaculis sem pretium id." }
    ];
    

@Injectable({
    providedIn: 'root',
})
export class ChoiceService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Choice[]>{
        let choices = CHOICES;
        return Observable.of(choices);
    }

    search(term: string): Observable<Choice[]>{
        console.log(term);
        let choices = CHOICES;
        let selected = choices.filter(x=>x.label.indexOf(term)>-1);
        console.log(selected);
        return Observable.of(selected);
        

    }
}