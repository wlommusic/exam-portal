import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent {
  categoryList:any = [];
  constructor(private _categoryService:CategoryService){}
  ngOnInit():void{
    this._categoryService.categories().subscribe((data:any)=>{
      this.categoryList = data;
      // console.log(this.categoryList);
    },
    (error)=>{
      console.log(error);
    })
  }
}
