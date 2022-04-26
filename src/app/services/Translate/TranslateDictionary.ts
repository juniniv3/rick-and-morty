import { TranslationSet } from "src/app/models/translation/Translation"

const TranslateDictionary: { [key: string] : TranslationSet} = {
  es: {
    languange: 'es',
    values: {
      alien: 'Alienígena',
      alive: 'Con vida',
      dead : "Muerto",
      disease: 'Enfermedad',
      female: 'Femenino',
      genderless: 'Sin género',
      human: 'Humano',
      humanoid: 'Humanoide',
      male: 'Masculino',
      "mythological creature": 'Criatura mitológica',
      unknown: 'Desconocido',
    }
  },
  en: {
    languange: 'en',
    values: {
      alien: 'alien',
      alive: 'Alive',
      dead : "Dead",
      disiase: 'Disease',
      female: 'Female',
      genderless: 'Genderless',
      human: 'Human',
      humanoid: 'Humanoid',
      male: 'Male',
      "mythological creature": 'Mythological Creature',
      unknown: 'Unknown',
    }
  }
}

export { TranslateDictionary }
