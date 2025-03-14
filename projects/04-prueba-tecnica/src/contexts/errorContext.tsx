import React, { createContext, useContext, ReactNode } from "react";
import { useSnackbar } from "notistack";

interface ErrorContextType {
  showError: (message: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError debe usarse dentro de un ErrorProvider");
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const showError = (message: string) => {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: { horizontal: "right", vertical: "top" }
    });
  };

  return (
    <ErrorContext.Provider value={{ showError }}>  
        {children}
    </ErrorContext.Provider>
  );
};
