import {useState} from 'react';
import {Button} from '../01-Button';

export function ShowText() {
  const [isShowText, setIsShowText] = useState(false);

  return (
    <div>
      {isShowText && <h1>Meu titulo</h1>}

      <Button title="Mostrar" onClick={() => setIsShowText(true)} />
    </div>
  );
}
