import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  pure: false
})
export class FormatPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
