import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, CustomFlatList, WrapperFlatList } from './styles';
import { changeDataToBR, mockApi } from '../../Helpers';
import { Button } from '../../Elements';
import { Horoscopes } from '../../@Types';

const HomeScreen = () => {
  const navigation = useNavigation();

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
