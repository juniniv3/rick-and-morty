import { TranslationService } from '../services/Translate/translation.service';
import { TranslatePipe } from './translate.pipe';

const pipe = new TranslatePipe( new TranslationService);

describe('TranslatePipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform Female word to Femenino', () => {
    const mockWord = "Female";
    const mockTransformedWord = "Femenino";
    expect(pipe.transform(mockWord)).toBe(mockTransformedWord);
  });

  it('should transform Unknown word to Desconocido', () => {
    const mockWord = "Unknown";
    const mockTransformedWord = "Desconocido";
    expect(pipe.transform(mockWord)).toBe(mockTransformedWord);
  });
});
