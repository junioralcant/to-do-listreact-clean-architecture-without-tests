import {useGlobalText} from '../../../contexts/GlobalText/GlobalTextContext';

export function GlobalTextGetText() {
  const {text} = useGlobalText();

  return <h1>{text}</h1>;
}
