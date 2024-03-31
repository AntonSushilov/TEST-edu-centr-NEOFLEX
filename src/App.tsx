import React, { useEffect } from 'react';
// import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AppHeader from 'components/AppHeader/AppHeader';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import styles from './App.module.css';
import AppFooter from 'components/AppFooter/AppFooter';
import CartPage from 'pages/CartPage/CartPage';
import ProductDetailsPage from 'pages/ProductDetailsPage/ProductDetailsPage';
import { useDispatch } from 'react-redux';
import { getProductInfoList } from 'services/ProductInfo/action';
import { useAppDispatch } from 'hooks/UseAppDispatch';
import ProductDetails from 'components/Products/ProductDetails/ProductDetails';
import NotFound404 from 'pages/NotFound404/NotFound404';

function App() {
  let location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductInfoList());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.container}>
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/wish-list" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/products/:id"
              element={
                <Modal title="Детали" onClose={handleModalClose}>
                  <ProductDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
