import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  categories$;
  constructor( 
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) { 
    this.categories$= categoryService.getCategories();
  }

  saveProduct(product) {
    this.productService.createProduct(product);
    this.router.navigate(['/admin/admin-products']);
  }

  ngOnInit() {
  }

}
