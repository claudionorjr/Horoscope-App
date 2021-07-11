import React from 'react';
import { Button } from '../../Elements';
import { Container, SubTitle, Title, CustomModal } from './styles';

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
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Button title="Voltar" onPress={hide} />
    </Container>
  </CustomModal>
);

export default ModalFeedback;
