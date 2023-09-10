import {ChangeEvent, useState} from 'react';
import {useGlobalText} from '../../../contexts/GlobalText/GlobalTextContext';

export function GlobalTextSetText() {
  const {handleSetText} = useGlobalText();
  const [text, setText] = useState('');

  function changeText(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        data-testid="input"
        type="text"
        value={text}
        onChange={changeText}
      />
      <button onClick={() => handleSetText(text)}>Alterar</button>;
    </div>
  );
}
