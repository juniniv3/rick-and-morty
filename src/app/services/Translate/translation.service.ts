import { Injectable } from '@angular/core';
import { TranslationSet } from '../../models/translation/Translation';
import { TranslateDictionary } from './TranslateDictionary';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public languages = [ 'es' , 'en'];
  public language = 'es';
  private dictionary: { [key: string] : TranslationSet} =  TranslateDictionary;
  constructor() {

  }

  translate(word: string) : string {
    return  this.dictionary[this.language].values[word.toLocaleLowerCase()] ?
      this.dictionary[this.language].values[word.toLocaleLowerCase()]
      : word
  }
}
