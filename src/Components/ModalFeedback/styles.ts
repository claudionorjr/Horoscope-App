import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { normalizePixel } from '../../Helpers';

export const CustomModal = styled.Modal.attrs({
  animationType: 'slide',
})`
  margin: 0;
`;

export const Container = styled(GestureHandlerRootView)`
  position: absolute;
  padding: ${normalizePixel(40)}px;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${normalizePixel(10)}px;
  border-top-right-radius: ${normalizePixel(10)}px;
`;

export const Title = styled.Text`
  text-align: center;
`;

export const SubTitle = styled.Text`
  margin-top: ${normalizePixel(8)}px;
  margin-bottom: ${normalizePixel(18)}px;
  text-align: center;
`;
