import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TechnologComponent} from './technolog/technolog.component';
import {AddTechnologComponent} from './technolog/add-technolog/add-technolog.component';
import {AddDayTechnologyComponent} from './technolog/add-day-technology/add-day-technology.component';

@NgModule({
    declarations: [
        AppComponent,
        TechnologComponent,
        AddTechnologComponent,
        AddDayTechnologyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, MatNativeDateModule,
        FormsModule, ReactiveFormsModule, HttpClientModule
    ],
    exports: [
        MatButtonModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, MatNativeDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
