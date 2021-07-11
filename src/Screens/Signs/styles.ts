import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Horoscopes } from '../../@Types';
import { Button } from '../../Elements';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.styles.paddingHorizontal(24)};
`;

export const WrapperFlatList = styled.View`
  height: ${normalizePixel(24)}px;
`;

export const CustomFlatList = styled(
  FlatList as new () => FlatList<Horoscopes>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    paddingBottom: getBottomSpace() + normalizePixel(16),
    paddingTop: normalizePixel(16),
  },
})``;

export const CustomButton = styled(Button)`
  width: ${normalizePixel(136)}px;
  margin-left: ${normalizePixel(14)}px;
  margin-right: ${normalizePixel(14)}px;
`;
