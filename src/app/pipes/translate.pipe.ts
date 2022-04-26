import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/Translate/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor( private translateService : TranslationService){}

  transform(value: string, ...args: unknown[]): string {
    return this.translateService.translate(value);
  }

}
