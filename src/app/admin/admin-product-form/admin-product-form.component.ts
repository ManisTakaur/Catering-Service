import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'; 


@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  product= {};
  id;
  categories$;
  constructor( 
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
      
    this.categories$= categoryService.getCategories();

    this.id= this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService.getProduct(this.id).take(1).subscribe( p => this.product=p);    
  }

  saveProduct(product) {
    if (this.id) this.productService.updateProduct(this.id, product);
    else this.productService.createProduct(product);  

    this.router.navigate(['/admin/admin-products']);
  }

  ngOnInit() {
  }

}
