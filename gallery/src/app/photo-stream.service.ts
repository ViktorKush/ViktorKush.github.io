import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

interface FeaturedPhotosUrls {
  url?: string;
  ur2?: string;
}

interface Photo {
  url: string;
}

@Injectable()
export class PhotoStreamService {
  
  featuredPhotoStream: FirebaseObjectObservable<FeaturedPhotosUrls>;
  photoListStream: FirebaseListObservable<Photo[]>;
  
  constructor(private db: AngularFireDatabase, private userService: UserService, private auth: AuthService) {
    this.featuredPhotoStream = this.db.object(`/photos/featured`);
    this.photoListStream = this.db.list(`/photos/list`);
  }
  photoSelectedForList(event?: any) {
    const file: File = event.target.files[0];
    const metaData =  {'contentType': file.type};
    const nextAvailableKey = this.photoListStream.push({}).key;
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/list/${nextAvailableKey}`);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
    console.log(`Uploading ${file.name}`);
    
    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      console.log('upload is complete');
      const photo = {'url': uploadSnapshot.downloadURL};
//      firebase.database().ref(`/photos/list/${nextAvailableKey}`).push(uploadSnapshot.downloadURL);
      this.photoListStream.update(nextAvailableKey, photo);
    })
  }

}
