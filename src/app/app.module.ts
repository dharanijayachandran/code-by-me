import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CustomPipe } from './custom.pipe';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FormsComponent,
    DataBindingComponent,
    CustomPipe,
    RoutingComponent,
    HomeComponent,
    DashboardComponent,
    ServiceComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
