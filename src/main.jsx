
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import store from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider store={store}>
    <App />
  </RouterProvider >,
)
