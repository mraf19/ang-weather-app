import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree',
})
export class DegreePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}°`;
  }
}
