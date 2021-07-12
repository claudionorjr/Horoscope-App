import React, { createContext, useCallback, useContext } from 'react';
import { HoroscopeResponse } from '../@Types';
import getHoroscopies from '../Services';

interface HoroscopeApiProps {
  getHoroscope(): Promise<HoroscopeResponse>;
}

const HoroscopeApiContext = createContext<HoroscopeApiProps>(
  {} as HoroscopeApiProps,
);

const useHoroscopeApi = () => useContext(HoroscopeApiContext);

const HoroscopeApiProvider: React.FC = ({ children }) => {
  const getHoroscope = useCallback(async () => {
    return await getHoroscopies();
  }, []);

  return (
    <HoroscopeApiContext.Provider value={{ getHoroscope }}>
      {children}
    </HoroscopeApiContext.Provider>
  );
};

export { HoroscopeApiProvider, useHoroscopeApi };
