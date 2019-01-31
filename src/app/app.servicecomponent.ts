import { Component, Output, EventEmitter,Input } from '@angular/core';
import {Model} from './app.model';
@Component({
  selector: 'service-component',
  templateUrl: './app.servicecomponent.html',
})
export class ServiceComponent {
  @Input() showOtherTabData;
  data:Array<Model>;
  tempModel:Model;
  orderInstallationServices:string=this.orderInstallationServices;
  orderDataMigrationServices:string=this.orderDataMigrationServices;
  orderDMForBlock:string=this.orderDMForBlock;
  noOfBlocks:number=this.noOfBlocks;
  orderDMEventforBlock:string=this.orderDMEventforBlock;
  serviceInput1:number=this.serviceInput1;
  serviceInput2:number=this.serviceInput2;
  serviceInput3:number=this.serviceInput3;
  serviceInput4:number=this.serviceInput4;
  serviceInput5:number=this.serviceInput5;
  serviceInput6:number=this.serviceInput6;
  @Output() serviceData:EventEmitter<Model[]>=new EventEmitter<Model[]>();
  onChanges(){
    console.log('serviceonchangecalled');
    this.data=new Array<Model>();
    if(this.serviceInput1>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput1";
      this.tempModel.value=this.serviceInput1.toString();
      this.data.push(this.tempModel);
    }
    if(this.serviceInput2>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput2";
      this.tempModel.value=this.serviceInput2.toString();
      this.data.push(this.tempModel);
    }
    if(this.serviceInput3>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput3";
      this.tempModel.value=this.serviceInput3.toString();
      this.data.push(this.tempModel);
    }
    if(this.serviceInput4>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput4";
      this.tempModel.value=this.serviceInput4.toString();
      this.data.push(this.tempModel);
    }
    if(this.serviceInput5>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput5";
      this.tempModel.value=this.serviceInput5.toString();
      this.data.push(this.tempModel);
    }
    if(this.serviceInput6>0){
      this.tempModel=new Model();
      this.tempModel.id="serviceInput6";
      this.tempModel.value=this.serviceInput6.toString();
      this.data.push(this.tempModel);
    }
    console.log(this.data.length);
    this.serviceData.emit(this.data);
  }
}