import { Component } from '@angular/core';

@Component({
  selector: 'software-component',
  templateUrl: './app.softwarecomponent.html',
})
export class SoftwareComponent {
  selectedvalues:string[];
  existingSoftwaremessage:string;
  additionalSoftwaremessage:string;
  useRecoverPoint:string=this.useRecoverPoint;
  onExistingSoftwareSelection(e,v){
    this.selectedvalues=v.selected.map(item=>item.value);
    if(this.selectedvalues.length==5){
      this.existingSoftwaremessage="Total Efficiency Suite and Total Protection Suite has been selected!";
    }
    else if(this.selectedvalues.length>=3 && this.selectedvalues.includes('Local Protection Suite') && this.selectedvalues.includes('Remote Protection Suite') && this.selectedvalues.includes('Application Proctection')){
      this.existingSoftwaremessage="Total Protection Suite has been selected!";
    }
    else{
      this.existingSoftwaremessage="";
    }
  }
  onAdditionalSoftwareSelection(e,v){
    this.selectedvalues=v.selected.map(item=>item.value);
    if(this.selectedvalues.length==5){
      this.additionalSoftwaremessage="Total Efficiency Suite and Total Protection Suite has been selected!";
    }
    else if(this.selectedvalues.length>=3 && this.selectedvalues.includes('Local Protection Suite') && this.selectedvalues.includes('Remote Protection Suite') && this.selectedvalues.includes('Application Proctection')){
      this.additionalSoftwaremessage="Total Protection suite has been selected!";
    }
    else{
      this.additionalSoftwaremessage="";
    }
  }
  
}