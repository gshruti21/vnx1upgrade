import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { stringify } from '@angular/core/src/render3/util';
import {Model} from './app.model';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'summary-data',
  templateUrl: './app.summarydata.html',
})
export class SummaryDataComponent implements OnChanges{
  @Input() overviewsummary:Model[];
  @Input() hardwaresummary:Model[];
  @Input() serviceSummary:Model[];
  data:Model[];
  solutionname:Model;
  basemodel:Model;
  configType:Model;
  ngOnChanges(){
    this.solutionname=this.overviewsummary.find(item=> item.id==='solutionName');
    this.configType=this.overviewsummary.find(item=> item.id==='configurationType');
    this.basemodel=this.overviewsummary.find(item=> item.id==='baseModel');
    console.log("at end"+this.serviceSummary.length);
  }
  

}