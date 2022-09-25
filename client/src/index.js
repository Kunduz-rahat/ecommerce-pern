
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from "react";
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceSrore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);


