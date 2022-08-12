import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import App from './routes/App';
import CreateEmployee from './routes/CreateEmployee.jsx';
import EmployeeList from './routes/EmployeeList';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<CreateEmployee />}></Route>
          <Route path='/employee-list' element={<EmployeeList/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
