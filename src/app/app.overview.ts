import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from './app.model';
import { MatRadioChange } from '@angular/material';

@Injectable({
    providedIn:'root'
})
@Component({
  selector: 'overview-data',
  templateUrl: './app.overview.html',
})
export class OverviewComponent implements OnInit{
    data:Array<Model>;
    tempModel:Model;
    viewIBData: boolean=false;
    solutionname: string=this.solutionname;
    installCountry: string=this.installCountry;
    configurationType: string;
    unusedInstalledBlock :string =this.unusedInstalledBlock;
    countries: Country[];
    baseModel:string=this.baseModel;
    platformConfig:string=this.platformConfig;
    rack:string=this.rack;
    serialNumber:string=this.serialNumber;
    exceptionReason:string=this.exceptionReason;
    upgradeDC:boolean=this.upgradeDC;
    quoteTAADrives:boolean=this.quoteTAADrives;
    disablePlatformConfig:boolean=false;
    disabledRackSelection:boolean=false;
    error:string[];
    disabled:boolean=false;
    constructor(private http: HttpClient) {}
    handleButton():void  {
      this.viewIBData=true;
    }
    ngOnInit():void{
        this.getCountries().subscribe(countries => this.countries = countries);
    }
    getCountries(): Observable<Country[]>{
        return this.http.get<Country[]>('./assets/country.json');
    }
    onCheck(freezeConfig){
        console.log('checked or unchecked'+freezeConfig);
        if(freezeConfig){
            this.disabled=true;
            this.disablePlatformConfig=true;
            this.showOtherTabs.emit(true);
        }
        else{
            this.disabled=false;
            this.disablePlatformConfig=false;
            this.showOtherTabs.emit(false);
        }
        this.onChanges();
        
    }
    @Output() overviewSummary:EventEmitter<Model[]>=new EventEmitter<Model[]>();
    @Output() showOtherTabs:EventEmitter<boolean>=new EventEmitter<boolean>();
    onChangeConfig(){
        if(this.baseModel=="VNX5100"){
            this.platformConfig="Block Only";
            this.disablePlatformConfig=true;
            this.rack="Customer Supplied Rack";
        }
        else if(this.baseModel=="VNX5300"){
            this.rack="EMC Dense Rack";
            this.disablePlatformConfig=false;
        }
        else{
            this.disablePlatformConfig=false;
        }
    }
    onChanges(){
        console.log('call overview change');
        this.data=new Array<Model>();
            this.tempModel=new Model();
            this.tempModel.id="solutionName";
            this.tempModel.value=this.solutionname;
            this.data.push(this.tempModel);
            if(this.installCountry){
                this.tempModel=new Model();
                this.tempModel.id="installCountry";
                this.tempModel.value=this.installCountry;
                this.data.push(this.tempModel);
            }           
            if(this.configurationType){
            this.tempModel=new Model();
            this.tempModel.id="configurationType";
            this.tempModel.value=this.configurationType;
            this.data.push(this.tempModel);   
            }
            if(this.baseModel){   
            this.tempModel=new Model();
            this.tempModel.id="baseModel";
            this.tempModel.value=this.baseModel;
            this.data.push(this.tempModel);
            }
            if(this.platformConfig){
            this.tempModel=new Model();
            this.tempModel.id="platformConfiguration";
            this.tempModel.value=this.platformConfig;
            this.data.push(this.tempModel);
            }
            if(this.rack){
            this.tempModel=new Model();
            this.tempModel.id="rackSelection";
            this.tempModel.value=this.rack;
            this.data.push(this.tempModel);
            }
            if(this.unusedInstalledBlock){
            this.tempModel=new Model();
            this.tempModel.id="unusedInstalledBlock";
            this.tempModel.value=this.unusedInstalledBlock;
            this.data.push(this.tempModel);
            }
            if(this.serialNumber){
            this.tempModel=new Model();
            this.tempModel.id="serialNumber";
            this.tempModel.value=this.serialNumber;
            this.data.push(this.tempModel);
            }
            if(this.exceptionReason){
            this.tempModel=new Model();
            this.tempModel.id="exceptionReason";
            this.tempModel.value=this.exceptionReason;
            this.data.push(this.tempModel);
            }
            console.log('onchanges called' + this.data.length);
            this.overviewSummary.emit(this.data);
    }
    
}
export interface Country {
  value: string;
}

