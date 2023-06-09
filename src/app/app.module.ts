import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { NavComponent } from './shared/nav/nav.component';
import { OurStoryComponent } from './pages/about/subpages/our-story/our-story.component';
import { ContactComponent } from './pages/about/subpages/contact/contact.component';
import { SingUpComponent } from './pages/login/sing-up/sing-up.component';
import { SingInComponent } from './pages/login/sing-in/sing-in.component';
import {LoginComponent} from "./pages/login/login.component";
import {RouterOutlet} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {AppRoutingModule} from "./app-routing.module";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from "primeng/panel";
import {PasswordModule} from "primeng/password";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CarouselComponent,
    NavComponent,
    OurStoryComponent,
    ContactComponent,
    LoginComponent,
    SingUpComponent,
    SingInComponent,
    UserProfileComponent
  ],
    imports: [
        BrowserModule,
        ButtonModule,
        NgbModule,
        MenubarModule,
        AppRoutingModule,
        NgbCarouselModule,
        BrowserAnimationsModule,
        PanelModule,
        PasswordModule,
        PaginatorModule,
        DialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
