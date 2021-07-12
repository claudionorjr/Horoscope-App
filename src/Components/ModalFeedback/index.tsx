import React from 'react';
import { Button } from '../../Elements';
import {
  Container,
  SubTitle,
  Title,
  CustomModal,
  ButtonContainer,
  CustomScrollView,
} from './styles';

interface ModalFeedbackProps {
  title: string;
  subTitle: string;
  hide: () => void;
  isVisible: boolean;
}

const ModalFeedback = ({
  title,
  subTitle,
  isVisible,
  hide,
}: ModalFeedbackProps) => (
  <CustomModal visible={isVisible}>
    <Title>{title}</Title>
    <Container>
      <CustomScrollView bounces={false}>
        <SubTitle>{`${subTitle}`}</SubTitle>
      </CustomScrollView>
    </Container>
    <ButtonContainer>
      <Button title="Voltar" onPress={hide} />
    </ButtonContainer>
  </CustomModal>
);

export default ModalFeedback;
