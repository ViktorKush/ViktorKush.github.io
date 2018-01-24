import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { UserService } from './../../user.service';
import { AuthService } from './../../auth.service';
import { Observable } from 'rxjs/Observable';

interface FeaturedPhotosUrls {
  url?: string;
  ur2?: string;
}

interface Photo {
  url: string;
}

  @Component({
  selector: 'epam-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {


  featuredPhotoStream: FirebaseObjectObservable<FeaturedPhotosUrls>;
  photoListStream: FirebaseListObservable<Photo[]>;
  
  constructor(private db: AngularFireDatabase, private userService: UserService, private auth: AuthService) {
    this.featuredPhotoStream = this.db.object(`/photos/featured`);
    this.photoListStream = this.db.list(`/photos/list`);
  }
//  featuredPhotoSelected(event:any, photoName: string) {
//    let user = firebase.auth().currentUser;
//    let userName = user.uid;
//    const file: File = event.target.files[0];
//    
//    const metaData =  {'contentType': file.type};
//    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/${userName}/featured/${photoName}`);
//    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
//    console.log(`Uploading ${file.name}`);
//    
//    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
//      console.log("upload is complete");
//      firebase.database().ref(`/photos/featured/${photoName}`).set(uploadSnapshot.downloadURL);
//    })
//  }
  photoSelectedForList(event: any) {
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
  
//  var modal = document.getElementById('myModal');
//
//var img = document.getElementById('myImg');
//var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() { 
//    modal.style.display = "none";
//}

}
