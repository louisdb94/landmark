import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'FilterUser' })
export class FilterUser implements PipeTransform {
  transform(categories: any, searchText: any, type: any): any {
    if(searchText == null) return categories;
    return categories.filter(function(category){
      if(type == 'User'){
        return category.user.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      }
      else if (type == 'Details'){
        return category.detail.toLowerCase().indexOf(searchText.toLowerCase()) > -1;}
      })
  }
}
