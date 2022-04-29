import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreModule } from  '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit(): void {
  }
  
  items: Observable<any[]>;
  constructor(db: Firestore) {

    this.items = db.collection('items').valueChanges();
  }

}
