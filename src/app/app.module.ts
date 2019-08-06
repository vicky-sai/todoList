import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CdkDragDropOverviewComponent } from './cdk-drag-drop-overview/cdk-drag-drop-overview.component';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CdkDragDropOverviewComponent,
    SearchPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
