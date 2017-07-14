import { Component, ViewChild } from '@angular/core';
import {PostsService} from '../services/posts.service';
/*import { WebCamComponent } from 'ng2-webcam';*/
import { WebCamComponent } from 'ack-angular-webcam';
import { Http, Request } from '@angular/http';
/*import {jQuery} from "../../../node_modules/jquery/dist/jquery.js'";
import  "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";*/
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { UiSwitchModule } from 'angular2-ui-switch'
declare var Webcam: any;

import { AppComponent, Post } from '../app.component';   


@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    //template: `<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>`,
    styleUrls: [ '../css/bootstrap.min.css',
                '../css/jumbotron.css', 
                '../css/bootstrap.css', 
                '../css/bootstrap-theme.css', 
                '../css/bootstrap-theme.min.css']

})


export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    operatorNotRenter: boolean ;
    successClaim: boolean;
    failureClaim: boolean;
    incidentCity: string;
    //posts: Post[];
    incidentState: string;
    
    incidentZipCode: string;
    incidentPoliceRpt: string;
    insuranceName: string;
    insuranceAddress: string;
    operatorName: string;
    operatorContact: string;
    operatorEmail: string;
    operatorAddress: string;
    operatorZipCode: string;
    operatorLicenseeNumber: string;
brandInd: string;

    damageDescription: string;
    policyNumber: string;
    damageSeverity: string;
    partyName: string;
    partyAddress: string;
    partyContact: string;
    partyDamageDescriptioin: string;
    whatTime: string;

    drivableCarInd: string;
    partyLicensePlate: string;

rentalAgreementNumber: string;
zipCode: string;
policeReportNumber: string;
operatorLicenseNumber: string;
propertyName: string;
propertyAddress: string;
propertyPhone: string;
propertyDamageDescription: string;
propertyLicensePlate: string;

firstName: string;
lastName: string;
makeModelDesc: string;
coDate: string;
ciDate: string;
private postsService: PostsService ;
private _posts: Post[];
private _newClaim: Claim;

claimNumber: string;



public get posts(): Post[] {
        return this._posts;
      }

      public set posts(postObject: Post[]) {
        this._posts = postObject;
      }



constructor(postsService: PostsService) {
    console.log("Service in user component:" + postsService);
    this.posts = postsService.posts;
    this.postsService = postsService;
    if (this.posts) {
        console.log("Inside post service");
      
      this.firstName = this.posts[0].firstName;
      this.lastName = this.posts[0].lastName;
      this.makeModelDesc = this.posts[0].makeModelDesc;
      this.coDate = this.posts[0].coDate;
      this.ciDate = this.posts[0].ciDate;
      
      //this.renterFirstName = this.posts[0].firstName;
      //this.renterLastName = this.posts[0].lastName;
      this.rentalAgreementNumber = this.posts[0].rentalAgreementNumber;
      console.log("First request" + this.rentalAgreementNumber);
      this.brandInd = this.posts[0].brandInd;
      
      
     
    }
    
    if (this.coDate == null){
        
        this.makeModelDesc = "HONDA CIVIC 4DR";
        this.coDate = "2017-07-01";
        this.ciDate = "2017-07-08";
        this.firstName = "JOHN";
        this.rentalAgreementNumber = this.postsService.raNumberInput;
        this.lastName = this.postsService.lastNameInput;
    }
    
    this.whatTime =new Date().toString();
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


    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    
    private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
          };



    
    ngAfterViewInit() {
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#camera1');
        Webcam.attach('#camera2');
        Webcam.attach('#camera3');
        Webcam.attach('#camera4');
        console.log("Above post service" + this.posts);
        
        


    }

/*constructor(public http:Http){}*/
    take_snapshot(camerID) {
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
          //  Webcam.off("off");
        });
    }
/*genBase64(){
    this.webcam.getBase64()
    .then( base=>this.base64=base)
    .catch( e=>console.error(e) )
  }

//get HTML5 FormData object and pretend to post to server 
genPostData(){
  this.webcam.captureAsFormData({fileName:'file.jpg'})
  .then( formData=>this.postFormData(formData) )
  .catch( e=>console.error(e) )
}

//a pretend process that would post the webcam photo taken 
postFormData(formData){
  const config = {
    method:"post",
    url:"http://www.aviorsciences.com/",
    body: formData
  }

  const request = new Request(config)

  return this.http.request( request )
}

ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }


    constructor( private postsService: PostsService ) {
        this.name = 'John Doe';
        this.email = 'john@gmail.com',
            this.address = {
                street: '12 Main st',
                city: 'Boston',
                state: 'MA'
            }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        this.operatorNotRenter = false;
        


/*        this.postsService.getPosts().subscribe( posts => {
            this.posts = posts;

        }


        );*/
    

    
    

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }
    
    toggleRenter() {
        this.operatorNotRenter = !this.operatorNotRenter;
    }

    

    
    createClaim() {
        
        this.successClaim = true;
        
        console.log( this.incidentCity + " " + this.incidentState);
        this._newClaim = new Claim();
        this._newClaim.incidentCity  = this.incidentCity ;
        //this._newClaim.damageDescription = this.damageDescription;
        this._newClaim.rentalAgreementNumber = this.rentalAgreementNumber;
        this._newClaim.zipCode = this.zipCode;
        this._newClaim.policeReportNumber = this.policeReportNumber;
        this._newClaim.insuranceName = this.insuranceName;
        this._newClaim.insuranceAddress = this.insuranceAddress;
        this._newClaim.operatorName = this.operatorName;
        this._newClaim.operatorContact = this.operatorContact;
        this._newClaim.operatorEmail = this.operatorEmail;
        this._newClaim.operatorAddress = this.operatorAddress;
        this._newClaim.operatorZipCode = this.operatorZipCode;
        this._newClaim.operatorLicenseNumber = this.operatorLicenseNumber;
        this._newClaim.propertyName = this.propertyName;
        this._newClaim.propertyAddress = this.propertyAddress;
        this._newClaim.propertyPhone = this.propertyPhone;
       // this._newClaim.propertyDamageDescription = this.propertyDamageDescription;
        this._newClaim.drivableCarInd = this.drivableCarInd;
        this._newClaim.propertyLicensePlate  = this.propertyLicensePlate;
        this._newClaim.policyNumber  = this.policyNumber;
        
/*        this._newClaim.firstName  = this.firstName;
        this._newClaim.lastName  = this.lastName;
        this._newClaim.brandInd  = this.brandInd;*/
        
        //this.postsService.getClaimNumberPosts(this._newClaim);
        
        this.postsService.getClaimNumberPosts(this._newClaim).subscribe(  
            function(response) { 
                
                console.log("regular response" + response);
                response => response.json();
                this.successClaim = true;
                this.claimNumber = response;
                console.log("regular response with Claim: " + response + "successStatus "+this.successClaim);
                },
            function(error) { this.failureClaim = true;console.log("Error happened" + error)},
            function() { console.log("the subscription is completed")}
            
              
        
        );
    }
    addHobby( hobby: any ) {
        this.hobbies.push( hobby );
    }

    deleteHobby( i: any ) {
        this.hobbies.splice( i, 1 );
    }
}


interface address {
    street: string;
    city: string;
    state: string;
}


export class Claim {
    firstName: string;
    lastName: string;
    rentalAgreementNumber: string;
    damageDescription: string;
    incidentCity: string;
    incidentState: string;
    zipCode: string;
policeReportNumber: string;
insuranceName: string;
insuranceAddress: string;
operatorName: string;
operatorContact: string;
operatorEmail: string;
operatorAddress: string;
operatorZipCode: string;
operatorLicenseNumber: string;
propertyName: string;
propertyAddress: string;
propertyPhone: string;
propertyDamageDescription: string;
drivableCarInd: string;
propertyLicensePlate: string;
brandInd: string;
policyNumber: string;
claimNumber: string;
}
/*interface Post {
        id: number;
        title: string;
        body: string;
    firstName: string;
    lastName: string;
}*/




    
    

