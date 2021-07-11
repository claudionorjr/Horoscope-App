import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { normalizePixel } from '../../Helpers';
import { Container, Title, BackButton } from './styles';

interface Props {
  title: string;
  isBackArrow?: boolean;
}

const Header = ({ title, isBackArrow }: Props) => {
  const { colors } = useTheme();

  const onPressBack = useCallback(() => {}, []);

  return (
    <Container>
      {!!isBackArrow && (
        <BackButton onPress={onPressBack}>
          <MaterialIcons
            name="arrow-back"
            size={normalizePixel(24)}
            color={colors.white}
          />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
