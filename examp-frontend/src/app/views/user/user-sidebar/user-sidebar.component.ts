import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent {
  constructor(private _cat: CategoryService, private _snack: MatSnackBar) {}
  categories: any;

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(data);
      },
      (error: any) => {
        console.log(error);
        this._snack.open('error occured in loadin categories', '', {
          duration: 3000,
        });
      }
    );
  }
}
