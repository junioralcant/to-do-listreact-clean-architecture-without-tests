import {useState} from 'react';
import {GlobalTextContext} from './GlobalTextContext';
import {GlobalTextProps} from './GlobalTextTypes';

export function GlobalTextProvider({children}: GlobalTextProps) {
  const [text, setText] = useState('');

  function handleSetText(text: string) {
    setText(text);
  }

  return (
    <GlobalTextContext.Provider value={{text, handleSetText}}>
      {children}
    </GlobalTextContext.Provider>
  );
}
