export type RootStackParamList = {
  Home: undefined;
  Details: { vehicle: Vehicle };
  Settings: undefined;
};

export interface Vehicle {
  id: number;
  name: string;
  driver: string;
  category: string;
  phone: string;
  latitude: number;
  longitude: number
}

enum ELanguageId {
  en = "en",
  ru = "ru"
}

interface ILanguage {
  id: ELanguageId,
  title: string,
}

export const languages: ILanguage[] = [
  { id: ELanguageId.en, title: "English" },
  { id: ELanguageId.ru, title: "Русский" }
]
