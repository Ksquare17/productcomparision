import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; 
import App from './App.tsx'
import store, { persistor } from './components/store/store.ts';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
   </BrowserRouter>
  </StrictMode>,
)
