import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {store} from './store/store.ts'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
