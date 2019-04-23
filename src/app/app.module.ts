import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicNgrxModule, DynamicStoreConfig } from 'dynamic-ngrx';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';

const config: DynamicStoreConfig = {
  entities: [
    { entity: 'Todo', },
  ],
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicNgrxModule.forRoot(config),
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
