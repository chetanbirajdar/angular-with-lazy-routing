import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesDemoComponent } from './main/directives-demo/directives-demo.component';


// name-routing.ts ---> for routing configurations only

const routes: Routes = [
  {
    path: 'pipes-demo',
    loadChildren: () => import('./main/pipes-demo/pipes-demo.module').then(x => x.PipesDemoModule)
  },
  {
    path: 'data-binding-demo',
    loadChildren: () => import('./main/data-binding-demo/data-binding-demo.module').then(x => x.DataBindingDemoModule)
  },
  {
    path: 'directives-demo',
    component: DirectivesDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
