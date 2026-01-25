"use client";

import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

type NeighbourContextType = {
  showlogin: boolean;
  setshowlogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const NeighbourlyContext = createContext<NeighbourContextType | undefined>(
  undefined
);

export const useNeighbourContext = (): NeighbourContextType => {
  const context = useContext(NeighbourlyContext);

  if (!context) {
    throw new Error(
      "useNeighbourContext must be used within a NeighbourContextProvider"
    );
  }

  return context;
};

type ProviderProps = {
  children: ReactNode;
};

const NeighbourContextProvider = ({ children }: ProviderProps) => {
  const [showlogin, setshowlogin] = useState<boolean>(false);

  return (
    <NeighbourlyContext.Provider
      value={{
        showlogin,
        setshowlogin,
      }}
    >
      {children}
    </NeighbourlyContext.Provider>
  );
};

export default NeighbourContextProvider;
