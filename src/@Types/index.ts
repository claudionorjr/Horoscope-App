export interface Horoscopes {
  title: string;
  description: string;
  sign: string;
}

export interface Horoscope {
  dt: string;
  horoscopes: Horoscopes[];
}

export interface HoroscopeResponse {
  result: Horoscope[];
}
