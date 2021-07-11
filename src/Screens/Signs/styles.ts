import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Horoscope } from '../../@Types';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.styles.paddingHorizontal(24)};
`;

export const WrapperFlatList = styled.View`
  height: ${normalizePixel(16)}px;
`;

export const CustomFlatList = styled(
  FlatList as new () => FlatList<Horoscope>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + normalizePixel(16),
    paddingTop: getBottomSpace() + normalizePixel(16),
  },
})``;
