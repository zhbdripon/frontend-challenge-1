import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';

import App from './app/app';
import { SplashScreen } from './app/components/SplashScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
      <RecoilRoot>
        <SplashScreen />  
        <App />
        <Toaster />
      </RecoilRoot>
  </StrictMode>
);
