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
import { PhotosComponent } from './photos/photos.component';
import { LikedComponent } from './liked/liked.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SuccessComponent } from './success/success.component';
import { UserImagesComponent } from './user/user-images/user-images.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    LikedComponent,
    FavoritesComponent,
    CheckOutComponent,
    SuccessComponent,
    UserImagesComponent,
    FeedComponent,
    AboutComponent,
    AddComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'photos', component: PhotosComponent, canActivate: [AuthGuardService] },
      { path: 'liked', component: LikedComponent, canActivate: [AuthGuardService] },
      { path: 'test', component: TestComponent, canActivate: [AuthGuardService] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'success', component: SuccessComponent, canActivate: [AuthGuardService] },
      { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuardService] },
      { path: 'about', component: AboutComponent },
      { path: 'add', component: AddComponent, canActivate: [AuthGuardService]  },
      { path: 'user/user-images', component: UserImagesComponent, canActivate: [AuthGuardService] },
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
