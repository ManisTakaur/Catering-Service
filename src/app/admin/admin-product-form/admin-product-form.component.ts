import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';



@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  categories$;
  constructor( categoryService: CategoryService) { 
    this.categories$= categoryService.getCategories();
  }

  ngOnInit() {
  }

}
