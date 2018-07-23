import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private db: AngularFireDatabase) { }

  createProduct(product) {
    this.db.list('/products').push(product);
  }

  getAllProduct() {
    return this.db.list('/products');
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    return this.db.object('/products/'+productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}
