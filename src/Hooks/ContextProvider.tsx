import React from 'react';
import { ModalFeedbackProvider } from './ModalFeedback';
import { HoroscopeApiProvider } from './HoroscopeApi';

const ContextProvider: React.FC = ({ children }) => (
  <HoroscopeApiProvider>
    <ModalFeedbackProvider>{children}</ModalFeedbackProvider>
  </HoroscopeApiProvider>
);

export default ContextProvider;
