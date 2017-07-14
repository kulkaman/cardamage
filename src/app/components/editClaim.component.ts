import { Component } from '@angular/core';
import { AppComponent, Post } from '../app.component';      
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/jumbotron.css', '../css/bootstrap.css', '../css/bootstrap-theme.css', '../css/bootstrap-theme.min.css']
})
export class editClaimComponent  {
    header_title: string;
    renterName: string;
    raNumber: string;
    mvaNumber: string;
    claimNumber: string;
    claimStatus: string;
    paymentDue: string;
    paymentReceived: string;

    incidentCity: string;
    incidentState: string;
    incidentZipCode: string;
    incidentPoliceRpt: string;
    insuranceName: string;
    insuranceAddress: string;
    
    damageDescription: string;
    policyNumber: string;
    damageSeverity: string;


private _posts: Post[];

public get posts(): Post[] {
        return this._posts;
      }

      public set posts(postObject: Post[]) {
        this._posts = postObject;
      }


constructor(postsService: PostsService) {
    console.log("Service :" + postsService);
    this.posts = postsService.posts;

    if (this.posts) {
        
      this.renterName = this.posts[0].firstName + " " + this.posts[0].lastName;
      this.raNumber = this.posts[0].rentalAgreementNumber;
      this.mvaNumber = this.posts[0].mvaNumber;
      this.claimNumber = this.posts[0].claimNumber;
      this.incidentCity = this.posts[0].city;
      this.incidentState = this.posts[0].state;
      this.incidentZipCode = this.posts[0].zipCode
      this.incidentPoliceRpt = this.posts[0].policeRptNumber;
      this.insuranceName = this.posts[0].insuranceName;
      this.insuranceAddress = this.posts[0].insuranceAddress ;
      this.damageDescription = this.posts[0].damageDescription;
      this.policyNumber = this.posts[0].policeRptNumber;
      this.damageSeverity = this.posts[0].damageSeverity;
      this.claimStatus = this.posts[0].claimStatus;
    }
    /*
    this.header_title = "This is an about page!"
    this.renterName = "Mandar Kulkarni"
    this.raNumber = "U123456789"
    this.mvaNumber = "12345678"
    this.claimNumber = "179123456"
    this.claimStatus = "Open"
    this.paymentDue  = "150.00"
    this.paymentReceived = "0.00"
    this.incidentCity = "Boston"
    this.incidentState = "MA"
    this.incidentZipCode = "07054"
    this.incidentPoliceRpt = "A12345"
    this.insuranceName = "GEICO INSURANCE"
    this.insuranceAddress = "6 SYLVAN WAY"
    this.damageDescription = "Accidently hit left side curb on I-95"
    this.policyNumber = "L1233H78900"
    this.damageSeverity = "Light"
    */
  }

ngAfterViewInit() {
    console.log("Child :" + this.posts);
  }
    
 }
