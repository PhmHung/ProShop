import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 dùng react-dom/client thay vì react-dom (React 18)
import './bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // 👈 viết hoa P
import store from './store';

// tạo root (React 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* 👈 bọc App bằng Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
