import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DegreePipe } from './degree.pipe';

@NgModule({
  declarations: [AppComponent, DegreePipe],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [DegreePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
