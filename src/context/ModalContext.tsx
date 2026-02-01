import React, { createContext, ReactNode, useState } from 'react';

type ModalContextType = {
  showFiguras: boolean;
  setShowFiguras: (value: boolean) => void;
  indiceFigura: number;
  setIndiceFigura: (value: number | ((prev: number) => number)) => void;
  modalMessage: string | null;
  setModalMessage: (value: string | null) => void;
  modalMessageColor: string;
  setModalMessageColor: (value: string) => void;
  modalMode: "figuras" | "pleno";
  setModalMode: (value: "figuras" | "pleno") => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showFiguras, setShowFiguras] = useState(false);
  const [indiceFigura, setIndiceFiguraState] = useState(0);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalMessageColor, setModalMessageColor] = useState<string>("");
  const [modalMode, setModalMode] = useState<"figuras" | "pleno">("figuras");

  // Wrapper para setIndiceFigura que maneja tanto números como funciones
  const setIndiceFigura = (value: number | ((prev: number) => number)) => {
    if (typeof value === 'function') {
      setIndiceFiguraState(value);
    } else {
      setIndiceFiguraState(value);
    }
  };

  const value: ModalContextType = {
    showFiguras,
    setShowFiguras,
    indiceFigura,
    setIndiceFigura,
    modalMessage,
    setModalMessage,
    modalMessageColor,
    setModalMessageColor,
    modalMode,
    setModalMode,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModals debe ser usado dentro de ModalProvider');
  }
  return context;
};
