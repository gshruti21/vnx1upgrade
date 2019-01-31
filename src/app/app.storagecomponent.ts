import { Component, EventEmitter, Output } from "@angular/core";
import {Model} from './app.model';

@Component({
    selector:'storage-component',
    templateUrl:'./app.storagecomponent.html',
})

export class StorageComponent{
    data:Array<Model>;
    tempModel:Model;
    NEBSConfiguration:string=this.NEBSConfiguration;
    existingDPE:string=this.existingDPE;
    existingVault:string=this.existingVault;
    vaultFileBlock:string=this.vaultFileBlock;
    DPE1:string=this.DPE1;
    drive1:string=this.drive1;
    FileBlock1:string=this.FileBlock1;
    installed1:number=this.installed1;
    added1:number=this.added1;
    DPE2:string=this.DPE2;
    drive2:string=this.drive2;
    FileBlock2:string=this.FileBlock2;
    installed2:number=this.installed2;
    added2:number=this.added2;
    DPE3:string=this.DPE3;
    drive3:string=this.drive3;
    FileBlock3:string=this.FileBlock3;
    installed3:number=this.installed3;
    added3:number=this.added3;
    emptyDPE2U:number=this.emptyDPE2U;
    emptyDPE3U:number=this.emptyDPE3U;
    @Output() storagedata:EventEmitter<Model[]>=new EventEmitter<Model[]>();
    onChange(){
        console.log('storagedata called');
        this.data=new Array<Model>();
        if(this.NEBSConfiguration){
            this.tempModel=new Model();
        this.tempModel.id="NEBSConfiguration";
        this.tempModel.value=this.NEBSConfiguration;
        this.data.push(this.tempModel);
        }
        if(this.existingDPE){
            this.tempModel=new Model();
        this.tempModel.id="existingDPE";
        this.tempModel.value=this.existingDPE;
        this.data.push(this.tempModel);
        }
        if(this.existingVault){
            this.tempModel=new Model();
        this.tempModel.id="existingVault";
        this.tempModel.value=this.existingVault;
        this.data.push(this.tempModel);
        }
        if(this.vaultFileBlock){
            this.tempModel=new Model();
        this.tempModel.id="vaultFileBlock";
        this.tempModel.value=this.vaultFileBlock;
        this.data.push(this.tempModel);
        }
        if(this.DPE1){
            this.tempModel=new Model();
        this.tempModel.id="DPE1";
        this.tempModel.value=this.DPE1;
        this.data.push(this.tempModel);
        }
        if(this.drive1){
            this.tempModel=new Model();
        this.tempModel.id="drive1";
        this.tempModel.value=this.drive1;
        this.data.push(this.tempModel);
        }
        if(this.FileBlock1){
            this.tempModel=new Model();
        this.tempModel.id="FileBlock1";
        this.tempModel.value=this.FileBlock1;
        this.data.push(this.tempModel);
        }
        if(this.installed1>0){
            this.tempModel=new Model();
        this.tempModel.id="installed1";
        this.tempModel.value=this.installed1.toString();
        this.data.push(this.tempModel);
        }
        if(this.added1>0){
            this.tempModel=new Model();
        this.tempModel.id="added1";
        this.tempModel.value=this.added1.toString();
        this.data.push(this.tempModel);
        }
        if(this.DPE2){
            this.tempModel=new Model();
        this.tempModel.id="DPE2";
        this.tempModel.value=this.DPE2;
        this.data.push(this.tempModel);
        }
        if(this.drive2){
            this.tempModel=new Model();
        this.tempModel.id="drive2";
        this.tempModel.value=this.drive2;
        this.data.push(this.tempModel);
        }
        if(this.FileBlock2){
            this.tempModel=new Model();
        this.tempModel.id="FileBlock2";
        this.tempModel.value=this.FileBlock2;
        this.data.push(this.tempModel);
        }
        if(this.installed2>0){
            this.tempModel=new Model();
        this.tempModel.id="installed2";
        this.tempModel.value=this.installed2.toString();
        this.data.push(this.tempModel);
        }
        if(this.added2>0){
            this.tempModel=new Model();
        this.tempModel.id="added2";
        this.tempModel.value=this.added2.toString();
        this.data.push(this.tempModel);
        }
        if(this.DPE3){
            this.tempModel=new Model();
        this.tempModel.id="DPE3";
        this.tempModel.value=this.DPE3;
        this.data.push(this.tempModel);
        }
        if(this.drive3){
            this.tempModel=new Model();
        this.tempModel.id="drive3";
        this.tempModel.value=this.drive3;
        this.data.push(this.tempModel);
        }
        if(this.FileBlock3){
            this.tempModel=new Model();
        this.tempModel.id="FileBlock3";
        this.tempModel.value=this.FileBlock3;
        this.data.push(this.tempModel);
        }
        if(this.installed3>0){
            this.tempModel=new Model();
        this.tempModel.id="installed3";
        this.tempModel.value=this.installed3.toString();
        this.data.push(this.tempModel);
        }
        if(this.added3>0){
            this.tempModel=new Model();
        this.tempModel.id="added3";
        this.tempModel.value=this.added3.toString();
        this.data.push(this.tempModel);
        }
        if(this.emptyDPE2U>0){
            this.tempModel=new Model();
        this.tempModel.id="emptyDPE2U";
        this.tempModel.value=this.emptyDPE2U.toString();
        this.data.push(this.tempModel);
        }
        if(this.emptyDPE3U>0){
            this.tempModel=new Model();
        this.tempModel.id="emptyDPE3U";
        this.tempModel.value=this.emptyDPE3U.toString();
        this.data.push(this.tempModel);
        }
        this.storagedata.emit(this.data);
    }

    disktypes: Disktype[] = [
        { value: '25 x 2.5"'},
        { value: '15 x 3.5"'}
      ]; 
}

interface Disktype{
    value:string;
}