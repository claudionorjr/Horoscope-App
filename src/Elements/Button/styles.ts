import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${normalizePixel(48)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.fontStyles.white500(18, 24)};
`;
