import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { ButtonRendererComponent } from './renderer/button-renderer.component';


@NgModule({
  declarations: [AppComponent,ButtonRendererComponent],
  imports: [
    BrowserModule, 
    AgGridModule.withComponents([ButtonRendererComponent]),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}
