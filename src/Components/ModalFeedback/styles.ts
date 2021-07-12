import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { normalizePixel } from '../../Helpers';

export const CustomModal = styled.Modal.attrs({
  animationType: 'slide',
})`
  margin: 0;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.fontStyles.white700(22, 24)};
  padding-top: ${normalizePixel(16)}px;
  padding-bottom: ${normalizePixel(16)}px;
  width: 100%;
`;

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => theme.fontStyles.white500(18, 24)};
`;

export const CustomScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: normalizePixel(16),
    paddingBottom: normalizePixel(getBottomSpace() + 72),
    paddingLeft: normalizePixel(24),
    paddingRight: normalizePixel(24),
  },
})``;

export const ButtonContainer = styled(GestureHandlerRootView)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.styles.paddingHorizontal(24)}
  padding-top: ${normalizePixel(8)}px;
  padding-bottom: ${normalizePixel(getBottomSpace() + 16)}px;
  width: 100%;
  bottom: 0;
`;
