import {createContext, useContext} from 'react';
import {GlobalTextTypes} from './GlobalTextTypes';

export const GlobalTextContext = createContext({} as GlobalTextTypes);

export const useGlobalText = () => useContext(GlobalTextContext);
