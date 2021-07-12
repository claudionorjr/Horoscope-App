import { HoroscopeResponse } from '../@Types';
import api from './api';

const getHoroscopies = async (): Promise<HoroscopeResponse> => {
  const response = await api.get<HoroscopeResponse>('/api/horoscope/test');
  return response.data;
};

export default getHoroscopies;
