import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  height: ${Platform.OS === 'ios'
    ? normalizePixel(56) + getStatusBarHeight()
    : normalizePixel(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.fontStyles.white500(18, 24)};
`;

export const BackButton = styled(RectButton)`
  position: absolute;
  left: ${normalizePixel(24)}px;
  justify-content: center;
  align-items: center;
`;
