import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {OurStoryComponent} from "./pages/about/subpages/our-story/our-story.component";
import {ContactComponent} from "./pages/about/subpages/contact/contact.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SingInComponent} from "./pages/login/sing-in/sing-in.component";
import {SingUpComponent} from "./pages/login/sing-up/sing-up.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./pages/login/login.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'sing-in',
    component: SingInComponent,
  },

  { path: 'sing-up',
    component: SingUpComponent,
  },

  {
    path: 'user-profile',
    component: UserProfileComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

