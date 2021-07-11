import React, { useCallback } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  Container,
  CustomFlatList,
  WrapperFlatList,
  CustomButton,
} from './styles';
import { Horoscopes } from '../../@Types';

import { useModalFeedback } from '../../Hooks';

const HomeScreen = () => {
  const { show } = useModalFeedback();
  const route: RouteProp<{ params: { horoscopes: Horoscopes[] } }, 'params'> =
    useRoute();

  const onOpenModal = useCallback((item: Horoscopes) => {
    show({
      title: item.sign,
      subTitle: item.description,
    });
  }, []);

  return (
    <Container>
      <CustomFlatList
        data={route.params.horoscopes}
        keyExtractor={value => `${value.sign}`}
        ItemSeparatorComponent={() => <WrapperFlatList />}
        numColumns={2}
        renderItem={({ item }) => (
          <CustomButton title={item.sign} onPress={() => onOpenModal(item)} />
        )}
      />
    </Container>
  );
};

export default HomeScreen;
