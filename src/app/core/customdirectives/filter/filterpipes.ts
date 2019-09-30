import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters',
  pure: false
})

@NgModule()
export class FilterPipes implements PipeTransform {

  transform(value: any[], searchJSON): any {
    if (!value) {
      return [];
    }

    if (!searchJSON) {
      return value;
    }

    for (const key in searchJSON) {
      if ( key !== '' ) {
        if (searchJSON.hasOwnProperty(key)) {
          // console.log(key + ' ' + searchJSON[key]);

          if (searchJSON[key]) {
            value = value.filter ( ele => {
              let val;

              if (key === '*') {
                val = JSON.stringify([ele]);
              } else {
                val = ele[key].toString();
              }

              // if the searchkey is an array, the value of the element should occur in the array.
              // if the searchkey is a string, the searchkey should occur in the value of the element.

              if (this.isStringArray(searchJSON[key])) {
                const searchkeys = JSON.stringify(searchJSON[key]);

                // make sure the array has values
                if (searchkeys !== '[]') {
                  return JSON.stringify(searchJSON[key]).toLowerCase().includes(val.toLowerCase());
                } else {
                  return true;
                }

              } else {
                return val.toLowerCase().includes(searchJSON[key].toLowerCase());
              }
            });
          }
        }
      }
    }
    return value;
  }

  isStringArray(value: any): value is string[] {
    if (value instanceof Array) {
      value.forEach(function(item) { // maybe only check first value?
        if (typeof item !== 'string') {
          return false
        }
      })
      return true
    }
    return false
  }
}
