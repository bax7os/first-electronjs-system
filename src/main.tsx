

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.tsx';
import "./Styles/index.less";
import { Provider } from 'react-redux';
import { store } from 'Data/Objects/Store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>  
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
