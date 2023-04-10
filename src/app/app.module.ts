import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/////////// Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

/////////// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { SetBackgroundImageDirective } from './directives/set-background-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarouselComponent,
    SetBackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
