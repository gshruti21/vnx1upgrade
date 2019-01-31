import { Component, OnInit, Injectable, Output, EventEmitter,Input } from '@angular/core';
import {Model} from './app.model'
@Component({
  selector: 'hardware-data',
  templateUrl: './app.hardware.html',
})
export class HardwareComponent{
  @Input() showOtherTabData;
  storagedatasummary:Model[];
  disableAddDataMover:boolean=false;
  getStorageData(storagedata: Model[]):void{
    this.storagedatasummary=storagedata;
    this.onChanges();
  }
  data:Array<Model>;
  tempModel:Model;
  controlStationAdded:boolean=this.controlStationAdded;
  dataMoversNoInstalled:number=this.dataMoversNoInstalled;
  dataMoversNoAdded:number=this.dataMoversNoAdded;
  primaryDataMoversNoInstalled:number=this.primaryDataMoversNoInstalled;
  primaryDataMoversNoAdded:number=this.primaryDataMoversNoAdded;
  emptyDataMoversNo:number=this.emptyDataMoversNo;
  ainstalled:number=0;
  aadded:number=0;
  binstalled:number=0;
  badded:number=0;
  cinstalled:number=0;
  cadded:number=0;
  dinstalled:number=0;
  dadded:number=0;
  einstalled:number=0;
  eadded:number=0;
  finstalled:number=0;
  fadded:number=0;
  ginstalled:number=0;
  gadded:number=0;
  valid:boolean=true;
  rainstalled:number=0;
  raadded:number=0;
  rbinstalled:number=0;
  rbadded:number=0;
  rcinstalled:number=0;
  rcadded:number=0;
  rdinstalled:number=0;
  rdadded:number=0;
  reinstalled:number=0;
  readded:number=0;
  rfinstalled:number=0;
  rfadded:number=0;
  rginstalled:number=0;
  rgadded:number=0;
  rvalid:boolean=true;
  ltotal:number=0;
  rtotal:number=0;
  FastCacheDriveCapacity=this.FastCacheDriveCapacity;
  driveinstalled:number=0;
  driveadded:number=0;
  sparesinstalled:number=0;
  sparesadded:number=0;
  maintenanceType:string=this.maintenanceType;
  maintenanceUpgrade:string=this.maintenanceUpgrade;
  maintenanceSold:number=this.maintenanceSold;
  maintenanceConcession:number=this.maintenanceConcession;
  onAddingDataMover(){
    console.log("onchangedata mover called" +this.dataMoversNoInstalled);
   if(this.dataMoversNoInstalled==3){
    this.disableAddDataMover=true;
    console.log('max datamover'+this.disableAddDataMover);
    this.dataMoversNoAdded=0;
    this.primaryDataMoversNoAdded=0;
   }
   else{
    this.disableAddDataMover=false;
   }
  }
  validate():void{
    this.valid=true;
    this.ltotal=this.ainstalled + this.aadded + this.binstalled + this.badded + this.cinstalled +this.cadded + this.dinstalled+this.dadded+this.einstalled+this.eadded+this.finstalled+this.fadded+this.ginstalled+this.gadded;
    if(this.ainstalled + this.aadded>2) {
      this.valid= false;
    }
    if(this.binstalled + this.badded>2) {
      this.valid= false;
    }
    if(this.cinstalled + this.cadded>2){
      this.valid= false;
    } 
    if(this.dinstalled + this.dadded>2) {
      this.valid= false;
    }
    if(this.einstalled + this.eadded>2){
      this.valid= false;
    }
    if(this.finstalled + this.fadded>2){
      this.valid= false;
    } 
    if(this.ginstalled + this.gadded>2) {
      this.valid= false;
    }
    if(this.ltotal>3){
      this.valid= false;
    }

  }
  rvalidate():void{
    this.rvalid=true;
    this.rtotal=this.rainstalled + this.raadded + this.rbinstalled + this.rbadded + this.rcinstalled +this.rcadded + this.rdinstalled+this.rdadded+this.reinstalled+this.readded+this.rfinstalled+this.rfadded+this.rginstalled+this.rgadded;
    if(this.rainstalled + this.raadded>2) {
      this.rvalid= false;
    }
    if(this.rbinstalled + this.rbadded>2) {
      this.rvalid= false;
    }
    if(this.rcinstalled + this.rcadded>2){
      this.rvalid= false;
    } 
    if(this.rdinstalled + this.rdadded>2) {
      this.rvalid= false;
    }
    if(this.reinstalled + this.readded>2){
      this.rvalid= false;
    }
    if(this.rfinstalled + this.rfadded>2){
      this.rvalid= false;
    } 
    if(this.rginstalled + this.rgadded>2) {
      this.rvalid= false;
    }
    if(this.rtotal>2){
      this.rvalid= false;
    }
  }
  @Output() hardwareSummary:EventEmitter<Model[]>=new EventEmitter<Model[]>();
  onChanges(){
    this.data=new Array<Model>();
    if(this.dataMoversNoInstalled>0){
      this.tempModel=new Model();
        this.tempModel.id="dataMoversNoInstalled";
        this.tempModel.value=this.dataMoversNoInstalled.toString();
        this.data.push(this.tempModel);
    }
    if(this.dataMoversNoAdded>0){
        this.tempModel=new Model();
        this.tempModel.id="dataMoversNoAdded";
        this.tempModel.value=this.dataMoversNoAdded.toString();
        this.data.push(this.tempModel);
    }
    if(this.primaryDataMoversNoInstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="primaryDataMoversNoInstalled";
        this.tempModel.value=this.primaryDataMoversNoInstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.primaryDataMoversNoAdded>0){
        this.tempModel=new Model();
        this.tempModel.id="primaryDataMoversNoAdded";
        this.tempModel.value=this.primaryDataMoversNoAdded.toString();
        this.data.push(this.tempModel);
      }
      if(this.emptyDataMoversNo>0){
        this.tempModel=new Model();
        this.tempModel.id="emptyDataMoversNo";
        this.tempModel.value=this.emptyDataMoversNo.toString();
        this.data.push(this.tempModel);
      }
      if(this.ainstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="ainstalled";
        this.tempModel.value=this.ainstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.aadded>0){
        this.tempModel=new Model();
        this.tempModel.id="aadded";
        this.tempModel.value=this.aadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.binstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="binstalled";
        this.tempModel.value=this.binstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.badded>0){
        this.tempModel=new Model();
        this.tempModel.id="badded";
        this.tempModel.value=this.badded.toString();
        this.data.push(this.tempModel);
      }
      if(this.cinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="cinstalled";
        this.tempModel.value=this.cinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.cadded>0){
        this.tempModel=new Model();
        this.tempModel.id="cadded";
        this.tempModel.value=this.cadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.dinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="dinstalled";
        this.tempModel.value=this.dinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.dadded>0){
        this.tempModel=new Model();
        this.tempModel.id="dadded";
        this.tempModel.value=this.dadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.einstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="einstalled";
        this.tempModel.value=this.einstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.eadded>0){
        this.tempModel=new Model();
        this.tempModel.id="eadded";
        this.tempModel.value=this.eadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.finstalled>0){        
        this.tempModel=new Model();
        this.tempModel.id="finstalled";
        this.tempModel.value=this.finstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.fadded>0){  
        this.tempModel=new Model();
        this.tempModel.id="fadded";
        this.tempModel.value=this.fadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.ginstalled>0){  
        this.tempModel=new Model();
        this.tempModel.id="ginstalled";
        this.tempModel.value=this.ginstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.gadded>0){  
        this.tempModel=new Model();
        this.tempModel.id="gadded";
        this.tempModel.value=this.gadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rainstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rainstalled";
        this.tempModel.value=this.rainstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.raadded>0){
        this.tempModel=new Model();
        this.tempModel.id="raadded";
        this.tempModel.value=this.raadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rbinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rbinstalled";
        this.tempModel.value=this.rbinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.rbadded>0){
        this.tempModel=new Model();
        this.tempModel.id="rbadded";
        this.tempModel.value=this.rbadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rcinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rcinstalled";
        this.tempModel.value=this.rcinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.rcadded>0){
        this.tempModel=new Model();
        this.tempModel.id="rcadded";
        this.tempModel.value=this.rcadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rdinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rdinstalled";
        this.tempModel.value=this.rdinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.rdadded>0){
        this.tempModel=new Model();
        this.tempModel.id="rdadded";
        this.tempModel.value=this.rdadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.reinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="reinstalled";
        this.tempModel.value=this.reinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.readded>0){
        this.tempModel=new Model();
        this.tempModel.id="readded";
        this.tempModel.value=this.readded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rfinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rfinstalled";
        this.tempModel.value=this.rfinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.rfadded>0){
        this.tempModel=new Model();
        this.tempModel.id="rfadded";
        this.tempModel.value=this.rfadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.rginstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="rginstalled";
        this.tempModel.value=this.rginstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.rgadded>0){
        this.tempModel=new Model();
        this.tempModel.id="rgadded";
        this.tempModel.value=this.rgadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.driveinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="driveinstalled";
        this.tempModel.value=this.driveinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.driveadded>0){
        this.tempModel=new Model();
        this.tempModel.id="driveadded";
        this.tempModel.value=this.driveadded.toString();
        this.data.push(this.tempModel);
      }
      if(this.sparesinstalled>0){
        this.tempModel=new Model();
        this.tempModel.id="sparesinstalled";
        this.tempModel.value=this.sparesinstalled.toString();
        this.data.push(this.tempModel);
      }
      if(this.sparesadded>0){
        this.tempModel=new Model();
        this.tempModel.id="sparesadded";
        this.tempModel.value=this.sparesadded.toString();
        this.data.push(this.tempModel);
      }      
      console.log("log"+this.maintenanceUpgrade);
      if(this.maintenanceUpgrade){
        this.tempModel=new Model();
        this.tempModel.id="maintenancetotal";
        this.tempModel.value=(this.maintenanceSold+this.maintenanceConcession).toString();
        this.data.push(this.tempModel);
      }
      this.hardwareSummary.emit(this.data.concat(this.storagedatasummary));
}
  
}


