import {Injectable} from '@angular/core';
import {Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { URLSearchParams, RequestOptions, Headers } from '@angular/http';
import {AppComponent, Post} from '../app.component';
import {  Claim} from '../components/user.component';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class PostsService {
    
    public raNumberInput:string;
    public lastNameInput:string;
    public brandInput:string;

    constructor(private http: Http){
        console.log('PostsService Initialized...');
        /*this.raNumber1  = ""; */
    }
   
    
    private _posts: Post[];

    public get posts(): Post[] {
        return this._posts;
    }
    public set posts(postObject: Post[]) {
        this._posts = postObject;
    }
    
    getPosts(raNumber, lastName, brand){
        let data = new URLSearchParams();
        const abc = 'http://a4a2cdab.ngrok.io/SpringMVC/rest/radetails/'+ raNumber+ '/'+ lastName + '/' + brand + '/';
        //const abc = 'https://94e4c87d.ngrok.io/SpringMVC/rest/radetails/'+ raNumber+ '/'+ lastName + '/' + brand + '/';
        /*return this.http.get('https://jsonplaceholder.typicode.com/posts')*/
       /* return this.http.get('http://localhost:8080/SpringMVC/rest/radetails/U568395203/')*/
        
        
        console.log("Final URL" + abc); //
        return this.http.get(abc)
            .map(res => res.json());
    }
    
    
    getClaimNumberPosts(newClaim: Claim){
        console.log("Called from Client" + newClaim.incidentCity + "brand is "+ newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc "+ newClaim.damageDescription);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('http://a4a2cdab.ngrok.io/SpringMVC/rest/radetails/', newClaim, options)
        //return this.http.post('https://94e4c87d.ngrok.io/SpringMVC/rest/radetails/', newClaim, options)
        .map(res => res.json());
        //.catch(this.handleErrorObservable);
       // .subscribe();


    }
    
    private extractData(res: Response) {
        let body = res.json();
        console.log ("Response :" + body);
        return body;
     }
    
          private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
          }

}




  
