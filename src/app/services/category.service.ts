import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private db: AngularFireDatabase) { }
  categories$: Observable<any[]>;
  getCategories() { 
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
