import './App.css';
import {Main} from './components/pages/Main/indes';
import {GlobalTextProvider} from './contexts/GlobalText/GlobalTextProvider';

function App() {
  return (
    <GlobalTextProvider>
      <Main />;
    </GlobalTextProvider>
  );
}

export default App;
