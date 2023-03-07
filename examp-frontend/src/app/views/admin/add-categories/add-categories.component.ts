import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent {
  category = {
    title: '',
    description: '',
  };
  constructor(
    private _category: CategoryService,
    private _snack: MatSnackBar,
  ) {}
  formSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this.category.description='';
      this.category.title='';
      this._snack.open('title required', '', { duration: 3000 });
      return;
    }
    this._category.addCategory(this.category).subscribe(
      (data: any) => {
        this._snack.open('category added', '', { duration: 3000 });
      },
      (error) => console.log(error)
    );
  }
}
