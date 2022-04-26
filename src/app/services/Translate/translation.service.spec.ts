import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should translate "Male" word to spanish (Masculino)', () => {
    const mockWord = "Male";
    const mockTranslatedWord = "Masculino";
    expect(service.translate(mockWord)).toBe(mockTranslatedWord);
  });

  it('should translate "Alien" word to spanish (Alienígena)', () => {
    const mockWord = "Alien";
    const mockTranslatedWord = "Alienígena";
    expect(service.translate(mockWord)).toBe(mockTranslatedWord);
  });

  it('should translate "Human" word to spanish (Humano)', () => {
    const mockWord = "Human";
    const mockTranslatedWord = "Humano";
    expect(service.translate(mockWord)).toBe(mockTranslatedWord);
  });

});

