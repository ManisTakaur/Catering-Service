import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  //categoryService: any;
  constructor(public categoryService: CategoryService) { }

  saveCategory(category) {
    this.categoryService.createCategory(category);
    console.log(category);
    
  }

  ngOnInit() {
  }

}
