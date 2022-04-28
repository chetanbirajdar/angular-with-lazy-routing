import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo.component';
import { PipesDemoRoutingModule } from './pipes-demo-routing.module';

@NgModule({
  declarations: [PipesDemoComponent], // components
  imports: [
    CommonModule,
    PipesDemoRoutingModule
  ]
})
export class PipesDemoModule { }
