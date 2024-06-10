import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeFileEnding',
})
export class RemoveFileEndingPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const fileEndings = ['.jpg', '.jpeg', '.webp'];
    for (const ending of fileEndings) {
      if (value.toLowerCase().endsWith(ending)) {
        return value.substring(0, value.length - ending.length);
      }
    }

    return value;
  }
}
