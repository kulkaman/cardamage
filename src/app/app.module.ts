import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import { WebCamComponent } from 'ng2-webcam';*/
import { WebCamComponent } from 'ack-angular-webcam';
import { SignaturePadModule } from 'angular2-signaturepad';
//import { UiSwitchModule } from 'angular2-ui-switch';
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { AppComponent } from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from '././components/about.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    WebCamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SignaturePadModule ,
    UiSwitchModule, 
    NguiDatetimePickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
