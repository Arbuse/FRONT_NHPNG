import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SingInComponent} from "./pages/login/sing-in/sing-in.component";
import {SingUpComponent} from "./pages/login/sing-up/sing-up.component";
import {NgModule} from "@angular/core";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {AchievementsComponent} from "./pages/user-profile/achievements/achievements.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'sing-in',
    component: SingInComponent,
  },

  { path: 'quiz',
    component: QuizComponent,
  },

  { path: 'sing-up',
    component: SingUpComponent,
  },

  { path: 'achievements',
    component: AchievementsComponent
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

