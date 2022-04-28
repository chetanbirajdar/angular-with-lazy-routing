import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { DataBindingDemoRoutingModule } from './data-binding-demo-routing.module';

@NgModule({
  declarations: [DataBindingDemoComponent],
  imports: [
    CommonModule,
    DataBindingDemoRoutingModule

  ]
})
export class DataBindingDemoModule { }
