import React from 'react';
import { ModalFeedbackProvider } from './ModalFeedback';

const ContextProvider: React.FC = ({ children }) => (
  <ModalFeedbackProvider>{children}</ModalFeedbackProvider>
);

export default ContextProvider;
