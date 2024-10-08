import './App.css';
import Approutes from './routes/page.routes';
import { useState } from 'react';
import LanguageSelector from './components/languageSelector';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import animationData from './json/animation.json';
import MatrixRain from './components/MatrixRain';
import { motion } from 'framer-motion';

function App() {
  const [started, setStarted] = useState(false);
  const { t } = useTranslation();
  const handlerStart = () =>
  {
    setStarted(true);
  };
  const transitionVariants = 
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100vw" },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="start">
      {!started ? (
          <motion.div
            className="start-screen"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
          <MatrixRain />
          <LanguageSelector />
          <div className="animation-wrapper" >
            <Lottie options={defaultOptions} height={100} width={230} />
          </div>
          <br />
          <span className="start-button-text"onClick={handlerStart}>{t('Start')}</span>
        </motion.div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transitionVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          >
          <Approutes />
        </motion.div>
      )}
    </div>
  );
}

export default App;
