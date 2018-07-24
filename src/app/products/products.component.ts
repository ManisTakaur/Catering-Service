import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor( 
    productService: ProductService,
    categoryService: CategoryService,
    route: ActivatedRoute
    ) { 

    productService.getAllProduct().subscribe( products => {
      this.products = products;

      route.queryParamMap.subscribe( params =>{
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter( p => p.category === this.category) : 
           this.products;
      });
    }); 

    this.categories$ = categoryService.getCategories();


  }

  ngOnInit() {
  }

}
