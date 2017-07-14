import { Component, ViewChild } from '@angular/core';
import { AppComponent, Post } from '../app.component';      
import { PostsService } from '../services/posts.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
declare var Webcam: any;

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/jumbotron.css', '../css/bootstrap.css', '../css/bootstrap-theme.css', '../css/bootstrap-theme.min.css']
})
export class AboutComponent  {
    header_title: string;
    renterName: string;
    raNumber: string;
    mvaNumber: string;
    claimNumber: string;
    claimStatus: string;
    paymentDue: string;
    paymentReceived: string;
    readOnlyMode: boolean = true;
    additonalPhotos: boolean;
    additonalPhotos2: boolean;
    addSignatureInd: boolean;
    editMode: boolean;
    updateClaimSuccess: boolean;
    incidentCity: string;
    incidentState: string;
    incidentZipCode: string;
    incidentPoliceRpt: string;
    insuranceName: string;
    insuranceAddress: string;
    
    damageDescription: string;
    policyNumber: string;
    damageSeverity: string;

showHobbies: boolean;
operatorNotRenter: boolean;



private _posts: Post[];

public get posts(): Post[] {
        return this._posts;
      }

      public set posts(postObject: Post[]) {
        this._posts = postObject;
      }


constructor(postsService: PostsService) {
    console.log("Service :" + postsService);
    console.log("before "+ this.readOnlyMode);
    this.posts = postsService.posts;
    Webcam.set({
        width: 100,
        height: 100,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    if (this.posts) {
        
      this.renterName = this.posts[0].firstName + " " + this.posts[0].lastName;
      this.raNumber = this.posts[0].rentalAgreementNumber;
      this.mvaNumber = this.posts[0].mvaNumber;
      this.claimNumber = this.posts[0].claimNumber;
      this.incidentCity = this.posts[0].incidentCity;
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


@ViewChild(SignaturePad) signaturePad: SignaturePad;

private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
        'minWidth': 5,
        'canvasWidth': 100,
        'canvasHeight': 30
      };

ngAfterViewInit() {
    console.log("Child :" + this.posts);
   
    
  }

toggleHobbies() {
    this.showHobbies = !this.showHobbies;
}

toggleRenter() {
    this.operatorNotRenter = !this.operatorNotRenter;
}

addPhotos(){
    this.additonalPhotos = true;
    Webcam.attach('#camera5');
   
}

addPhotos2(){
    this.additonalPhotos2 = true;
    Webcam.attach('#camera6');
}

take_snapshot(camerID) {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById(camerID).innerHTML =
            '<img src="' + data_uri + '"/>';
      //  Webcam.off("off");
    });
}


editClaim(){
    console.log("Edit Claim called");
    this.readOnlyMode = false;
    this.editMode = true;
    console.log("Edit mode value " + this.readOnlyMode);
}
    
addSignature(){
    this.addSignatureInd = true;
}

updateClaim(){
    this.updateClaimSuccess = true;
}

 }
