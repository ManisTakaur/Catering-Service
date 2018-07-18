import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
//import { AngularFireDatabase } from 'angularfire2/database-deprecated/firebase_list_factory';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private db: AngularFireDatabase) { }
  categories$: Observable<any[]>;
  getCategories() { 
    return this.db.list('/categories');
  }
}
