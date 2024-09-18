import './App.css';
import Approutes from './routes/page.routes';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LanguageSelector from './components/languageSelector';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import animationData from './json/animation.json';

function App() {
  const [started, setStarted] = useState(false);
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings:
    {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handlerStart = () => {
    setStarted(true);
  };

  return (
    <BrowserRouter>
      <div className="main">
        {!started ? (
          <div className="start-screen">
            <LanguageSelector />
            <div className="animation-wrapper" onClick={handlerStart}>
              <Lottie options={defaultOptions} height={60} width={230}
              />
            </div>
            <br />
            <span className="start-button-text">{t('Start')}</span>
          </div>
        ) : (
          <Approutes />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
