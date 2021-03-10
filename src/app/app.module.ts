import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GreetingDataManager } from './data-managers/greeting.data-manager';
import { ParentComponent } from './components/parent/parent.component';
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GreetingEffects } from './store/effects/greeting.effect';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([GreetingEffects]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    GreetingDataManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
