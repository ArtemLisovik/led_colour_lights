import { BrowserRouter } from 'react-router-dom';
import { Routings } from './routes/Routings';
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import './styles/reset.scss'
import './styles/base.scss'
import './styles/variables.scss'
import { Provider } from 'react-redux';
import { store } from 'store/store';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ua', 'en', 'ru'],
    fallbackLng: "ua",
    detection: {
      order: ['cookie', 'localStorage', 'htmITag', 'path', 'subdomain'],
      caches: ['cookie']
    },
  })


function App() {

  return (
    <Provider store={store}>
       <BrowserRouter>
      <Routings />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
