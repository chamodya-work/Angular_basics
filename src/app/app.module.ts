import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        HeaderComponent  // Import your standalone component here
    ],
    providers: [],
    bootstrap: [AppComponent]  // Bootstrap your root component
})
export class AppModule { }
