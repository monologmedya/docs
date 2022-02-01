import { createContext } from 'react';

export type GlobalContextProps = {
  apiDescriptionUrl: string;
  setDescriptionUrl: (value: string) => void;
};

export const defaultGlobalContext: GlobalContextProps = {
  apiDescriptionUrl: '',
  setDescriptionUrl: () => {},
};

export const GlobalContext = createContext<GlobalContextProps>(defaultGlobalContext);
