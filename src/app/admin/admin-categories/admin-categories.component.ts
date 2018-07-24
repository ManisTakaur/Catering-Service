import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  //categoryService: any;
  constructor(
    public categoryService: CategoryService,
    public router: Router,
    private route: ActivatedRoute) { }

  saveCategory(category) {
    this.categoryService.createCategory(category);
    this.router.navigate(['/products']);
    //console.log(category);
    
  }

  ngOnInit() {
  }

}
