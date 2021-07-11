import React, { memo, useCallback } from 'react';
import { Container, CustomFlatList, WrapperFlatList } from './styles';
import { changeDataToBR, mockApi } from '../../Helpers';
import { Button } from '../../Elements';

const HomeScreen = () => {
  const onPressDate = useCallback(() => {}, []);

  return (
    <Container>
      <CustomFlatList
        data={mockApi.result.reverse()}
        keyExtractor={value => `${value.dt}`}
        ItemSeparatorComponent={() => <WrapperFlatList />}
        renderItem={({ item }) => (
          <Button
            title={`Horoscopo de ${changeDataToBR(item.dt)}`}
            onPress={onPressDate}
          />
        )}
      />
    </Container>
  );
};

export default memo(HomeScreen);
