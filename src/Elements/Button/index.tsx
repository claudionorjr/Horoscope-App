import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
  rightIcon?: React.ReactElement | null | undefined;
}

const Button = ({ title, onPress, rightIcon, ...rest }: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
      {rightIcon && rightIcon}
    </Container>
  );
};

export default Button;
