
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';
import { configstore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/ThemeContext';
import { ContactProvider } from './context/ContactContext';
// import { BestsellerProvider } from './context/bestsellerContext';




function App() {
  const { store, persistor } = configstore()



  return (
    <>
    <ContactProvider>
    <ThemeProvider>
     
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route exact path="/*" element={<UserRoutes />} />

            <Route element={<PrivateRoutes />}>
              <Route exact path="/admin/*" element={<AdminRoutes />} />
            </Route>




          </Routes>
        </PersistGate>
      </Provider>
      </ThemeProvider>
      </ContactProvider>
    </>
  );
}

export default App;

