import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, CustomFlatList, WrapperFlatList } from './styles';
import { changeDataToBR, mockApi } from '../../Helpers';
import { Button } from '../../Elements';
import { HoroscopeResponse, Horoscopes } from '../../@Types';
import { useHoroscopeApi } from '../../Hooks';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [horoscopeResponse, setHoroscopeResponse] = useState<HoroscopeResponse>(
    {} as HoroscopeResponse,
  );
  const navigation = useNavigation();
  const { getHoroscope } = useHoroscopeApi();

  useEffect(() => {
    async function getDatiesFromApi() {
      setIsLoading(true);
      const response = await getHoroscope();
      if (response) {
        setHoroscopeResponse(response);
        setIsLoading(false);
      }
    }

    getDatiesFromApi();
  }, []);

  const onPressDate = useCallback(
    (horoscopes: Horoscopes[]) => {
      navigation.navigate('Signs', {
        horoscopes,
      });
    },
    [navigation],
  );

  return (
    <Container>
      <CustomFlatList
        data={mockApi.result.reverse()}
        keyExtractor={value => `${value.dt}`}
        ItemSeparatorComponent={() => <WrapperFlatList />}
        renderItem={({ item }) => (
          <Button
            title={`Horoscopo de ${changeDataToBR(item.dt)}`}
            onPress={() => onPressDate(item.horoscopes)}
          />
        )}
      />
    </Container>
  );
};

export default memo(HomeScreen);
