import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

@NgModule()
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string, prop?: any): any {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    const _searchText = searchText.toLowerCase(),
      _isArr  = Array.isArray(value),
      _noProp = prop === '' || prop === '*',
      _flag   = _noProp ? false : _isArr && typeof value[0] === 'object' ? true : _isArr && typeof value[0] !== 'object' ? false : true;

    return value.filter(ele => {
      let val = _flag ? ele[prop].toString() : JSON.stringify([ele]);
      return val.toLowerCase().includes(_searchText);
    });
  }
}
