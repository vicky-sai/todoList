import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CdkDragDropOverviewComponent } from './cdk-drag-drop-overview/cdk-drag-drop-overview.component';
import  { ListingComponent} from './listing/listing.component';
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
