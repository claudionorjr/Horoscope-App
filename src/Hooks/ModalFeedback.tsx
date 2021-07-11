import React, { createContext, useCallback, useContext, useState } from 'react';

import ModalFeedback from '../Components/ModalFeedback';

interface ModalFeedbackContextProps {
  title: string;
  subTitle: string;
}

interface ModalFeedbackProps {
  show(modalDaties: ModalFeedbackContextProps): void;
}

const ModalFeedbackContext = createContext<ModalFeedbackProps>(
  {} as ModalFeedbackProps,
);

const useModalFeedback = () => useContext(ModalFeedbackContext);

const ModalFeedbackProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalProperties, setModalProperties] =
    useState<ModalFeedbackContextProps>({} as ModalFeedbackContextProps);

  const show = useCallback(
    (modalDaties: ModalFeedbackContextProps) => {
      setModalProperties(modalDaties);
      setIsVisible(true);
    },
    [isVisible],
  );

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <ModalFeedbackContext.Provider value={{ show }}>
      {children}
      <ModalFeedback isVisible={isVisible} {...modalProperties} hide={hide} />
    </ModalFeedbackContext.Provider>
  );
};

export { ModalFeedbackProvider, useModalFeedback };
