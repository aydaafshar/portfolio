import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModelHandler = () => {
    setShowModal(false);
  };
  return (
    <ModalContext.Provider
      value={{ showModal, showModalHandler, closeModelHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModalContext = () => {
  return useContext(ModalContext);
};
