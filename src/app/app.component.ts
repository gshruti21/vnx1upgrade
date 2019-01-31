import { Component, OnChanges, OnInit } from '@angular/core';
import {FormGroup}  from '@angular/forms';
import {Model} from './app.model';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  ConfigurationForm: FormGroup = new FormGroup({
    
  });
  overviewsummarydata:Model[];
  hardwaresummarydata:Model[];
  compiledSummary:Model[];
  serviceSummarydata:Model[];
  showData:boolean=false;
  getOverviewSummary(overview: Model[]):void{
    this.overviewsummarydata=overview;
  }
  getHardwareSummary(hardware: Model[]):void{
    this.hardwaresummarydata=hardware;
  }
  getServiceData(servicedata: Model[]):void{
    this.serviceSummarydata=servicedata;
    console.log("getservicedatacompo"+this.serviceSummarydata.length);
  }
  getTabDisplay(showOtherTabs: boolean):void{
    this.showData=showOtherTabs;
  }
  onLinkClick(event: MatTabChangeEvent){
      console.log("summary updated");
      this.compiledSummary=new Array<Model>();
      this.compiledSummary=this.overviewsummarydata;
      this.compiledSummary.concat(this.hardwaresummarydata);
      this.compiledSummary.concat(this.serviceSummarydata);
  }

}