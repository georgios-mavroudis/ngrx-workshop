import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GreetingDataManager } from './data-managers/greeting.data-manager';
import { ParentComponent } from './components/parent/parent.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
  ],
  providers: [
    GreetingDataManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
