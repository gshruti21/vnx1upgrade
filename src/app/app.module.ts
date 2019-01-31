import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule, MatFormFieldModule,MatInputModule, MatRippleModule, MatSelectModule, MatCheckboxModule, MatRadioButton, MatTooltipModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {HardwareComponent} from './app.hardware';
import {SoftwareComponent} from './app.softwarecomponent';
import {ServiceComponent} from './app.servicecomponent';
import {StorageComponent} from './app.storagecomponent'
import {SummaryDataComponent} from './app.summarydata';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OverviewComponent} from './app.overview';
@NgModule({
  declarations: [
    AppComponent,StorageComponent,
    HardwareComponent,SummaryDataComponent,SoftwareComponent,ServiceComponent,OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,FormsModule,ReactiveFormsModule,
    MatSelectModule,HttpClientModule,MatCheckboxModule,
    MatButtonModule,MatFormFieldModule,MatRadioModule, 
    MatInputModule,MatTabsModule,MatListModule,MatDividerModule,MatTooltipModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
