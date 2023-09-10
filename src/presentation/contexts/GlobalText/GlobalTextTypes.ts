import {ReactNode} from 'react';

export type GlobalTextTypes = {
  text: string;
  handleSetText: (text: string) => void;
};

export type GlobalTextProps = {
  children: ReactNode;
};
