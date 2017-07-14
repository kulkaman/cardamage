import { Component, Input } from '@angular/core';
/*import { WebCamComponent } from 'ng2-webcam';*/
import { WebCamComponent } from 'ack-angular-webcam';
import {PostsService} from './services/posts.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-root',
 /* templateUrl: './app.component.html',*/
  template:  
      `
      <div class="jumbotron">
    <div class="container">
   <div class="imgwrapper">
    <img src="AvisBudgetLogo.jpg" class="img-responsive">
</div>

<h3 class="text-center">Report Car Accident</h3>
<div *ngIf="blankFields" class="alert alert-danger box-msg" role="alert">
        <strong>Please provide valid RA Number, Last Name and Brand</strong>
</div>
<div *ngIf="lookupFailed" class="alert alert-warning box-msg" role="alert">
        <strong>Unable to find rental record for the details provide.</strong> Please validate the RA Number, Last Name and Brand
</div>
<div *ngIf="validRaNoClaim" class="alert alert-warning box-msg" role="alert">
        <strong>No claim is created for given rental details !</strong>
</div>

<table class="table">
    <tbody>
        <tr>
            <td bgcolor="red" width="30%"><font color="white">Rental Agreement Number</font></td>
            <td width="70%"><div class="input-group">
                    <input type="text" class="form-control"
                        placeholder="Enter RA Number" aria-describedby="basic-addon1" [(ngModel)]="raNumber1" name = "raNumber1">
                </div></td>
        </tr>
        
        <tr>
            <td bgcolor="red" width="30%"><font color = "white">Last Name</font></td>
            <td width="70%"><div class="input-group">
                    <input type="text" class="form-control"
                        placeholder="Enter Last Name" aria-describedby="basic-addon1" [(ngModel)]="lastName1" name = "lastName">
                </div></td>
        </tr>
        
        <tr>
            <td bgcolor="red" width="30%"><font color = "white">Brand</font></td>
            <td width="70%">
               <div class="form-group btn dropdown-toggle"  >
  <select class="form-control" id="sel1" [(ngModel)]="brand" name = "brand">
    <option>Avis</option>
    <option>Budget</option>
    <option>Payless</option>
    <option>Zipcar</option>
  </select>
</div> 
            </td>
        </tr>
        
    </tbody>
</table>

<ul>
    <div class="text-center">
        <button id="newEventbutton" name="newEventbutton"
            class="btn btn-default" (click)="checkClaim('new')">New Incident</button>
        <button id="retreiveClaimButton" name="retreiveClaimButton" (click)="checkClaim('about')"
            class="btn btn-default" color= #ffffff >Existing Claim
            Details</button>
    </div>
</ul>
</div></div>

<router-outlet></router-outlet>
      `,
/*  styleUrls: ['./app.component.css']*/
      styleUrls: ['./css/bootstrap.min.css', 
                  './css/jumbotron.css', 
                  './css/bootstrap.css', 
                  './css/bootstrap-theme.css', 
                  './css/bootstrap-theme.min.css']
 ,
  providers: [PostsService]
})
export class AppComponent {
    //postsService: any;
  title = 'app works!';
  @Input() raNumber1: string ;
  @Input() lastName1: string;
  @Input() brand: string;
//  postsBasic: Post[];
  
  public blankFields;
  public lookupFailed;
  public lookupValue;
  public validRaNoClaim = false;
  private postsService: PostsService ;
  private router : Router;
 // private posts:Post[];
  
  private _posts: Post[];
  

  public get posts(): Post[] {        
          return this._posts;     
      }       
      public set posts(postObject: Post[]) {      
          this._posts = postObject;       
      } 
  
  constructor(postsService: PostsService, router:Router){
      this.postsService = postsService;
      this.router = router ;
  }
  

/*  constructor( private postsService: PostsService ) {
      //console.log( this.raNumber1 + " " + this.lastName1 + "posts print " + this.posts.raNumber1 );


      this.postsService.getPosts(this.raNumber1).subscribe( posts => {
          this.postsBasic = posts;

      }


      );
  }
*/  

 public checkClaim(path:string) {
     if (this.raNumber1 == null|| this.lastName1 == null || this.brand == null)
         {
         this.blankFields = true;
         }else{
             this.postsService.raNumberInput = this.raNumber1;
             this.postsService.brandInput = this.brand;
             this.postsService.lastNameInput = this.lastName1 ;
             this.blankFields = false;
             var raNumber = this.raNumber1.toUpperCase();
             if (!(this.raNumber1.charAt(0)=='U'))
                     raNumber = "U"+this.raNumber1.toUpperCase();
                     
             
             this.postsService.getPosts(raNumber, this.lastName1.toUpperCase(), this.brand).subscribe(posts => {
                 this.posts = posts;
                 this.postsService.posts = this.posts;
                 console.log("IN check claim" + this.posts[0].rentalAgreementNumber);
                 if (path=='new' || this.posts[0].claimNumber != null){
                     this.router.navigate([path]);
                 }else{
                     this.validRaNoClaim = true;
                     this.posts[0].firstName = "JOHN";
                     this.posts[0].lastName = "LEWIS"
                     this.router.navigate([path]);

                 }
                   
             }
             , err => {this.lookupFailed = true;
                     this.router.navigate([path]);}

             );
             
             
             /*
             if (this.posts.length == 0)
                 {
                 this.blankFields = true;
                 }*/
         }
    
      
      
          
      
     /* this.postsService.getPosts(this.posts.raNumber1).subscribe( posts => {
          this.postsBasic = posts;
  }*/
  
  
  
  
/* constructor(private postsService: PostsService){

      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      });
    }*/
}
}



export  interface Post{
      mvaNumber: string,            
  rentalAgreementNumber: string;         
  coLocationDesc: string;       
  vin: string;           
  modelYear: string;      
  makeModelDesc: string;      
  carClass: string;       
  lastName: string;       
  firstName: string;      
  brandInd: string;       
  claimNumber: string;        
  dateOfIncident: string;     
  city: string;       
  state: string;      
  zipCode: string;        
  policeRptNumber: string;        
  insuranceName: string;      
  insuranceAddress: string;       
  renterOperatorInd: string;      
  operatorName: string;       
  operatorDob: string;        
  operatorContact: string;        
  operatorAddress: string;        
  operatorzipCode: string;        
  operatorLicenseNumber: string;      
  damageDescription: string;      
  policyNumber: string;       
  damageSeverity: string;     
  propertyDamageInd: string;      
  propertyName: string; 
  propertyAddress: string;      
  propertyPhone: string;      
  propertyModelYear: string;      
  propertyDamageDescription: string;      
  carDrivableInd: string;     
  propertyLicenseInd: string;
  claimStatus: string;
  vehicleMakeModel: string;
  coDate: string;
  ciDate: string;
    incidentCity: string;
  }
