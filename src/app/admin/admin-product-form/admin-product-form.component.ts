import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';



@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  categories$;
  constructor( categoryService: CategoryService, private productService: ProductService) { 
    this.categories$= categoryService.getCategories();
  }

  saveProduct(product) {
    this.productService.createProduct(product);
  }

  ngOnInit() {
  }

}
