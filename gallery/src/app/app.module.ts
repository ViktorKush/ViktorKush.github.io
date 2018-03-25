import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
//import { LikedComponent } from './liked/liked.component';
//import { FavoritesComponent } from './favorites/favorites.component';
import { FeedComponent } from './user/feed/feed.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AddComponent } from './add/add.component';
import { PhotoStreamService } from './photo-stream.service';
import { AgmCoreModule } from '@agm/core';
import { TestComponent } from './test/test.component';
import { PagerService } from './pager.service';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
//    LikedComponent,
//    FavoritesComponent,
    FeedComponent,
    AboutComponent,
    AddComponent,
    TestComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: FirstComponent  },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]  },
//      { path: 'liked', component: LikedComponent, canActivate: [AuthGuardService] },
      { path: 'test', component: TestComponent, canActivate: [AuthGuardService] },
//      { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuardService] },
      { path: 'about', component: AboutComponent },
      { path: 'add', component: AddComponent, canActivate: [AuthGuardService]  },
      { path: 'user/feed', component: FeedComponent, canActivate: [AuthGuardService] }
    ]),
//    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOmadRwTzY08OHF88dEm6xNjs2nCZ077w'
    }),
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    PagerService,
    PhotoStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
